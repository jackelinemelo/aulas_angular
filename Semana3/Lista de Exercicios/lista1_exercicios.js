// 1- Considere o seguinte algoritmo:

const livros = [
    { titulo: "JavaScript", disponivel: true },
    { titulo: "Angular", disponivel: false },
    { titulo: "Git", disponivel: true }
];
const disponiveis = livros.filter((livro) => livro.disponivel);
console.log(disponiveis.length);