const Sequelize = require('sequelize');


//localhost
const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/postgres');

//exportar funçao cliente
module.exports = {
  
    sequelize: sequelize,
    Sequelize: Sequelize
  }
  