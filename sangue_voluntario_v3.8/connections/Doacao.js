const database = require('./database');
const Doador = require('./Doador');

const doacoes = database.sequelize.define('doacoes',{

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
}
);

//foreignkey 
doacoes.belongsTo(Doador,{
    foreignKey: "numeroIdentificador",
    targetKey: "numeroIdentificador"
});


//Reeditar a tabela
//doacoes.sync({force: true}).then(()=> {console.log('Tabela DELETADA e REINICIADA')})

module.exports = doacoes;