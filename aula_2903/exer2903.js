/* 6-faça um programa que calcule e mostre área de um quadrado sabe-se que A= lado*lado 
var A = 0;
var lado = 5;
A = lado*lado
console.log(A);*/

//com função
function quadrado(){
    var A = 0;
    var lado = 5;
    A = lado*lado
    console.log(A)
}
quadrado();

/* 7 - faça um prgrama que com o ano de nascimento de uma pessoa e o ano atual calcule e mostre:
  a - a idade da pessoa em anos;
  b - a idade da pessoa em meses;
  c - a idade da pessoa em semanas;
  d - a idade da pessoa semanas;
  Crie uma função para cada item.*/
 console.log("Exer 7"); 
//A 
console.log("Sua idade"); 
  function anos(){
  var anoNasci = 1995;
  var anoAtual = 2022;
  var resultado;
  resultado = 2022-1995;
  console.log(resultado);
}
anos();
//B
console.log("idade da pessoa em meses");
function meses(){
    var quantidadeMeses;
    quantidadeMeses= 26*12;
    console.log(quantidadeMeses);
}
meses();
//C
console.log("idade da pessoa em semanas");
function dias(){
    var quantidadeDias;
    quantidadeDias = 365*27;
    console.log(quantidadeDias);
}
dias();
//D
console.log("idade da pessoa em semanas");
function semanas(){
    var quantidadeSemanas;
    quantidadeSemanas = 4*12*27
    console.log(quantidadeSemanas)
}
semanas();

/* Faça um programa que com duas notas, calcule e mostre a média aritmetica e a mensagem conforme a tabela a seguir:
0 ate 4 = reprovado
4 ate 7 = exame
7 ate 10 = aprovado */
console.log("Exer 8")
function mediaAluno(){
    var n1 = 5;
    var n2 = 7;
    var media;
    media = (n1+n2)/2;
    if(media == 0 && media <4){
        console.log("Sua média foi " + media + " você foi reprovado");
    }else if(media >=4 && media <7){
        console.log("Sua média foi " + media + " você esta de exame");
    } else{
        console.log("Sua média foi " + media + " você foi aprovado");
    }
}
mediaAluno();