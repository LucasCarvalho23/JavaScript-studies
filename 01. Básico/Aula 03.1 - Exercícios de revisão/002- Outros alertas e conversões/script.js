/*
let moeda = Number(window.prompt ('Quanto você tem em dinheiro?'))

let dolar = moeda / 5

moeda = moeda.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})

window.document.write (`O valor em real é: ${moeda}<br>`)

dolar = dolar.toLocaleString('en', {style: 'currency', currency: 'USD'})

window.document.write (`O valor em dólar é: ${dolar}`)
*/


let nome = window.prompt ('Qual é o seu nome?')

window.document.write (`Você digitou ${nome}<br>`)
window.document.write (`Seu nome em maíusculo é ${nome.toUpperCase()}<br>`)
window.document.write (`Seu nome em minúsculo é ${nome.toLocaleLowerCase()}<br>`)

window.document.write(window.document.charset)
window.document.write('<br>')
window.document.write(window.navigator.appName)
window.document.write('<br>')
window.document.write(window.document.URL)
window.document.body.style.background = 'lightblue'