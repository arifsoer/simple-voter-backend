import 'dotenv/config'

export const nodeEnv = process.env.NODE_ENV
export const pgUsername = process.env.PG_USERNAME
export const pgPassword = process.env.PG_PASSWORD
export const pgHost = process.env.PG_HOST
export const pgPort = process.env.PG_PORT
export const pgDbName = process.env.PG_DB_NAME
export const secretKey = process.env.SECRET_KEY