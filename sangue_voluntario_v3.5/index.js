//iniando os modulos
const express = require('express');
const session = require('express-session');
const aplicativo = express();

//Configurações do aplicativo
aplicativo.use(express.static(__dirname, + '/static/css/'));
aplicativo.use(express.json())
aplicativo.use(express.urlencoded({extended: false}));
aplicativo.engine('.html',require('ejs').__express);
aplicativo.set('view engine','html','ejs');
aplicativo.use(session({secret: 'segredo',resave: false, saveUninitialized: true}));

//Conexão SQL
const database = require('./connections/database');

//Modulos das tabelas SQL
const Principal = require('./connections/Principal');

//identificando a porta de comunicação
//porta servidor heroku
//const port = process.env.PORT || 8080;
//porta localhost
const porta = 3000;

//instanciando as requisições
//GET
aplicativo.get('/', function(request,response){response.render('home')});
aplicativo.get('/principal', function(request, response){response.render('principal')});
aplicativo.get('/cadastro', function(request,response){response.render('cadastro')});
aplicativo.get('/home',function(request,response){
    if(request.session.loggedin){
        response.render('home');                
            }else{
        response.render('principal');
    }
});
aplicativo.get('/error',function(request,response){response.render('error')});
aplicativo.get('/pause',function(request,response){response.render('pause')});

//POST
aplicativo.post('/Principal', function(request, response){
    let Num = request.body.numeroIdentificador;
    let Senha = request.body.senha;

     Principal.findAll({
        where:{
            numero_identificador: Num,
            senha: Senha
        }
        //raw: true
        }).then(function(user){
            console.log(user);
            if (user[0] != null){
                request.session.loggedin = true;
                response.render('home');
                    }else
                response.render('principal');
        })
        .catch(function(error){response.render('error',{error:error});
        return response.send(user.numero_identificador,'Conectado!');
        
    })
 });

aplicativo.post('/Cadastro', function(request, response){
     //input name do HTML
    let _senha = request.body.senha;
    let _regiao = request.body.regiao;
    let _tipoSanguineo = request.body.tipoSanguineo;
    let _dataNascimento = request.body.dataNascimento;
    let _genero = request.body.genero;
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

    Principal.create({
    senha              :_senha,
    regiao             :_regiao,
    tipoSanguineo      :_tipoSanguineo,
    dataNascimento     :_dataNascimento, 
    genero             :_genero, 
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
    .then(function(){console.log('Cadastro Realizado com SUCESSO.')})
    .catch(function(error){response('error', {error:error})});
});

//chamando o servidor
database.sequelize.sync()
    .then(function (){aplicativo.listen(porta, function(){console.log(`A Aplicação esta ativa e conectada com o banco de dados em http://localhost:${porta}`)});})
    .catch(function (error){console.log[error]});
    
