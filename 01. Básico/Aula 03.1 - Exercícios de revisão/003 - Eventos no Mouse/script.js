let mouse = window.document.querySelector('div#mouse')

mouse.addEventListener ('click',clicar)
mouse.addEventListener ('mouseout', saiu)
mouse.addEventListener ('mouseenter', entrou)
mouse.addEventListener ('mousemove', mover)

function clicar() {
    mouse.innerHTML = `Clicou`
    mouse.style.background = 'lightgreen'
    mouse.style.color = 'black'
}

function saiu() {
    mouse.innerHTML = `Saiu`
    mouse.style.background = 'yellow'
    mouse.style.color = 'black'
}

function entrou() {
    mouse.innerHTML = `Entrou`
    mouse.style.background = 'red'
    mouse.style.color = 'black'
}

function mover() {
    mouse.innerHTML = `Mexe`
    mouse.style.background = 'black'
    mouse.style.color = 'white'
}