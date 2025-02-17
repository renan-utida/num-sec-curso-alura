
alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute = prompt('Escolha um número entre 1 e 10');

// Se chute for igual ao numero secreto
if (chute == numeroSecreto) {
    console.log('Isso aí! Você descobriu o número secreto (5)');
} else {
    alert('Você errou :(');
}




