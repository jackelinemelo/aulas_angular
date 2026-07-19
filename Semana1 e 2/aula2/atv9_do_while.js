//Utilizando o prompt, crie um script que:
//Solicite ao usuário dois números e uma operação ( + , - , * , / )
//Realize a operação e exiba o resultado no console.
//Pergunte se o usuário deseja realizar outra operação
//Caso ele responda ‘s’ ou ‘sim’ repita o processo.
//Não faça diferenciação entre maiúscula e minúscula

const prompt = require('prompt-sync')();

let num1 = prompt('Digite um numero 1: ');
let num2 = prompt('Digite um numero 2: ');
let operaçãoMatematica = prompt('Digite a operação matemática desejada: ');

do {
    if (operaçãoMatematica === '+') {
        console.log('O resultado da soma é: ' + (parseInt(num1) + parseInt(num2)));
        break;
    } else if (operaçãoMatematica === '-') {
        console.log('O resultado da subtração é: ' + (parseInt(num1) - parseInt(num2)));
        break;
    } else if (operaçãoMatematica === '*') {
        console.log('O resultado da multiplicação é: ' + (parseInt(num1) * parseInt(num2)));
        break;
    } else if (operaçãoMatematica === '/') {
        console.log('O resultado da divisão é: ' + (parseInt(num1) / parseInt(num2)));
        break;
    }    
} while (operaçãoMatematica !== '+' && operaçãoMatematica !== '-' && operaçãoMatematica !== '*' && operaçãoMatematica !== '/');

