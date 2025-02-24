
alert('Boas vindas ao jogo do número secreto!');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// Enquanto não for igual ao N.S.
while (chute != numeroSecreto) {

    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    // Se chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute < numeroSecreto) {
            alert(`Você errou! O número secreto é maior que ${chute}`);   
        } else{
            alert(`Você errou! O número secreto é menor que ${chute}`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto é ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`);
