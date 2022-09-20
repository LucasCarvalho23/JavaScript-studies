/*

WeakSet - Is a weak set, where just accept objects inside arrays.

Só funciona os métodos:
.add
.has
.delete
.clear
.size
.length


FUNCIONA:

const wsTest = new Set ([1, 2, 3, 3, 4, 5, true, false, false, {}, {}, "olá", "OLÁ"])

console.log(wsTest)

=====================================================

NÃO FUNCIONA:

const wsTest = new WeakSet ([1, 2, 3, 3, 4, 5, true, false, false, {}, {}, "olá", "OLÁ"])

console.log(wsTest)

*/

const wsTest = new WeakSet()
let value1 = {"valor 1":1}
let value2 = {"valor 2":2}
let value3 = {"valor 3":3}

wsTest.add(value1)
wsTest.add(value2)

console.log (wsTest)

console.log(wsTest.has(value1))
console.log(wsTest.has(value3))

wsTest.delete(value2)