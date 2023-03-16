const dotenv = require('dotenv');
dotenv.config();



const Sequilize = require('sequelize');

module.exports = new Sequilize(process.env.DB, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
  host: process.env.POSTGRES_HOST,
  dialect: 'postgres',
  operatorsAliases: 0,
  pool: {
    max: 5,
    min: 0,
    acquire: 3000,
    idle: 10000
  }
})







