//Atividade

//Receba uma palavra digitada pelo usuário;

//Verifique se a palavra digitada existe na frase inicialmente digitada;
//Se existir, coloque no console: "Palavra encontrada!"
//Se não existir: Coloque no console: "Palavra não encontrada!"

let frase = "hello world";
let palavra = "eu";

if (frase.includes(palavra)) { //
    console.log("Palavra encontrada!");
}else {
    console.log("Palavra não encontrada!");
}