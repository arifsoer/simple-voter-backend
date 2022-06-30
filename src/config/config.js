import { pgHost, pgPort, pgUsername, pgPassword, pgDbName } from '../utils/envConfig.js';

const development = {
  host: pgHost ?? "localhost",
  port: pgPort ?? 5432,
  username: pgUsername ?? "username",
  password: pgPassword ?? "password",
  database: pgDbName ?? "database",
  dialect: "postgres",
};

export default {development}