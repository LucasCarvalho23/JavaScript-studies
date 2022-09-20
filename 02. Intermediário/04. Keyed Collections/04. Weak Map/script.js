/*

Like WeakSet, just accept object inside in a variable.

Working:
.set
.get
.has
.delete
.clear


NÃO FUNCIONA

const wm = new WeakMap([
    ["Curso", "JavaScript"],
    ["Nome", "Lucas Carvalho"],
    ["Idade", 32],
    [null, "nulo"]
])

*/

const wm = new WeakMap() 
let chave1 = {}
let chave2 = {}
let chave3 = {}

wm.set(chave1,1)
wm.set(chave2,2)

console.log(wm.has(chave1))
console.log(wm.has(chave3))

console.log(wm.get(chave1))
console.log(wm.get(chave2))
console.log(wm.get(chave3))

wm.delete(chave2)
console.log(wm)