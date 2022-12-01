//iniando os modulos
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const aplicativo = express();

//Configurações do aplicativo
aplicativo.use(express.static(__dirname, + '/static/css/'));
aplicativo.use(express.json())
aplicativo.use(express.urlencoded({extended: true}));
aplicativo.engine('.html',require('ejs').__express);
aplicativo.set('view engine','html','ejs');
aplicativo.use(cookieParser());
aplicativo.use(session({secret: 'segredo',resave: false, saveUninitialized: true}));



//Conexão SQL
const database = require('./connections/database');

//Modulos das tabelas SQL
const Doador = require('./connections/Doador');
const Doacao = require('./connections/Doacao');


//identificando a porta de comunicação
//porta servidor heroku
//const port = process.env.PORT || 8080;
//porta localhost
const porta = 3000;

//instanciando as requisições
//GET
aplicativo.get('/', function(request,response){response.render('home')});
aplicativo.get('/acesse', function(request, response){
    if(request.session.loggedin){
          response.render('informacoes');                  
            }else{
        response.render('acesse');
    }
    });
aplicativo.get('/cadastro', function(request,response){response.render('cadastro')});
aplicativo.get('/home',function(request,response){response.render('home')});
aplicativo.get('/error',function(request,response){response.render('error')});
aplicativo.get(`/informacoes`, function(request,response){response.render('informacoes')});
aplicativo.get('/logout',function(request,response){response.render('logout')});
aplicativo.get('/about',function(request,response){response.render('about')});
aplicativo.get('/logout', function(request, response){request.session.destroy(); response.redirect('/logout')})

//POST
aplicativo.post('/Acesse', function(request, response){
    let Num = request.body.numeroIdentificador;
    let Senha = request.body.senha;

     Doador.findAll({
        where:{
            numeroIdentificador: Num,
            senha: Senha
        }
         }).then(function(user){
               if (user[0] != null){
                request.session.loggedin = true;
                     
                return  response.render('informacoes');
                    }else
              return   response.render('home');
        })
        
        .catch(function(error){response.render('error',{error:error});
        
    })});
    
 

aplicativo.post('/Cadastro', function(request, response){
     //input name do HTML
    let _senha = request.body.senha;
    let _regiao = request.body.regiao;
    let _tipoSanguineo = request.body.tipoSanguineo;
    let _dataNascimento = request.body.dataNascimento;
    let _genero = request.body.genero;
    let _peso = request.body.peso;
    let _estadoCivil = request.body.estadoCivil;
    let _parceirosSexuais = request.body.parceirosSexuais;
    let _atividadeEsportiva = request.body.atividadeEsportiva;
    let _horasSono = request.body.horasSono; 
    let _qtdeRefeicoes = request.body.qtdeRefeicoes;
    let _ingestaoAcucares = request.body.ingestaoAcucares;
    let _ingestaoGordura = request.body.ingestaoGordura;
    let _ingestaoBebidas = request.body.ingestaoBebidas;
    let _drogas = request.body.drogas;
    let _cirurgias = request.body.cirurgias;
    let _anestesia = request.body.anestesia; 
    let _acumpuntura = request.body.acumpuntura;
    let _amazonia = request.body.amazonia;
    let _eua = request.body.eua;
    let _vacinas = request.body.vacinas;
    let _malaria = request.body.malaria;
    let _chicungunha =  request.body.chicungunha;
    let _hivAids = request.body.hivAids;
    let _parkinson = request.body.parkinson;

    Doador.create({
    senha              :_senha,
    regiao             :_regiao,
    tipoSanguineo      :_tipoSanguineo,
    dataNascimento     :_dataNascimento, 
    genero             :_genero,
    peso               :_peso, 
    estadoCivil        :_estadoCivil, 
    parceirosSexuais   :_parceirosSexuais, 
    atividadeEsportiva :_atividadeEsportiva, 
    horasSono          :_horasSono, 
    qtdeRefeicoes      :_qtdeRefeicoes,
    ingestaoAcucares   :_ingestaoAcucares,
    ingestaoGordura    :_ingestaoGordura,
    ingestaoBebidas    :_ingestaoBebidas, 
    drogas             :_drogas, 
    cirurgias          :_cirurgias, 
    anestesia          :_anestesia, 
    acumpuntura        :_acumpuntura, 
    amazonia           :_amazonia, 
    eua                :_eua,
    vacinas            :_vacinas, 
    malaria            :_malaria,
    chicungunha        :_chicungunha,
    hivAids            :_hivAids, 
    parkinson          :_parkinson
        
    })
    .then(function(){response.render('cadastro')})
    .catch(function(error){response.render('error',{error: error})});
    //.catch(function(error){console.log(error)});
});

aplicativo.post('/informacoes',function(request,response){
    Doacao.create({
        numeroIdentificador: novaDoacao[1],
        data: novaDoacao[2],
        recencia: novaDoacao[3],
        frequencia: novaDoacao[4],
        monetaridade: novaDoacao[5],
        tempo: novaDoacao[6],
        target: novaDoacao[7]
    })
    .then(function(){response.render('informacoes')})
    .catch[function(error){response.render('error',{error:error})}]


})


//Chamando o servidor
database.sequelize.sync().then(function(){console.log(' Tabelas SQL SINCRONIZADAS com sucesso.')})
//database.sequelize.sync({force: true}).then(function(){console.log('Tabelas SQL DELETADAS E REINICIADAS.')})
    .then(function (){aplicativo.listen(porta, function(){console.log(`Aplicação ATIVA E CONECTADA em http://localhost:${porta}`)});})
    .catch(function (error){console.log[error]});
    
module.exports = DataFrame;