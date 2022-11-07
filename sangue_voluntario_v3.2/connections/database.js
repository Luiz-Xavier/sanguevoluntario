const Sequelize = require('sequelize');


//localhost
const sequelize = new Sequelize('postgres://root:postgres@localhost:5432/postgres');

//exportar funçao cliente
module.exports = {
  
    sequelize: sequelize,
    Sequelize: Sequelize
  }
  