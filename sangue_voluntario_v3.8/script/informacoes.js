        /*
        
        => IDÉIA: 
        Traçar estratégias para AMPLIAR E RETER o número de doadores regulares com base na estraéia.

        => RFM (recencia, frequencia, monetaridade)
        Estratégia de Marketing que permite conhecer o cliente e traçar modos de fidelização, por TEMPO E TAXA DE ROTATIVIDADE.
        A contagem do TEMPO DE DOAÇÃO demonstra a variação percentual de doaçã em certo perodo de tempo.
        
        => REGRESSÃO LOGISTICA.
        Aplicação da Função Sigmóide (ou sigmoidal): f(x)= 1/1+exponecial^(-x). x equivale a soma de várias variáveis(R + F + M).

        => OBJETIVO:
        -Criar campanhas segmentadas.
        -Faciliatar controle de estoque.
        -Diminuir desperdicios.
        -Aumentar frequencias.
        
        =>INDICADORES
         numeroIdentificador, //id do doador.
        data,                //Registro da Doação.
        recencia,            //Periodo  (meses desde a última doação).
        frequencia,          //quantidade de doações feitas pelo doador.
        monetaridade,        //qauntidade total em litros doados.
        tempo,               //quantidade de meses doados desde a primeira doação.
        target               //taxa de rotatividade ou variação.
    
        
        
         */
//alert('Doador AUTORIZADO.')

//Registrar nova Doação.
   let  Doacao = [];

//Definir data
let padrao = new Date();
let formatado = padrao.toLocaleDateString();

//Recencia
let data1 = padrao;
let data2 = new Date();
let data1Ano = data1.getFullYear();
let data2Ano = data2.getFullYear();
let data1Mes = data1.getMonth();
let data2Mes = data2.getMonth();
let recencia = (data2Mes+12*data2Ano)-(data1Mes+12*data1Ano) 

//frequencia
let frequencia = Doacao.length;

//Monetaridade
let monet = frequencia * 0.450 //Bolsa de Sangue contem 450 ml

//tempo
let tmp = data2




function novaDoacao(){
    Doacao.push({
        numeroIdentificador: //falta implementar,
        data: formatado,
        recencia: recencia,
        frequencia: frequencia,
        monetaridade: monet,
        tempo: //falta implementar
        target: //falta implementar
    })
    .then(function(){
        Doacoes++;
        console.log(Doacoes)
    })
    let textarea = document.getElementById('consulta');  
    
    return textarea.innerHTML = Doacao;
}



  

       
 //Biblioteca dataframe
//const DataFrame = require('dataframe-js').DataFrame;
/*tabela Doação
const df = new DataFrame([
    {"numeroIdentificador": 1, "data": formatado,"recencia":recencia,"frequencia":5,"monetaridade":4,"tempo":3,"score":4} // <------- A row
], ['numeroIdentificador', 'data', 'recencia', 'frequencia','monetaridade','tempo','score']);
let tabela =   df.show();
*/


//Funções de Acessibilidade.
function contrast(){

    document.body.style.backgroundColor="black"; 
    document.body.style.color="white";
      

};

function font_mais(){
       let tamanho = 20; 
       if (document.body.style.fontSize=tamanho+'px')  tamanho++;           

    };

    