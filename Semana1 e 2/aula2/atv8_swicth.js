let letra = 'a'.toUpperCase();

switch (letra) {
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
        console.log('A letra' + letra + 'É uma vogal');
        break;
        default:
        console.log(`A letra ${letra} é uma consoante`); //${letra} - interpolação de string, voê pode juntar usar as crases (´)para criar um texto i o ${string} para encaixar a variavel.
}




