let setaEsquerda = document.getElementById('setaEsquerda');
let setaDireita = document.getElementById('setaDireita');
let texto =  document.getElementById('texto-exemplos');
let contadorTexto = 0;
let cliqueEsquerda = 0;

setaDireita.addEventListener('click', () => {
   contadorTexto++;

    if(contadorTexto == 1)
        texto.innerHTML = "2. Os objetos devem ser marcados com recursos visuais para facilitar a pesquisa.";

    if(contadorTexto == 2)
        texto.innerHTML = "3. Conhecer e seguir todos os padrões.";

    if(contadorTexto == 3)
        texto.innerHTML = "4. Os processos devem ser feitos de forma que todos possam compreender.";

    if(contadorTexto == 4){
        texto.innerHTML = "5. Criar regras que ajudem a manter o ambiente limpo e em ordem.";
    }
    
    if(contadorTexto == 5){
        texto.innerHTML = "6. Estabelecer horários de forma organizada.";
        contadorTexto = 0;
    }  
});

setaEsquerda.addEventListener('click', () => {
    cliqueEsquerda++;

    if(cliqueEsquerda == 1)
        texto.innerHTML = "5. Criar regras que ajudem a manter o ambiente limpo e em ordem.";
    
    if(cliqueEsquerda == 2)
        texto.innerHTML = "4. Os processos devem ser feitos de forma que todos possam compreender.";

    if(cliqueEsquerda == 3)
        texto.innerHTML = "3. Conhecer e seguir todos os padrões.";
    
    if(cliqueEsquerda == 4){
        texto.innerHTML = "2. Os objetos devem ser marcados com recursos visuais para facilitar a pesquisa.";
    }
    
    if(cliqueEsquerda == 5){
        texto.innerHTML = "1. Todos os objetos e os hábitos devem ser feitos de forma padronizada.";
        cliqueEsquerda = 0;
    }    
});
