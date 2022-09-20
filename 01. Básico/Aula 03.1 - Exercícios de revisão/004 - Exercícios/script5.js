function calcular() {

    let num1 = window.document.querySelector(`input#num1`)
    let num2 = window.document.querySelector(`input#num2`)
    let resultado = window.document.querySelector(`div#resultado`)

    let numero1 = Number(num1.value)
    let numero2 = Number(num2.value)

    let media = (numero1 + numero2) / 2

    if (media >= 70) {
        resultado.innerHTML = `Sua média é ${media}, você está APROVADO`
    }

    if (media < 70) {
        resultado.innerHTML = `Sua média é ${media}, você está REPROVADO` 
    }

}