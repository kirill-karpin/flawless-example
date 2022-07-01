export default {
  db: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'example',
      password: 'example',
      database: 'example-db',
      port: 5432,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: './migrations',
      tableName: 'migrations',
      user: 'postgres',
      password: 'postgres',
    },
    acquireConnectionTimeout: 30 * 1000,
  },
};
