/*
    parse: Analisa uma notação em JSON (string) e converte a um tipo de dado que o JavaScript valide.

    stringify: Converte em JavaScript e transforma em um arquivo JSON. Faz o contrário do parse. Enquanto o parse transforma de texto p/ tipo desejado, o stringify transforma o tipo p/ string.
*/

console.log(JSON)

console.log("{}")
console.log(JSON.parse("{}"))

console.log("[1,2,3]")
console.log(JSON.parse("[1,2,3]"))

/*
    NÃO FUNCIONA:

    console.log(JSON.parse("Olá Mundo!"))
*/

// FUNCIONA: 
console.log(JSON.parse('"Olá Mundo!"'))