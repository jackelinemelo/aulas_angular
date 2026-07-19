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

