let cadastro = [];

function cadastrar(){
      let Idade = document.getElementById('idade').value;
      let Genero = document.getElementById('genero').value;
      
      //Outras Implementações.
      let Senha = document.getElementById('senha').value;
      
      //Condicionais
      if (cadastro == null){            
            if (Idade < 18){               
                  alert('idade insuficiente para iniciar ciclo de doações, favor, buscar mais informações');
                  
            }else if (Idade  < 64){
                 alert('Idade Perfeita para Iniciar doações');
                 cadastro.push({
                       idade: Idade,
                       genero: Genero,
           
                       //outras implementações
           
                       senha: Senha
           
                 });
                  alert('Doador'+ cadastro[0] + 'Cadastrado com SUCESSO.');
      
           }else{
            alert('Grato por buscar informações, incentive outros a iniciar doações');
           }
           
      }else{
           alert('registro NÃO efetivado');
      }
};         
     
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