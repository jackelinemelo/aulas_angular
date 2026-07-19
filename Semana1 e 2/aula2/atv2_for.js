let numero = 5; // Escolha o número que deseja calcular
let fatorial = 1;

for (let i = 1; i <= numero; i++) {
    fatorial *= i; // Multiplica o valor atual de 'fatorial' por 'i'
}

console.log(`O fatorial de ${numero} é:`, fatorial);
