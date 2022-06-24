const envConfig = require('../utils/envConfig')

const development = {
  host: envConfig.pgHost ?? "localhost",
  port: envConfig.pgPort ?? 5432,
  username: envConfig.pgUsername ?? "username",
  password: envConfig.pgPassword ?? "password",
  database: envConfig.pgDbName ?? "database",
  dialect: "postgres",
};

module.exports = {development}