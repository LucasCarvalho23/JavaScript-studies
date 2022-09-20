
var areaa = window.document.querySelector('div#area')

//Eventos
areaa.addEventListener ('click', clicar)
areaa.addEventListener ('mouseenter', entrar)
areaa.addEventListener ('mouseout', sair)


function clicar()  {
    areaa.innerHTML = `Clicou!`
    areaa.style.background = 'black'
}

function entrar() {
    areaa.innerHTML = `Entrou!`
    areaa.style.background = 'green'
}

function sair() {
    areaa.innerHTML = `Saiu!`
    areaa.style.background = 'red'
}