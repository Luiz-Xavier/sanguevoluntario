//Classe doador:
class Doador{
   
    constructor(
    numeroIdentificador,
    senha,
    regiao,
    tipoSanguineo,
    dataNascimento, 
    genero, 
    estadoCivil, 
    parceirosSexuais, 
    atividadeEsportiva, 
    horasSono, 
    qtdeRefeicoes,
    ingestaoAcucares,
    ingestaoGordura,
    ingestaoBebidas, 
    drogas, 
    cirurgias, 
    anestesia, 
    acumpuntura, 
    amazonia, 
    eua,
    vacinas, 
    malaria,
    chicungunha,
    hivAids, 
    parkinson   ){
   
    this._numeroIdentificador = numeroIdentificador;
    this._senha = senha;
    this._regiao = regiao;
    this._tipoSanguineo = tipoSanguineo;    
    this._dataNascimento = dataNascimento
    this._genero = genero;
    this._estadoCivil = estadoCivil;
    this._parceirosSexuais = parceirosSexuais;
    this._atividadeEsportiva = atividadeEsportiva;
    this._horasSono = horasSono;
    this._qtdeRefeicoes = qtdeRefeicoes;
    this._ingestaoAcucares = ingestaoAcucares;
    this._ingestaoGordura = ingestaoGordura;
    this._ingestaoBebidas = ingestaoBebidas;
    this._drogas = drogas;
    this._cirurgias = cirurgias;
    this._anestesia = anestesia;
    this._acumpuntura = acumpuntura;
    this._amazonia = amazonia;
    this._eua = eua;
    this._vacinas = vacinas;
    this._malaria = malaria;
    this._hivAids = hivAids;
    this._chicungunha = chicungunha;
    this._parkinson = parkinson;   
       
}
//Setters  
set numeroIdentificador(number){
this._numeroIdentificador = number;
}

set senha(string){
    this._senha = string;
}

set regiao(string){
    this._regiao = string;
}

set tipoSanguineo(string){
    this._tipoSanguineo = string;
}

set dataNascimento(date){
    this._dataNascimento = date;
}

set genero(string){
    this._genero = string;
}

set estadoCivil(string){
    this._estadoCivil = string;
}

set parceirosSexuais(number){
    this._parceirosSexuais = number;
}

set atividadeEsportiva(boolean){
    this._atividadeEsportiva = boolean;
}

set horasSono(number){
    this._horasSono = number;
}

set qtdeRefeicoes(number){
    this._qtdeRefeicoes = number;
}

set ingestaoAcucares(boolean){
    this._ingestaoAcucares = boolean;
}

set ingestaoGordura(boolean){
    this._ingestaoGordura = boolean;
}

set ingestaoBebidas(boolean){
    this._ingestaoBebidas = boolean;
}

set drogas(boolean){
    this._drogas = boolean;
}

set cirurgias(boolean){
    this._cirurgias = boolean;
}

set anestesia(boolean){
    this._anestesia = boolean;
}

set acumpuntura(boolean){
    this._acumpuntura = boolean;
}

set amazonia(boolean){
    this._amazonia = boolean;
}

set eua(boolean){
    this._eua = boolean;
}

set vacinas(boolean){
    this._vacinasa = boolean;
}

set malaria(boolean){
    this._malaria = boolean;
}

set chicungunha(boolean){
    this._chicungunha = boolean;
}

set hivAids(boolean){
    this._hivAids = boolean;
}

set parkinson(boolean){
    this._parkinson = boolean;
}

//Getters
get numeroIdentificador(){
    return this._numeroIdentificador;
}

get senha(){
    return this._senha;
}

get regiao(){
    return this._regiao;
}

get tipoSanguineo(){
    return this._tipoSanguineo;
}

get dataNascimento(){
    return this._dataNascimento;
}

get genero(){
    return this._genero;
}

get estadoCivil(){
    return this._estadoCivil;
}

get parceirosSexuais(){
    return this._parceirosSexuais;
}

get atividadeEsportiva(){
    return this._atividadeEsportiva;
}

get horasSono(){
    return this._horasSono;
}

get qtdeRefeicoes(){
    return this._qtdeRefeicoes;
}

get ingestaoAcucares(){
    return this._ingestaoAcucares;
}

get ingestaoGordura(){
    return this._ingestaoGordura;
}

get ingestaoBebidas(){
    return this._ingestaoBebidas;
}

get drogas(){
    return this._drogas;
}

get cirurgias(){
    return this._cirurgias;
}

get anestesia(){
    return this._anestesia;
}

get acumpuntura(){
    return this._acumpuntura;
}

get amazonia(){
    return this._amazonia;
}

get eua(){
    return this._eua;
}

get vacinas(){
    return this._vacinas;
}

get malaria(){
    return this._malaria;
}

get chicungunha(){
    return this._chicungunha;
}

get hivAids(){
    return this._hivAids;
}

get parkinson(){
    return this._parkinson;
}
login(){
    if (Doador._numeroIdentificador && Doador._senha != null ){
        return `Este é o doador ${this._numeroIdentificador}. SEJA BEM VINDO!!!`

    }else{
        return `Doador NÃO autorizado!!! \n Favor cadastre-se!!!`

    }  
    
}
};


      //inputs HTML
      let senha = document.getElementById('senha').value;
      let regiao = document.getElementById('regiao').value;
      let tipoSanguineo = document.getElementById('tipoSanguineo').value;
      let dataNascimento = document.getElementById('dataNascimento').value;
      let genero = document.getElementById('genero').value;
      let estadoCivil = document.getElementById('estadoCivil').value;
      let parceirosSexuais = document.getElementById('parceirosSexuais').value;
      let atividadeEsportiva = document.getElementById('atividadeEsportiva').value;
      let horasSono = document.getElementById('horasSono').value;
      let qtdeRefeicoes = document.getElementById('qtdeRefeicoes').value;
      let ingestaoGordura = document.getElementById('ingestoGordura').value;
      let ingestaoBebidas = document.getElementById('ingestaoBebidas').value;
      let ingestaoAcucares = document.getElementById('ingestaoAcucares').value;
      let drogas = document.getElementById('drogas').value;
      let cirurgias = document.getElementById('cirurgias').value;
      let anestesia = document.getElementById('anestesia').value;
      let acumpuntura = document.getElementById('acumpuntura').value;
      let amazonia = document.getElementById('amazonia').value;
      let eua = document.getElementById('eua').value;
      let vacinas = document.getElementById('vacinas').value;
      let malaria = document.getElementById('malaria').value;
      let hivAids = document.getElementById('hivAids').value;
      let chicungunha = document.getElementById('chicungunha').value;
      let parkinson = document.getElementById('parkinson').value;

      //Nova classe
      function newDoador(){
        new Doador(
            senha,
            regiao,
            tipoSanguineo,
            dataNascimento,
            genero,
            estadoCivil,
            parceirosSexuais,
            atividadesEsportiva,
            horasSono,
            qtdeRefeicoes,
            ingestaoAcucares,
            ingestaoGordura,
            ingestaoBebidas,
            drogas,
            cirurgias,
            anestesia,
            acumpuntura,
            amazonia,
            eua,
            vacinas,
            malaria,
            hivAids,
            chicungunha,
            parkinson            
            );

      }

    
      
               


 function item(a){
    let form = getElementById('form');
    let concat = form + a;

    if(concat){
        getElementById(concat).style.display.none;
        
    }else{
        getElementById(concat).style.display.block;
    }

      //$(".cadastro").stop().hide();
      //$("#form"+a).stop().show();
  }

     
//Funções de Acessibilidade.
 function contrast(){
      document.body.style.backgroundColor="black"; 
      document.body.style.color="white";

};
function font_mais(){
      let tamanho = 20;
      document.body.style.fontSize=tamanho+"px";
      tamanho++;
};
