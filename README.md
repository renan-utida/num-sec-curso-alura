# Jogo do Número Secreto - Curso Lógica de Programação Alura

## Descrição
Este é um jogo simples de adivinhação, onde o usuário deve tentar acertar um número secreto gerado aleatoriamente entre 1 e 5000. O jogo fornece dicas sobre se o número secreto é maior ou menor que o número digitado, até que o usuário descubra o número correto.
OBS. Foi feito por mim apenas toda a funcionalidade JavaScript.

## Tecnologias Utilizadas
- JavaScript (para a lógica do jogo, feito por mim durante o curso e aprendizado);
- HTML (Fornecido pela Alura);
- CSS (Fornecido pela Alura);

![image]([https://github.com/user-attachments/assets/cb34010f-12ad-4347-b880-629ac84a62a2](https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png))

## Funcionalidades
- O jogo gera um número aleatório entre 1 e 5000.
- O jogador deve tentar adivinhar o número.
- O jogo dá dicas, informando se o número secreto é maior ou menor que o palpite do jogador.
- O número de tentativas é contabilizado, e ao final, o número de tentativas é informado ao jogador.

## Como rodar o projeto:
1. Clone o repositório:
  ```git clone https://github.com/seu-usuario/nome-do-repositorio.git```
2. Abra o arquivo **index.html** em um navegador para jogar o jogo.

## Como o jogo funciona:
O jogo começa com um alert que dá boas-vindas ao usuário. Em seguida, um número secreto é gerado aleatoriamente e o jogador deve tentar adivinhar esse número.

### Exemplo de Fluxo
1. O usuário insere um número no prompt.
2. Se o número inserido for menor que o número secreto, o jogo avisa que o número secreto é maior.
3. Se o número inserido for maior que o número secreto, o jogo avisa que o número secreto é menor.
4. O jogo continua até o número secreto ser descoberto.
5. O número de tentativas é mostrado no final.

## Código feito durante o curso:
```
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
        } else {
            alert(`Você errou! O número secreto é menor que ${chute}`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto é ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`);
```

## Desenvolvedor

[<img loading="lazy" src="https://github.com/user-attachments/assets/b4f96f4b-542e-4988-9bc1-b1acf22a41a1" width=115><br><sub>Renan Dias Utida</sub>](https://github.com/renan-utida)

### Linkedin: https://www.linkedin.com/in/renan-dias-utida-1b1228225/


## Considerações Finais
Este projeto foi uma ótima oportunidade de aplicar os conhecimentos adquiridos no curso Lógica de Programação: Mergulhe em Programação em JavaScript da Alura. Durante o curso, aprendi sobre:

Estruturas de controle de fluxo (como loops e condicionais).
- Como interagir com o usuário através de prompts e alerts.
- Como gerar números aleatórios e trabalhar com eles.
- Além disso, consegui compreender melhor a lógica por trás da construção de jogos simples, e pude aplicar esses conceitos em um projeto real.

Esse projeto também me ajudou a entender como estruturar o código de maneira simples, focando no aprendizado do JavaScript, sem a necessidade de frameworks ou bibliotecas avançadas.

Agora, estou mais confiante em minha jornada no mundo da programação e empolgado para continuar aprendendo e evoluindo!

