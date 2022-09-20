/*
let num1 = prompt('Entre com um número')
let num2 = prompt('Entre com o segundo número')

let numero1 = Number(num1.value)
let numero2 = Number(num2.value)
let soma = numero1 + numero2

window.document.write (numero)

*/




function soma() {

    let num1 = window.document.querySelector('input#num1')
    let num2 = window.document.querySelector('input#num2')
    let resultado = window.document.querySelector('div#resultado')

    let numero1 = Number(num1.value)
    let numero2 = Number(num2.value)
    let somar = numero1 + numero2

    resultado.innerHTML = `O resultado da soma acima é ${somar}`
}

