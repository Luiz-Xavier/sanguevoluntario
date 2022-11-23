//iniando os modulos
const response = require('express');
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
const porta = 3000;

//instanciando as requisições
//GET
aplicativo.get('/', function(request,response){
     if(request.session.loggedin){
        response.render('home');                
            }else{
        response.render('principal');
    }
});
aplicativo.get('/principal', function(request, response){ request.session. response.render('principal')});
aplicativo.get('/cadastro', function(request,response){
    response.render('cadastro')     
});
aplicativo.get('/home',function(request,response){});
aplicativo.get('/error',function(request,response){response.render('error')});
aplicativo.get('/pause',function(request,response){response.render('pause')});

//POST
aplicativo.post('/Principal', function(request, response){
    let Num = request.body.num;
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
    let Idade = request.body.idade;
    let Genero = request.body.genero;
    //Implementar outros aqui.

    let Senha = request.body.senha;

    Principal.create({
        idade: Idade, 
        genero: Genero,
        //implementar outros aqui

        senha: Senha
    }).then(function(){console.log('Cadastro Realizado com SUCESSO.')})
    .catch(function(error){response('error', {error:error})});
});

//chamando o servidor
database.sequelize.sync()
    .then(function (){aplicativo.listen(porta, function(){console.log(`A Aplicação esta ativa e conectada com o banco de dados em http://localhost:${porta}`)});})
    .catch(function (error){response('error', {error:error})});
    
