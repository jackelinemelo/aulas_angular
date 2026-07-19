// Atividade 7 - Considere o seguinte algoritmo:

const produtos = [
    { nome: "Teclado", estoque: 8 },
    { nome: "Mouse", estoque: 12 },
    { nome: "Monitor", estoque: 5 }
];
let total = 0;
for (const produto of produtos) {
    total += produto.estoque;
}
console.log(total);