/*

window.document.write (window.document.charset) // Qual configuração
window.document.write (window.navigator.appName) // Qual navegador
window.document.write (window.document.URL) // Qual URL

*/

let corpo = window.document.body
let paragrafo = window.document.getElementsByTagName('p')[0]

let d = window.document.querySelector('div#mensagem')
d.style.background = 'blue'

/*
let d = window.document.getElementById('mensagem')
d.style.background = 'green'
d.innerText = "Estou aguardando"


window.document.write(`Está escrito assim: ` + paragrafo.innerText)

paragrafo.style.color = 'yellow' // Muda a cor do parágrafo

corpo.style.background = 'black' // Muda background 

alert (paragrafo.innerHTML) // Mostra alerta
*/