let setaEsquerda = document.getElementById('setaEsquerda');
let setaDireita = document.getElementById('setaDireita');
let texto =  document.getElementById('texto-exemplos');
let contadorTexto = 0;
let cliqueEsquerda = 0;

setaDireita.addEventListener('click', () => {
   contadorTexto++;

    if(contadorTexto == 1)
        texto.innerHTML = "2. Cumpra os horários marcados para cada compromisso.";

    if(contadorTexto == 2)
        texto.innerHTML = "3. Crie procedimentos claros e possíveis de serem cumpridos.";

    if(contadorTexto == 3)
        texto.innerHTML = "4. Estabeleça sempre o porquê da execução de determinada tarefa.";

    if(contadorTexto == 4){
        texto.innerHTML = "5. Seja claro e objetivo na comunicação.";
    }
    
    if(contadorTexto == 5){
        texto.innerHTML = "6. Gestores e colaboradores devem manter diálogos constantes sobre as suas experiências e impressões com o sistema, isso permite um feedback necessário para aparar as arestas necessárias e tornar a aplicação dos 5S mais ajustada a rotina da empresa.";
        contadorTexto = 0;
    }  
});

setaEsquerda.addEventListener('click', () => {
    cliqueEsquerda++;

    if(cliqueEsquerda == 1)
        texto.innerHTML = "5. Seja claro e objetivo na comunicação.";
    
    if(cliqueEsquerda == 2)
        texto.innerHTML = "4. Estabeleça sempre o porquê da execução de determinada tarefa.";

    if(cliqueEsquerda == 3)
        texto.innerHTML = "3. Crie procedimentos claros e possíveis de serem cumpridos.";
    
    if(cliqueEsquerda == 4){
        texto.innerHTML = "2. Cumpra os horários marcados para cada compromisso.";
    }
    
    if(cliqueEsquerda == 5){
        texto.innerHTML = "1. Para se obter disciplina é preciso constante vigilância e controle, isso é tarefa da chefia de cada setor.";
        cliqueEsquerda = 0;
    }    
});
