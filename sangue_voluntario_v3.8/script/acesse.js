let user = [];

function acessar(){
let num =  document.getElementById('num').value;
let senha = document.getElementById('senha').value;
if(num &&  senha == null){
    return alert(`Doador NÃO autorizado!!! \n Favor cadastre-se!!!`);
}else{
    user.push({
        num: num,
        senha: senha
    })
    return alert('Doador'+num +'AUTORIZADO.')
}};











//Funções de Acessibilidade.
function contrast(){

    document.body.style.backgroundColor="black"; 
    document.body.style.color="white";
      

};

function font_mais(){
       let tamanho = 20; 
       if (document.body.style.fontSize=tamanho+'px')  tamanho++;             

    };