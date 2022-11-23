const database = require('./database');

const Principal = database.sequelize.define('doadores',{
    numero_identificador:{
       type: database.Sequelize.INTEGER(1),
       autoIncrement: true,
       primaryKey: true                               
    },
    senha:{
        type: database.Sequelize.STRING(10),
        alowNull: false
    },
    idade:{
        type: database.Sequelize.INTEGER(3),
        alowNull: false
    },
    genero:{
        type: database.Sequelize.STRING(20),
        alowNull: false
    }    
    
});

//Modelo funcional de foreignKey
//Principal.hasOne(Principal, {
//   foreignKey: "numeroIdentificador",
//   sourceKey: "id"
//});

//Sobrescrever tabela.
//Principal.sync({force: true});

//Usuario padrão
//Principal.create({
//    numero_identificador: '1',
//    senha: 'admin'
//});

module.exports = Principal;

    