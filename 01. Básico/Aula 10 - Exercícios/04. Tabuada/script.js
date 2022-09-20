function calcular() {

    let num = document.querySelector ('input#num')
    let tabuada = document.getElementById ('tabuada')

    if (num.value.length == 0) {
        alert ('Insira um número.')
    } else {
        tabuada.innerHTML = ``
        for (let contador = 1; contador <= 10; contador++) {
            let numero = Number(num.value)
            let resposta = document.createElement('option')
            resposta.text = `${numero} x ${contador} = ${numero * contador}`
            tabuada.appendChild(resposta)
        }
    }

}