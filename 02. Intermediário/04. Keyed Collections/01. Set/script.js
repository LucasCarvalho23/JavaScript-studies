/* 
    Set => Passa valores únicos, ou seja, não aceita elementos repetidos.
    .add
    .size
    .has
    .delete
    .clear
    .from

    for
    for each
*/

const set = new Set ([1, 2, 3, 3, 4, 5, true, false, false, {}, {}, "Olá", "OLÁ"])

console.log (set)
console.log (set.size)


const setTwo = new Set ()
setTwo.add(1)
setTwo.add(2)
setTwo.add(2)
setTwo.add(3)
setTwo.add({})
setTwo.add(true)
setTwo.add(true)
setTwo.add(false)

console.log (setTwo)
console.log (setTwo.size)
console.log ("=======================")

for (item of set) {
    console.log(item)
}
console.log ("=======================")

setTwo.forEach(item => console.log(item))
console.log ("======================")

// Para exibir os dados de uma determinada posição, não conseguimos usar set[0], pois set é um método. Precisamos passar para uma variável o valor.

let arrSet = Array.from(set)
console.log (arrSet[0])
console.log ("======================")

// Percorre o valor e verifica (valida o dado)
console.log (set.has("olá"))
console.log (set.has("Olá"))
