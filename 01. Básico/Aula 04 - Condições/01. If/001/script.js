function verificar() {
    let velocidade = window.document.querySelector ('input#velocidade')
    let resposta = window.document.querySelector ('div#resposta')

    let vel = Number(velocidade.value)

    resposta.innerHTML = `<p>Sua velocidade atual é de <strong>${vel} Km/h.</strong></p>`

    if (vel > 60) {
        resposta.innerHTML += `Você está multado!`
    } else {
        resposta.innerHTML += `Parabéns!`
    }

    resposta.innerHTML += `<p>Dirija sempre com cinto de 
    segurança!</p>`
}


/* let velocidade = 78.2

console.log (`A velocidade do seu carro é ${velocidade}`)

if (velocidade > 60) {
    console.log (`Você passou da velocidade permitida. Você foi multado!`)
} 

console.log (`Dirija usando sempre cinto de segurança.`)



let pais = 'Brasil'

if (pais == 'Brasil') {
    console.log ('Você é brasileiro.')
} else {
    console.log ('Você é estrangeiro.')
}
*/