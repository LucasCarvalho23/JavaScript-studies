let mensagem = window.document.querySelector(`div#mensagem`)

mensagem.addEventListener(`mouseenter`, entrar)
mensagem.addEventListener(`mouseout`, sair)
mensagem.addEventListener(`click`, clicar)

function entrar() {
    mensagem.innerHTML = `Entrou`
    mensagem.style.background = `lightblue`
    mensagem.style.color = `black`
}

function sair() {
    mensagem.innerHTML = `Saiu`
    mensagem.style.background = `black`
    mensagem.style.color = `white`
}

function clicar() {
    mensagem.innerHTML = `Clicou`
    mensagem.style.background = `red`
    mensagem.style.color = `white`
}