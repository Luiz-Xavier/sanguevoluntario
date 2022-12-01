 const database = require('./database');


const Principal = database.sequelize.define('doadores',
{

    
    numeroIdentificador:{
       type: database.Sequelize.INTEGER,
       autoIncrement: true,
       primaryKey: true                               
    },
    senha:{
        type: database.Sequelize.STRING(10),
        alowNull: false

    },
    regiao:{
        type: database.Sequelize.STRING(20),
        alowNull: false
    },
    tipoSanguineo:{
        type: database.Sequelize.STRING(3),
        alowNull: true

    },  
    dataNascimento:{
        type: database.Sequelize.DATEONLY,
        alowNull: false
    },
    genero:{
        type: database.Sequelize.STRING,
        alowNull: false
    },
    estadoCivil:{
        type: database.Sequelize.STRING(20),
        alowNull: false
    },
    parceirosSexuais:{
        type: database.Sequelize.INTEGER,
        alowNull: false
    },
    atividadeEsportiva:{
        type: database.Sequelize.STRING,
        alowNull: false
    },
    horasSono:{
        type: database.Sequelize.INTEGER,
        alowNull: false
    },
    qtdeRefeicoes:{
        type: database.Sequelize.INTEGER,
        alowNull: false
    },
    ingestaoAcucares:{
        type: database.Sequelize.STRING(4),
        alowNull: false
    },
    ingestaoGordura:{
        type: database.Sequelize.STRING(4),
        alowNull: false
    },
    ingestaoBebidas:{
        type: database.Sequelize.STRING(4),
        alowNull: false
    },
    drogas:{
        type: database.Sequelize.STRING(4),
        alowNull: false
    },
    cirurgias:{
        type: database.Sequelize.STRING(4),
        alowNull: false
    },
    anestesia:{
        type: database.Sequelize.STRING(4),
        alowNull: false
    },
    acumpuntura:{
        type: database.Sequelize.STRING(4),
        alowNull: false
    },
    amazonia:{
        type: database.Sequelize.STRING(4),
        alowNull: false
    },
    eua:{
        type: database.Sequelize.STRING(4),
        alowNull: false
    },
    vacinas:{
        type: database.Sequelize.STRING(4),
        alowNull: false
    },
    malaria:{
        type: database.Sequelize.STRING(4),
        alowNull: false
    },
    chicungunha:{
        type: database.Sequelize.STRING(4),
        alowNull: false
    },
    hivAids:{
        type: database.Sequelize.STRING(4),
        alowNull: false
    },
    parkinson:{
        type: database.Sequelize.STRING(4),
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

    
