let limite = 5;
let contador = 1;
let total = 0;

do {
    total += contador * 2;
    contador += 2;
} while (contador < limite);

console.log(total);