
function calcular() {

    let real = window.document.querySelector ('input#real')
    let reais = Number(real.value)
    let dolar = reais / 5.30
    let resultado = window.document.querySelector ('div#resultado')

    reais = reais.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})
    dolar = dolar.toLocaleString('en',{style: 'currency', currency: 'USD'})

    resultado.innerHTML = `Você possui ${dolar} dólares.`
    
}