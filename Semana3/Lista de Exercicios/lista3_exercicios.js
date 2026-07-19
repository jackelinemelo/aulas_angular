//  Atividade 3 - Considere o seguinte algoritmo:

const produto = {
    nome: "Notebook",
    preco: 3500,
    estoque: 12
};
for (const propriedade in produto) {
    console.log(propriedade);
}