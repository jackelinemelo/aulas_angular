//Receba o nome completo do usuário (nome e sobrenome).
//E coloque no console:
//O tamanho da string;
//Apenas o primeiro nome;


var nome = "Jackeline dos Santos Melo";

console.log("Tamanho do nome:" , nome.length);

console.log('Primeiro nome:', nome.split(' ')[0]); //split() - divide a string em um array de substrings, usando um separador especificado.