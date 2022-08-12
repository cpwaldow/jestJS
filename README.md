# jestJs

Esse repositório tem como objetivo resolver alguns desafios de JavaScript e fazer a implementação de testes.

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

# calculo

Faça a implementação das quatro principais operações matemáticas

**O que será avaliado**

- Função `sum` com parâmetros 1 e 2, retorna **3**
- Função `sub` com parâmetros 5 e 3, retorna **2**
- Função `div` com parâmetros 12 e 4, retorna **3**
- Função `mult` com parâmetros 7 e 7, retorna **49**

# highAndLow

Faça a implementação de uma função que recebe um array como parâmetro e retorna um novo array contendo o menor e o maior número.

**O que será avaliado**

- Caso o array esteja vazio, retorne undefined
- Caso o array contenha algum item que não for um número, retorne undefined

# average

Faça a implementação de uma função que calcule a média entre os valores passados em um array.

**O que será avaliado**

- Caso o array esteja vazio, retorne undefined
- Caso o array contenha algum item que não for um número, retorne undefined
- O valor retornado deve ser o menor número inteiro da conta

# nota

Faça a implementação da função _nota_. Essa função recebe 4 parâmetros, e precisa ter uma nota maior ou igual a 7 calculando a média com as 4 notas. por exemplo: _(10 + 10 + 10 + 10) / 4_.

**O que será avaliado**

- Caso a média das notas for maior ou igual a 7, retorne a string _'Parabéns, você foi aprovado! Sua nota final foi: 10!'_.
- Caso a média fique abaixo de 7, retorne a string _'Você foi reprovado, sua nota final foi: 6.5!'_.
- Faça a cobertura de teste se a pessoa estudante enviou apenas 3 notas. Obs: Mesmo com uma nota a menos, a pessoa pode ser aprovada ou reprovada
- Faça os testes retornando que a pessoa foi reprovada quando envia apenas 2 notas.
- Faça os testes retornando que a pessoa foi reprovada quando envia apenas 1 nota.

# evenOrOdd

Faça a implementação da função _evenOrOdd_. Essa função recebe um número como parâmetro, faça os seguintes testes:

**O que será avaliado**

- Caso o número seja par, retorne a string 'O número é par'.
- Caso o número seja impar, retorne a string 'O número é ímpar'
- Caso não receba parâmetros, retorne a string 'É necessário informar um número!'

# drink

Faça a implementação da função _drink_ que recebe como parâmetro o ano de nascimento da pessoa e subtraia pelo ano corrente.

**O que será avaliado**

- Caso a subtração retorne um número maior que 18, retorne a string 'Maior que 18 anos, pode beber'
- Caso a subtração retorne um número menor que 18, retorne a string 'Menor que 18 anos, não pode beber'

# comparison

A função recebe dois valores como parâmetros, retorne true se os dois valores são estritamente iguais e false caso não sejam iguais.

**O que será avaliado**

- Caso a função receba os valores **2** e **3**, retorne `false`
- Caso a função receba os valores **3** e **3**, retorne `true`
- Caso a função receba os valores **1** e **'1'**, retorne `false`
- Caso a função receba os valores **'10'** e **'10'**, retorne `true`

# typeOfArg

A função recebe um parâmetro, retorne qual o tipo de dado do parâmetro.

**O que será avaliado**

- Caso a função receba **1**, retorne `number`
- Caso a função receba **false**, retorne `boolean`
- Caso a função receba **{}**, retorne `object`
- Caso a função receba **'text'**, retorne `string`
- Caso a função receba **[1,2,3,4,5,6]**, retorne `object`

# removeCharacters

A função recebe uma string e um número como parâmetros, remova a quantidade de caractere da string com base no número passado.

**O que será avaliado**

- Caso a função receba **'removeCharacters('abcdefg', 3)**, retorne **'defg'**
- Caso a função receba **removeCharacters('1234', 2)**, retorne **'34'**
- Caso a função receba **removeCharacters('fgedcba', 4)**, retorne **'cba'**

# Referências

[JSchalenger](https://www.jschallenger.com/)

[Gustavo Guanabara](https://github.com/gustavoguanabara/javascript/tree/master/exercicios)
