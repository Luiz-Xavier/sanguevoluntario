
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
let Doacao = [];

//Definir data
let padrao = new Date();
let fmtd = padrao.toLocaleDateString();

//Monetaridade
//Bolsa de Sangue contem 450 ml
let number = 1;
let monet = (number * 0.450)


//Recencia
let data1 = padrao;
let data2 = new Date();
let data1Ano = data1.getFullYear();
let data2Ano = data2.getFullYear();
let data1Mes = data1.getMonth();
let data2Mes = data2.getMonth();
let recen = (data2Mes + 12 * data2Ano) - (data1Mes + 12 * data1Ano)

//frequencia
let freq = Doacao.length;


//tempo
let temp = recen - recen

//score 
//Uso de regressão logistica, Função sigmoide das variaveis acima calculando
let scor = 1 / 1 + Math.exp(recen + freq + temp)

//tabela Doação
function novaDoacao() {
    let confirma = {
        data: fmtd,
        monetaridade: monet,
        recencia: recen,
        frequencia: freq,
        tempo: temp,
        score: scor
    }


    if (confirma > Doacao) {
        window.alert('Doação REGISTRADA.')
        Doacao.push(confirma)
    } else {
        window.alert('A Doação ' + Doacao.length + '  já foi REGISTRADA.')
       

    }




    let textarea = document.getElementById('consulta');

    return textarea.innerHTML = JSON.stringify(Doacao)
}



//Funções de Acessibilidade.
function contrast() {

    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";


};

function font_mais() {
    let tamanho = 20;
    if (document.body.style.fontSize = tamanho + 'px') tamanho++;

};

