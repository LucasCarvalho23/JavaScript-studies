/* 
    String Object Methods:

    Anchor(name) - Não usa mais
    big() - Coloca a palavra grande
    bold() - Coloca a palavra em negrito
    charAt(index) - Pega uma letra
    fixed() - Coloca a palavra com fonte de densidade fixa
    fontcolor(color) - Coloca a palavra com a cor desejada
    fontsize(fontsize) - Coloca a palavra com a fonte desejada
    italics() - Coloca a palavra em itálico
    link(targetURL) - Coloca a palavra com um link
    small() - Coloca a palavra menor
    strike() - Coloca a palavra e deixa riscada
    sub() - Coloca a palavra subscrita embaixo
    indexOf(seach value,[fromindex]) - Percorre e verifica se seu número ou nome está no array. Retorna -1 se não estiver.
    lastIndexOf(seach value,[fromindex]) - Retorna o últmimo caractere na palavra do que você escolheu
    split(delimiter) - Separa a string em um array, baseado em algum delimitador
    substr(start[length]) - Retorna as strings listadas
    substring(startPosition,endPosition) - Retorna as strings listadas
    sup() - Coloca a palavra dubscrita em cima
    toLowerCase() - Coloca a palavra em minúsculo
    toUpperCase() - Coloca a palavra em maiúsculo
*/

// chatAt = Pega uma letra
let nome = "Vasco"
console.log (nome.charAt(0))
// lastIndexOf mostra o último caracter selecionado no nome
console.log (nome.lastIndexOf('c'))

// indexOf percorre e verifica se seu número ou nome está no array. Retorna -1 senão estiver
let numbers = [1,2,3,4,5]
let num = 4

if (numbers.indexOf(num) == -1) {
    numbers.push = num 
    console.log(numbers)
} else {
    console.log('You already insert this value')
}

//substr = retorna as strings listadas(start,length)
const str = 'Mozilla';

console.log(str.substring(1, 2));
console.log(str.substring(2));

// split: Separa a string em um array, baseado em algum delimitador
let nome2 = "Vasco da Gama"
let nome3 = "Vasco,da,Gama"
let array = nome2.split(" ")
let array2 = nome3.split(",")
console.log(array)
console.log(array2)