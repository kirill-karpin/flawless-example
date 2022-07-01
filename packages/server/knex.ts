import * as pg from 'pg';
import config from 'config';

import { Knex, knex as knexInstance } from 'knex';

import { knexSnakeCaseMappers } from 'objection';

// https://github.com/brianc/node-postgres/pull/353#issuecomment-283709264
// bigint
pg.types.setTypeParser(pg.types.builtins.INT8, parseInt);
pg.types.setTypeParser(pg.types.builtins.NUMERIC, parseFloat);
const db = config.get('db');
// Initialize knex
export const knex: Knex = knexInstance({
  ...(typeof db === 'object' ? db : {}),
  ...knexSnakeCaseMappers(),
});
