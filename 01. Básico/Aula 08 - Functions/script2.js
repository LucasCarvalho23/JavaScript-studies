/*
function usuario() {
    let nome = 'Lucas'
    return function () {
        let sobrenome = 'Carvalho'
        console.log (nome, sobrenome)
    }
}

let user = usuario()
user()

if (true) {
    let autor = 'Lucas'
    console.log (autor)
}


function nome() {
    let nome = 'Lucas'
    return function () {
        return nome
    }
}

let nome = 'Carvalho'
let func = nome()
console.log(func())

*/


function inicializa() {
    nome = 'Lucas'
    console.log ('primeiro')
    setTimeout (ini,1000)
}

function ini() {
    console.log (nome)
}

inicializa()