function  somar() {
    let tn1 = window.document.querySelector ('input#txtn1')
    let tn2 = window.document.querySelector ('input#txtn2')
    let res = window.document.querySelector ('div#res')

    let numero1 = Number(tn1.value) // Converter número
    let numero2 = Number(tn2.value) // Converter número
    let soma = numero1 + numero2

    res.innerHTML = `O Resultado de ${numero1} + ${numero2} = ${soma}`
}