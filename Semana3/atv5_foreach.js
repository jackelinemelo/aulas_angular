const emails =['joao@email.com','ana@email.com','pedro@email.com'];

// Realize a iteração na lista de forma a, para cada item, colocar no console a seguinte mensagem:
// “Enviando e-mail para [email_da_lista]”

emails.forEach(email => {
    console.log(`Enviando e-mail para ${email}`);
});