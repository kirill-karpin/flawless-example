import config from 'config';

const {
  migrations: { user, password },
} = config.get('db');
const db = config.get('db');

module.exports = {
  ...(typeof db === 'object' ? db : {}),
  connection: {
    // @ts-ignore
    ...(typeof db === 'object' ? db?.connection : {}),
    user,
    password,
  },
};
