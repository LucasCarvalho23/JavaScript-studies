let resultado = document.querySelector ('div#resultado')

resultado.innerHTML = `Calculando`

function calcular() {
    let inicio = document.querySelector ('input#inicio')
    let final = document.querySelector ('input#final')
    let passos = document.querySelector ('input#passos')

    let ini = Number(inicio.value)
    let fim = Number(final.value)
    let pass = Number(passos.value)

    if (inicio.value.length == 0 || final.value.length == 0 || passos.value.length == 0) {
        alert ('Insira os dados corretamente.')
    } else {
        resultado.innerHTML = `\u{1f3c3} `

        if (ini < fim) {
            for (let contador = ini; contador <= fim; contador += pass) {
                resultado.innerHTML += `${contador} \u{1f449} `
            }
        } else {
            for (let contador = ini; contador >= fim; contador -= pass) {
                resultado.innerHTML += `${contador}, `
            }
        }

        resultado.innerHTML += `\u{1f308}`
    }
    
}