const prompt = require('prompt-sync')(); // Importa o módulo prompt-sync para entrada do usuário

// 1. Gera um número aleatório entre 1 e 100
// Usamos Math.floor para garantir que o número vá de 1 a 100 certinho
const numeroCorreto = Math.round(Math.random() * 100) + 1;

console.log("--- BEM-VINDO AO JOGO DE ADIVINHAÇÃO ---");

// 2. Solicita o primeiro palpite e já converte para Número
let palpite = Number(prompt("Tente adivinhar o número: "));

// 3. Loop 'while' que continua até o usuário acertar
while (palpite !== numeroCorreto) {
    
    // Informa se o palpite foi maior ou menor
    palpite > numeroCorreto 
        ? console.log("O número correto é menor! ⬇️") 
        : console.log("O número correto é maior! ⬆️");
    break;

    // Solicita um novo palpite do usuário dentro do loop e converte para número
    palpite = Number(prompt("Tente adivinhar o número novamente: "));
    break;

        
}

// 4. Mensagem de vitória (só roda quando o palpite for igual ao numeroCorreto)
console.log(`🎉 Parabéns! Você acertou! O número era ${numeroCorreto}.`);