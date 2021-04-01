// ATIVIDADE 1

function multa(){
    var velocidadeMotorista = parseInt(document.querySelector("#velCarro").value);
    var velocidadeMaxima = parseInt(document.querySelector("#velMax").value);
    var vinte = velocidadeMaxima * 20 / 100;
    var cinquenta = velocidadeMotorista * 50 / 100;
    var diferenca = velocidadeMotorista - velocidadeMaxima;

    if(velocidadeMotorista > velocidadeMaxima &&
        velocidadeMotorista <= velocidadeMaxima + 7)
    document.querySelector("#resultado").innerHTML = "Advertência - Acima de 7km/h.    "  + "Diferença de: " + diferenca + "km/h";

    else if(velocidadeMotorista > velocidadeMaxima + 7 &&
        velocidadeMotorista < velocidadeMaxima + 7 + vinte)
        document.querySelector("#resultado").innerHTML = " Autuado. Infração Grave.   " + "Diferença de: " + diferenca + "km/h";

    else if(velocidadeMotorista > velocidadeMaxima &&
        velocidadeMotorista > velocidadeMaxima + vinte &&
        velocidadeMotorista <= velocidadeMaxima + cinquenta)
        document.querySelector("#resultado").innerHTML = " Autuado. Infração Gravissima.   " + "Diferença de: " + diferenca + "km/h";

    else if(velocidadeMotorista > velocidadeMaxima &&
        velocidadeMotorista >= velocidadeMaxima + cinquenta)
        document.querySelector("#resultado").innerHTML = " Autuado. Infração Gravissima, penalidade de suspensão do direito de dirigir.   " 
        + "Diferença de: " + diferenca + "km/h";
    
    else document.querySelector("#resultado").innerHTML = "Sem multas";
}

// ATIVIDADE 2

/*Escreva um programa que repita a leitura de uma senha até que ela seja válida. Para cada leitura
de senha incorreta informada, escrever a mensagem "Senha Invalida". Quando a senha for
informada corretamente deve ser impressa a mensagem "Acesso Permitido" e o algoritmo
encerrado. Considere que a senha correta é o valor 2002.*/

function senha(){
    var senha = (document.querySelector("#senha").value);

    if(senha == 2002)
    document.querySelector("#resultado").innerHTML = "Acesso permitido";

    else
    document.querySelector("#resultado").innerHTML = "Senha inválida"; 
}

// ATIVIDADE 3

/*Para doar sangue é necessário ter entre 18 e 67 anos. Faça um aplicativo na linguagem C que
pergunte a idade de uma pessoa e diga se ela pode doar sangue ou não. Use alguns dos operadores
lógicos OU (||) e E (&&).*/

function idadeSangue(){
    var sangue = (document.querySelector("#idadeSangue").value);

    if(sangue == '')
    document.querySelector("#resultado").innerHTML = "Idade não digitada";

    else if(sangue > 18 && sangue < 67)
    document.querySelector("#resultado").innerHTML = "Você pode doar sangue";
    
    else
    document.querySelector("#resultado").innerHTML = "Você não pode doar sangue";
}

// ATIVIDADE 4

/*Faça um programa que receba um número e diga se este número está no intervalo entre 100 e 200.*/

function intervalo(){
    var num = parseInt(document.querySelector("#intervalo").value);

    if(num > 100 && num < 200) document.querySelector("#resultado").innerHTML = "O número está entre 100 e 200";
    else document.querySelector("#resultado").innerHTML = "O número não está entre 100 e 200";
}

// ATIVIDADE 5

/*Crie um programa que peça um número ao usuário e armazene ele na variável x. 
Depois peça outro número e armazene na variável y. Mostre esses números.
 Em seguida, faça com que x passe a ter o valor de y, e que y passe a ter o valor de x.*/

 function inversor(){
    var x = parseInt(document.querySelector("#x").value);
    var y = parseInt(document.querySelector("#y").value);
    var aux;

    document.querySelector("#resultado").innerHTML = "X = " + x;
    document.querySelector("#resultado2").innerHTML = "Y = " + y;

    aux = x;
    x = y;
    y = aux;

    document.querySelector("#resultado3").innerHTML = "Novo valor de X =  " + x;
    document.querySelector("#resultado4").innerHTML = "Novo valor de Y =  " + y;
}

// ATIVIDADE 6

/*Escreva um programa que recebe um número inteiro e diga se é par ou ímpar. Use o operador matemático % 
(resto da divisão ou módulo) e o teste condicional if.*/

function parOuImpar(){
    var valor = parseInt(document.querySelector("#parOuImpar").value);

    if(valor % 2 == 0) document.querySelector("#resultado").innerHTML = "O valor é par";
    else document.querySelector("#resultado").innerHTML = "O valor é impar";
}