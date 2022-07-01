import { Knex } from 'knex';
import * as uuid from 'uuid';
import { hashPassword } from '../src/utils/hash-password';
const user = 'example';
const password = 'example';
const db = 'example-db';

export async function up(knex: Knex) {
  await knex.raw(
    `CREATE ROLE ${user} LOGIN NOSUPERUSER NOINHERIT NOCREATEDB NOCREATEROLE NOREPLICATION password ' ${password} '`
  );
  await knex.schema.raw(`GRANT CONNECT ON DATABASE "${db}" TO example`);
  await knex.schema.raw(`CREATE SCHEMA account$`);
  await knex.raw(`GRANT USAGE ON SCHEMA account$ TO ${user};`);

  await knex.schema.withSchema('account$').createTable('user', table => {
    table.uuid('id').primary();
    table.text('login').notNullable();
    table.text('password').notNullable();
    table.text('name');
    table.text('phone').comment('Phone number');
    table.text('email').comment('E-mail');
    table.timestamps(true, true);
    table.unique(['login', 'email', 'phone']);
  });

  await knex.schema.withSchema('account$').createTable('auth', table => {
    table.uuid('id').primary();
    table.string('user_id').notNullable();
    table.uuid('token').notNullable();
    table.timestamps(true, true);
  });

  await knex.raw(`GRANT SELECT, INSERT, UPDATE ON TABLE account$.auth TO ${user};`);

  const users = await Promise.all(
    [
      {
        id: uuid.v4(),
        login: 'admin',
        password: 'admin',
        name: 'Administrator',
      },
    ].map(async item => {
      item.password = await hashPassword(item.password);
      return item;
    })
  );

  await knex('account$.user').insert(users);
}

export async function down(knex: Knex) {
  await knex.schema.raw(`REVOKE CONNECT ON DATABASE "${db}" FROM ${user}`);
  await knex.raw(`DROP ROLE  ${user}`);
  await knex.schema.withSchema('account$').dropTable('user');
  await knex.schema.withSchema('account$').dropTable('auth');
  await knex.schema.raw('DROP SCHEMA account$');
}
