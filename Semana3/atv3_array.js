const prompt = require('prompt-sync')();

let data = prompt('Digite uma data no formato dd/mm/aaaa: ');
let arrayData = data.split('/');
console.log('Dia: ' + arrayData[0] +' / ' + 'Mês: ' + arrayData[1] + ' / ' + 'Ano: ' + arrayData[2]);
