let reais = Number(window.prompt ('Quanto você tem em reais?'))
let dolar = reais / 5

reais = reais.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})
dolar = dolar.toLocaleString('en', {style: 'currency', currency: 'USD'})

window.document.write (`Você possui ${reais} em Real. Agora em dólar você possui ${dolar}`)