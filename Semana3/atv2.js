const prompt = require('prompt-sync')();

let nomeProduto = '';
let categoria;
let preco;

let continuar;

let quantidadeProdutos = 0;
let somaTotal = 0;
let nomeProdutoMaisCaro;
let precoProdutoMaisCaro = 0;
let quantidadeEletronicos = 0;

do {
  nomeProduto = prompt("Digite o nome do produto: ");
  categoria = prompt("Digite a categoria do produto: ");
  preco = prompt("Digite o preço do produto: ");

  console.log('Nome do produto:', nomeProduto.toUpperCase());

  switch(categoria.toUpperCase()) {
    case 'E':
      console.log('Categoria: Eletrônico');
      quantidadeEletronicos += 1;
      break;
    case 'V':
      console.log('Categoria: Vestuário');
      break;
    case 'A':
      console.log('Categoria: Alimento');
      break;
    default:
      console.log('Categoria inválida!');
  }

  if (preco <= 50) {
    console.log('Barato');
  } else if (preco <= 200) {
    console.log('Preço médio');
  } else {
    console.log('Caro');
  }

  quantidadeProdutos += 1;
  somaTotal += +preco;
  if (preco > precoProdutoMaisCaro) {
    precoProdutoMaisCaro = preco;
    nomeProdutoMaisCaro = nomeProduto;
  }

  continuar = prompt('Deseja continuar? (S/N) ');

} while (continuar.toUpperCase() != 'N');

console.log('Quantidade de produtos cadastrados:', quantidadeProdutos);
console.log('Soma total dos produtos:', somaTotal);
console.log('Média dos preços:', (somaTotal / quantidadeProdutos).toFixed(2));
console.log('Quantidade de eletrônicos cadastrados: ', quantidadeEletronicos);