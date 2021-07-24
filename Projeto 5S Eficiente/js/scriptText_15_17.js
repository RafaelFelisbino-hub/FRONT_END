let setaEsquerda = document.getElementById('setaEsquerda');
let setaDireita = document.getElementById('setaDireita');
let texto =  document.getElementById('texto-exemplos');
let exemplos = document.getElementById('exemplos');
let contadorTexto = 0;
let cliqueEsquerda = 0;

setaDireita.addEventListener('click', () => {
   contadorTexto++;

    if(contadorTexto == 1)
        texto.innerHTML = "2. Depopis de tudo separado, dê o destino dos objetos, materias ou utensílios. os <span><strong>úteis</strong></span> devem ser guardados conforme o tempo de uso.";

    if(contadorTexto == 2)
        texto.innerHTML = `
        <div class="texto-exemplos texto-exemplos2 exemplosFlex">
        <div class="text-​justify" id="texto-exemplos">
            <p class="textoIn-pasta">USO <br>DIÁRIO</p>
            <img src="../img/pasta rosa.png" style="width: 60px; height: 60px; padding: 0 5px 5px 0;">
            <p class="texto-pasta">Mais próximo de você.</p>
        </div>
        <div class="text-​justify" id="texto-exemplos">
            <p class="textoIn-pasta2">USO <br>SEMANAL</p>
            <img src="../img/pasta rosa.png" style="width: 60px; height: 60px; padding: 0 5px 5px 0;">
            <p class="texto-pasta">Perto do seu local de trabalho.</p>
        </div>
        <div class="text-​justify" id="texto-exemplos">
            <p class="textoIn-pasta3">USO <br>MENSAL</p>
            <img src="../img/pasta rosa.png" style="width: 60px; height: 60px; padding: 0 5px 5px 0;">
            <p class="texto-pasta">Mais <br>afastado do local de trabalho: depósito.</p>
        </div>
        <div class="text-​justify" id="texto-exemplos">
            <p class="textoIn-pasta4">POUCO <br>USO</p>
            <img src="../img/pasta rosa.png" style="width: 60px; height: 60px; padding: 0 0 5px 0;">
            <p class="texto-pasta">Descartar, doar.</p>
        </div>
        `;

    if(contadorTexto == 3)
        texto.innerHTML = "3. Identifique excessos e desperdícios e defina o motivo de guardar as coisas. Tome cuidado com o que será descartado para não perder itens importantes.";

    if(contadorTexto == 4){
        texto.innerHTML = `
        4. Os benefícios deste senso são:
        <ul class="pl-0 ml-3">
            <li>Maior espaço no local de trabalho</li>
            <li>Facilidade de limpeza e manutenção</li>
            <li>Melhor controle de estoque</li>
            <li>Redução de custos</li>
        </ul>
        
        `;
        contadorTexto = 0;
    }  
});

setaEsquerda.addEventListener('click', () => {
    cliqueEsquerda++;

    if(cliqueEsquerda == 1)
        texto.innerHTML = "3. Identifique excessos e desperdícios e defina o motivo de guardar as coisas. Tome cuidado com o que será descartado para não perder itens importantes.";
    
    if(cliqueEsquerda == 2)
    texto.innerHTML = `
    <div class="texto-exemplos texto-exemplos2 exemplosFlex">
    <div class="text-​justify" id="texto-exemplos">
        <p class="textoIn-pasta">USO <br>DIÁRIO</p>
        <img src="../img/pasta rosa.png" style="width: 60px; height: 60px; padding: 5px;">
        <p class="texto-pasta">Mais próximo de você.</p>
    </div>
    <div class="text-​justify" id="texto-exemplos">
        <p class="textoIn-pasta2">USO <br>SEMANAL</p>
        <img src="../img/pasta rosa.png" style="width: 60px; height: 60px; padding: 5px;">
        <p class="texto-pasta">Perto do seu local de trabalho.</p>
    </div>
    <div class="text-​justify" id="texto-exemplos">
        <p class="textoIn-pasta3">USO <br>MENSAL</p>
        <img src="../img/pasta rosa.png" style="width: 60px; height: 60px; padding: 5px;">
        <p class="texto-pasta">Mais <br>afastado do local de trabalho: depósito.</p>
    </div>
    <div class="text-​justify" id="texto-exemplos">
        <p class="textoIn-pasta4">POUCO <br>USO</p>
        <img src="../img/pasta rosa.png" style="width: 60px; height: 60px; padding: 5px;">
        <p class="texto-pasta">Descartar, doar.</p>
    </div>
    `;

    if(cliqueEsquerda == 3)
        texto.innerHTML = "2. Depopis de tudo separado, dê o destino dos objetos, materias ou utensílios. os <span><strong>úteis</strong></span> devem ser guardados conforme o tempo de uso.";
    
    if(cliqueEsquerda == 4){
        texto.innerHTML = `1. Combata as distrações que atrapalham a produtividade
        e concentração de todos no ambiente corporativo. Separe o que é útil e inútil no dia a dia atente que
        <span style="color: #d585a1;"><strong>inútil não tem que ser jogado fora,</strong></span> e sim que no momento 
        não tem utilidade.`
        cliqueEsquerda = 0;
    }     
});
