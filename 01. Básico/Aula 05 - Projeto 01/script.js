// Declaração das variáveis
const resultado1 = window.document.querySelector ('div#resultado1')

// Verificação do nome
function verificar() {
    // Declaração de variáveis
    const nome = window.document.querySelector ('input#nome').value    

    // Exibições do Nome.
    resultado1.innerHTML = `Seu nome todo é ${nome}. 
    <br>Ele todo em maiusculo fica: ${nome.toUpperCase()}
    <br>Ele todo em minúsculo fica: ${nome.toLowerCase()}
    <br>O tamanho total dele tem ${nome.length} caracteres.`
}


// Verificação de Ano.

function eleitor() {
    // Declaração das variáveis
    const ano = window.document.querySelector ('input#ano').value

    // Transformando ano em idade
    const ano2 = 2022 - ano

    // Exibição do ano

    if (ano2 <= 16 || ano2 >= 65) {
        resultado1.innerHTML = `Você não é obrigado a votar, pois tem ${ano2} anos.`
    } else {
        resultado1.innerHTML = `Você é obrigado a votar, pois tem ${ano2} anos.` 
    }
}


// Verificação de nota da prova.

function calcular() {
    // Declaração das variáveis
    const nota1 = window.document.querySelector ("input#nota1")
    const nota2 = window.document.querySelector ("input#nota2")
    const nota01 = Number(nota1.value)
    const nota02 = Number(nota2.value)
    const media = (nota01 + nota02) / 2
    const recuperacao = 140 - media

    // Lógica de calculo da média

    if (media >= 70) {
        resultado1.innerHTML = `Você está aprovado. Parabéns. Sua média foi ${media}`
    } else if (media < 70 && recuperacao <= 100) {
        resultado1.innerHTML = `Você foi reprovado. Sua média foi ${media}. Você precisa tirar ${recuperacao}, na recuperação, para passar de ano.`
    } else {
        resultado1.innerHTML = `Você está reprovado e não tem recuperação. Sua média ficou ${media}`
    }

}


// Verificação de velocidade

function multa() {
    // Declaração de variáveis
    const velocidade = window.document.querySelector ("input#velocidade")
    const velocidades = Number(velocidade.value)

    // Lógica da velocidade
    if (velocidades <= 100) {
        resultado1.innerHTML = `Você estava a ${velocidades} Km/h. Não precisa pagar multa.`
    } else if (velocidades > 100 && velocidades <= 120) {
        resultado1.innerHTML = `Você estava a ${velocidades} Km/h. Pagar multa de R$ 130,16.`
    } else if (velocidades > 120 && velocidades <= 150) {
        resultado1.innerHTML = `Você estava a ${velocidades} Km/h. Pagar multa de R$ 195,23.`
    } else {
        resultado1.innerHTML = `Você estava a ${velocidades} Km/h. Pagar multa de R$ 880,41.`
    }

    
}


// Verificação de moeda

function converter() {
    // Declaração de variáveis
    const dinheiro = window.document.querySelector ("input#dinheiro")
    const real = Number(dinheiro.value)
    const dolar = real / 5.26

    // Convertendo para moeda
    const moeda = real.toLocaleString ('pt-BR', {style: 'currency', currency: 'BRL'})
    const dolares = dolar.toLocaleString ('en', {style: 'currency', currency: 'USD'})
    

    // Exibição
    resultado1.innerHTML = `Você possui ${moeda}. 
    <br>Já em dólar você possui ${dolares.replace('.',',')}`
}

// Calculo da hora, saudando

function hora() {
    // Declaração de variáveis
    const agora = new Date()
    const horario = agora.getHours()
    const minutos = agora.getMinutes()

    // Repetição do dia
    if (horario <= 12) {
        resultado1.innerHTML = `Bom dia!!!. São ${horario}:${minutos}.`
    } else if (horario > 12 && horario <= 18) {
        resultado1.innerHTML = `Boa tarde!!! São ${horario}:${minutos}.`
    } else {
        resultado1.innerHTML = `Boa noite!!! São ${horario}:${minutos}.`
    }
    
}


// Calculo do dia da semana

function dia() {
    // Declaração de variáveis
    const agora = new Date()
    const data = agora.getDay()

    // Estrutura de repetição do dia

    switch (data) {
        case 0: 
            resultado1.innerHTML = `Hoje é domingo.`
        break

        case 1: 
            resultado1.innerHTML = `Hoje é segunda-feira.`
        break

        case 2: 
            resultado1.innerHTML = `Hoje é terça-feira.`
        break

        case 3: 
            resultado1.innerHTML = `Hoje é quarta-feira.`
        break

        case 4: 
            resultado1.innerHTML = `Hoje é quinta-feira.`
        break

        case 5: 
            resultado1.innerHTML = `Hoje é sexta-feira.`
        break

        case 6: 
            resultado1.innerHTML = `Hoje é sábado.`
        break
    }

    
}

/*
// Configurações

function configuracoes() {
    document.div.write (window.document.charset)
}
*/