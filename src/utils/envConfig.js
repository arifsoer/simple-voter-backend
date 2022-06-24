require('dotenv').config()

module.exports = {
  nodeEnv: process.env.NODE_ENV,

  pgUsername: process.env.PG_USERNAME,
  pgPassword: process.env.PG_PASSWORD,
  pgHost: process.env.PG_HOST,
  pgPort: process.env.PG_PORT,
  pgDbName: process.env.PG_DB_NAME
}