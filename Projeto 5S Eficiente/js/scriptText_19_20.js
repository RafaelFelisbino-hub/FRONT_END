let setaEsquerda = document.getElementById('setaEsquerda');
let setaDireita = document.getElementById('setaDireita');
let texto =  document.getElementById('texto-exemplos');
let contadorTexto = 0;
let cliqueEsquerda = 0;

setaDireita.addEventListener('click', () => {
   contadorTexto++;

    if(contadorTexto == 1)
        texto.innerHTML = "2. A organização deve ser rotineira, por isso é essencial separar um momento do dia para planejar a rotina pessoal e as tarefas a serem realizadas.";

    if(contadorTexto == 2)
        texto.innerHTML = "3. Utilize uma agenda, com ela é possível organizar melhor os compromissos e não se esquecer de nenhum.";

    if(contadorTexto == 3)
        texto.innerHTML = "4. Priorize seus compromissos por ordem de importância e urgência, otimizando seu tempo.";

    if(contadorTexto == 4){
        texto.innerHTML = "5. Crie um sistema adequado para guardar as coisas, definindo então um padrão visual para manter tudo em ordem.";
        contadorTexto = 0;
    }  
});

setaEsquerda.addEventListener('click', () => {
    cliqueEsquerda++;

    if(cliqueEsquerda == 1)
        texto.innerHTML = "4. Priorize seus compromissos por ordem de importância e urgência, otimizando seu tempo.";
    
    if(cliqueEsquerda == 2)
        texto.innerHTML = "3. Utilize uma agenda, com ela é possível organizar melhor os compromissos e não se esquecer de nenhum.";

    if(cliqueEsquerda == 3)
        texto.innerHTML = "2. A organização deve ser rotineira, por isso é essencial separar um momento do dia para planejar a rotina pessoal e as tarefas a serem realizadas.";
    
    if(cliqueEsquerda == 4){
        texto.innerHTML = "1. Defina os critérios sobre quais são os locais mais apropriados para estocar ou dispor todos os tipos de instrumentos utilizados na empresa.";
        cliqueEsquerda = 0;
    }     
});
