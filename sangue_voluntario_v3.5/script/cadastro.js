import Doador from '../connections/doador';
let  doador = [];

          
    

 function cadastrar(){
      //inputs HTML
      let senha = document.getElementById('senha').value;
      let regiao = document.getElementById('regiao').value;
      let tipoSanguineo = document.getElementById('tipo_sanguineo').value;
      let dataNascimento = document.getElementById('data_nascimento').value;
      let genero = document.getElementById('genero').value;
      let estadoCivil = document.getElementById('estado_civil').value;
      let parceirosSexuais = document.getElementById('parceiros_sexuais').value;
      let atividadesEsportiva = document.getElementById('atividades_esportivas').value;
      let horasSono = document.getElementById('horas_sono').value;
      let qtdeRefeicoes = document.getElementById('qtde_refeicoes').value;
      let ingestaoGordura = document.getElementById('ingesto_gordura').value;
      let ingestaoBebidas = document.getElementById('ingestao_bebidas').value;
      let ingestaoAcucares = document.getElementById('ingestao_acucares').value;
      let drogas = document.getElementById('drogas').value;
      let cirurgias = document.getElementById('cirurgias').value;
      let anestesia = document.getElementById('anestesia').value;
      let acumpuntura = document.getElementById('acumpuntura').value;
      let amazonia = document.getElementById('amazonia').value;
      let eua = document.getElementById('eua').value;
      let vacinas = document.getElementById('vacinas').value;
      let malaria = document.getElementById('malaria').value;
      let hivAids = document.getElementById('hiv_aids').value;
      let chicungunha = document.getElementById('chicungunha').value;
      let parkinson = document.getElementById('parkinson').value;

      //Nova classe
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
            )
      doador.push({

      })  
               

};
function item(a){
      $(".cadastro").stop().hide();
      $("#form"+a).stop().show();
  }

     
//Funções de Acessibilidade.
function contrast(){
      document.body.style.backgroundColor="black"; 
      document.body.style.color="white";

};
export function font_mais(){
      let tamanho = 20;
      document.body.style.fontSize=tamanho+"px";
      tamanho++;
};
