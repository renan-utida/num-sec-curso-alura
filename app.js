
alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// Enquanto não for igual ao N.S.
while (chute != numeroSecreto) {

    chute = prompt('Escolha um número entre 1 e 10');

    // Se chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        alert(`Isso aí! Você descobriu o número secreto é ${numeroSecreto} com ${tentativas} tentativas!`);
    } else {
        if (chute < numeroSecreto) {
            alert(`Você errou! O número secreto é maior que ${chute}`);   
        } else{
            alert(`Você errou! O número secreto é menor que ${chute}`);
        }
        tentativas++;
    }
}





