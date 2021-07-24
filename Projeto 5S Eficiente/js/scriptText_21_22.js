let setaEsquerda = document.getElementById('setaEsquerda');
let setaDireita = document.getElementById('setaDireita');
let texto =  document.getElementById('texto-exemplos');
let contadorTexto = 0;
let cliqueEsquerda = 0;

setaDireita.addEventListener('click', () => {
   contadorTexto++;

    if(contadorTexto == 1)
        texto.innerHTML = "2. O ato de limpar é necessário, mas o importante é não sujar. Por isso, evite colocar coisas fora do lugar ou fazer sujeira.";

    if(contadorTexto == 2)
        texto.innerHTML = "3. É importante limpar o ambiente e manter ela no cotidiano. Dito isso, defina regras e datas para sua manutenção.";

    if(contadorTexto == 3)
        texto.innerHTML = "4. Cada pessoa na empresa deve, antes e depois de qualquer trabalho realizado, retirar o lixo resultante e joga-lo fora.";

    if(contadorTexto == 4){
        texto.innerHTML = "5. É necessário identifcar a origem das sujeiras e suas causas, para então bloqueá-las.";
    }
    
    if(contadorTexto == 5){
        texto.innerHTML = "6. Limpar e manter a higiene é um trabalho em equipe, cada um deve fazer sua parte.";
        contadorTexto = 0;
    }  
});

setaEsquerda.addEventListener('click', () => {
    cliqueEsquerda++;

    if(cliqueEsquerda == 1)
        texto.innerHTML = "5. É necessário identifcar a origem das sujeiras e suas causas, para então bloqueá-las.";
    
    if(cliqueEsquerda == 2)
        texto.innerHTML = "4. Cada pessoa na empresa deve, antes e depois de qualquer trabalho realizado, retirar o lixo resultante e joga-lo fora.";

    if(cliqueEsquerda == 3)
        texto.innerHTML = "3. É importante limpar o ambiente e manter ela no cotidiano. Dito isso, defina regras e datas para sua manutenção.";
    
    if(cliqueEsquerda == 4){
        texto.innerHTML = "2. O ato de limpar é necessário, mas o importante é não sujar. Por isso, evite colocar coisas fora do lugar ou fazer sujeira.";
    }
    
    if(cliqueEsquerda == 5){
        texto.innerHTML = "1. Após a limpeza, crie um questionário para avaliar se o senso foi executado de forma eficiente.";
        cliqueEsquerda = 0;
    }    
});
