let user =  [];
    

function valor(){
    if (user.lenght > 0){
        user.push({
            numero_identificador: document.getElementById("numeroidentificador").value,
            senha: document.getElementById('senha').value
        })
        alert("Bem vindo Doador.")
    }else{
        alert("Usuário NÃO encontrado.")
    }

};

//Funções de Acessibilidade.
function contrast(){

    document.body.style.backgroundColor="black"; 
    document.body.style.color="white";
      

};

function font_mais(){
       let tamanho = 20; 
       if (document.body.style.fontSize=tamanho+'px')  tamanho++; 
       

             

    };