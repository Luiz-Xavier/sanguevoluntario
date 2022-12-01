const database = require('./database');
const Doadores = require('./Doador');
//Doacoes;

     const Doacoes = database.sequelize.define('doacoes',{

        numeroIdentificador:{
            type:database.Sequelize.INTEGER,
               },
        data:{
            type: database.Sequelize.DATEONLY,
            allowNull: false
    
        },
        recencia:{
            type:database.Sequelize.INTEGER
    
        },
        frequencia:{
            type:database.Sequelize.INTEGER
        },
        monetaridade:{
            type:database.Sequelize.INTEGER
        },
        tempo:{
            type:database.Sequelize.INTEGER
        },
        target:{
            type:database.Sequelize.INTEGER
        }
        
    
    },
    {
        timestamps: false
    })
    Doacoes.associate = function(models){
        Doacoes.belongsTo(models.Doadores, {
            foreignKey: 'numeroIdentificador', as: 'numeroIdentificador'
            
        })
        
    }

 module.exports = Doacoes;
    




//Reeditar a tabela
//Doacoes.sync({force: true}).then(()=> {console.log('Tabela DELETADA e REINICIADA')})

