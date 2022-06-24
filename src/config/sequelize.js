const {Sequelize} = require('sequelize')
const envConfig = require('../utils/envConfig')

const config = require('./config')

const dbOption = config[envConfig.nodeEnv ?? 'development']

module.exports = new Sequelize(dbOption)