# jestJs

Esse repositório tem como objetivo resolver alguns desafios propostos pelo codewars de JavaScript e fazer a implementação de testes em todos os desafios.

As funções estão declaradas dentro da pasta _src_, os arquivos de testes estão na pasta _tests_

[Documentação do Jest](https://jestjs.io/docs/getting-started)

Antes de começar, rode o seguinte comando:

    npm install

Comando para rodar todos os arquivos de teste:

    npm test

Comando para rodar um único arquivo de teste:

    npm test nomeDoArquivo
    exemplo: npm test calculo

Comando para rodar a cobertura de testes:

    npm run test:coverage

### calculo

Faça a implementação das quatro principais operações matemáticas

### highAndLow

Faça a implementação de uma função que recebe um array como parâmetro e retorna um novo array contendo o menor e o maior número.

- Caso o array esteja vazio, retorne undefined
- Caso o array contenha algum item que não for um número, retorne undefined

### average

Faça a implementação de uma função que calcule a média entre os valores passados em um array.

- Caso o array esteja vazio, retorne undefined
- Caso o array contenha algum item que não for um número, retorne undefined
- O valor retornado deve ser o menor número inteiro da conta

### nota

_Esse exercício foi pego com base no [repositório](https://github.com/gustavoguanabara/javascript/blob/master/exercicios/ex011/media.js) de JavaScript do Gustavo Guanabara!_

Faça a implementação a função _nota_. Essa função recebe 4 parâmetros, e precisa ter uma nota maior ou igual a 7 calculando a média com as 4 notas. por exemplo: _(10 + 10 + 10 + 10) / 4_.

- Caso a média das notas for maior ou igual a 7, retorne a string _'Parabéns, você foi aprovado! Sua nota final foi: 10!'_.
- Caso a média fique abaixo de 7, retorne a string _'Você foi reprovado, sua nota final foi: 6.5!'_.
- Faça a cobertura de teste se a pessoa estudante enviou apenas 3 notas. Obs: Mesmo com uma nota a menos, a pessoa pode ser aprovada ou reprovada
- Faça os testes retornando que a pessoa foi reprovada quando envia apenas 2 notas.
- Faça os testes retornando que a pessoa foi reprovada quando envia apenas 1 nota.
