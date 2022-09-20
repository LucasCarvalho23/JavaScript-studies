function exibir(num) {
    console.log (`O total é ${num}`)
}

function soma(a, b, callback) {
    let total =  a + b
    callback (total)
}

function multi(a, b, callback) {
    let total2 = a * b
    callback (total2)
}

soma (4, 3, exibir)
multi (4, 3, exibir)
console.log("===============")
console.log("===============")


// New Exemple
function receive(kingPirate, mugiwara1, mugiwara2, callback) {
    callback(kingPirate,mugiwara1,mugiwara2)
}

function print(a, b, c) {
    console.log (`${a} is the captain. ${b} and ${c} are pirates.`)
}

receive("Ruffy", "Zoro", "Sanji", print)
console.log("===============")
console.log("===============")



// New Exemple
function receive01 (name1, name2, name3, callback) {
    callback (name1, name2, name3)
}

function print01 (name01, name02, name03) {
    console.log (`${name01} and ${name02} are a couple. ${name03} is your daugther.`)
}

receive01("Lucas", "Suelem", "Maria Eduarda", print01)
console.log("===============")
console.log("===============")


// New Exemple

function somar(a, b, callback) {
    callback (a + b)
}

function subt(a, b, callback) {
    callback (a - b)
}

function mult(a, b, callback) {
    callback (a * b)
}

function div(a, b, callback) {
    callback (a / b)
}

function print02(num) {
    console.log (`The total is ${num.toFixed(2)}`)
}

function print03(num) {
    console.log (`The total is ${num}`)
}

somar(7,4,print03)
subt(6,3,print03)
mult(74,7,print03)
div(56,24,print02)



// It's done!

function somar03 (a,b, callback) {
    let c = a + b 
    callback (c)
}

function print04 (num) {
    console.log (num)
}

somar03(3,4, print04)