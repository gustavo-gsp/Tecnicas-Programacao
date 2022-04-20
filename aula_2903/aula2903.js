// Funções
//função sem parametro
function tabuada(){
    //bloco de comandos;
    var cont = 0;
    while(cont <= 10){
        console.log(6*cont);
        cont++;
    }
}
tabuada();

//função com parametro
function tabuada2(num){
    //bloco de comandos;
    var x = 0;
    while(x <= 10){
        console.log(num*x);
        x++;
    }
}
tabuada2(3);

//função com return
function desconto(valor){
    var desc = 0.10;
    var novoValor = 0;
    return novoValor = valor-(valor*desc);
}
var mensagem = desconto(1500);
console.log(mensagem);