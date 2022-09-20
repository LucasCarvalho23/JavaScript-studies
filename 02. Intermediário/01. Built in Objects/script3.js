/*
    Array Object:

    concat() - Une duas ou mais strings ou clona valores de array.
    join(separator) - Une posições do array por meio de algum delimitador
    reverse() - INverte os itens do array
    slice() - Corta parte do string ou array em uma string/array menor, conforme desejamos.
    sort() - Classifica os itens do Array em ordem crescente
*/

// Concat - Une duas ou mais strings.
let string1 = 'Lucas '
let string2 = 'Carvalho '
let string3 = 'e Suelem'
let valor = string1.concat(string2)
valor = string1.concat(string2, string3)
console.log(valor)

let array4 = ['Vasco', 'Botafogo']
let array5 = array4.concat()
console.log(array5.sort())


// join(separator) - Une mais de uma posição
let foto = "foto cachorro"
let atual = foto.split(" ")
console.log(atual.join("_"))


// slice(corteinicial,cortefinal) - 
let frutas = ["Maça", "Banana", "Melancia", "Acerola", "Limão", "Laranja"]
let resultado = frutas.slice(2,5)
console.log(resultado)

