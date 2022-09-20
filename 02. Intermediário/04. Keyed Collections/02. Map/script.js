/* 
    Map => Objetos que serve para armazenar um conjunto de valores associados a maneira de objetos. Como se fosse um objeto primitivo.

    .has - check
    .get - Seach
    .set - add
    .delete
    .clear
    .size

    for

*/

let mapa = new Map()
mapa.set("name", "Lucas")
mapa.set("last-name", "Carvalho")
mapa.set("idade", "31")

console.log(mapa)
console.log(mapa.has("name"))
console.log(mapa.has("email"))
console.log(mapa.get("name")) // Método get busca valor
console.log(mapa.set("idade",32)) // Método set substitui valor

// Delete elimina um campo. Já o Clear limpa a variável


// Para percorrer
console.log ("==========")
for (let [key, value] of mapa) {
    console.log (`Chave ${key} - Valor ${value}`)
}