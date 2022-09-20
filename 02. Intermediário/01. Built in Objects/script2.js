/* 
    Data Object:

    date() - Retorna o valor numérico correspondente ao tempo corrente.
    getDate() - Retorna o dia do mês.
    getDay() - Retorna o dia da semana.
    getMonth() - Retorna o mês.
    getFullYear() - Retorna o ano.
    getYear() - Retorna o ano, contando a partir de 1900, como 1.
    getHours() - Retorna a hora.
    getMinutes() - Retona os minutos.
    getSeconds() - Retorna os segundos.
    getTime() - Retorna os milissegundos passados entre 1 de Janeiro de 1970 00:00:00 UTC e a data atual.
    getTimeZoneOffset() - Retorna a diferença, em minutos, entre o UTC e a hora local.
    setDate() - Altera a data.
    setFullYear() - Altera o ano.
    setHours() - Altera o horário.
    setMinutes() - Altera os minutos.
    setMonth() - Altera o mês.
    setSeconds() - Altera os segundos.
    setTime() - Atribui data e hora para outra Date.
    setYear() - Retona o valor de milissegundos entre 1 de Janeiro de 1970 00:00:00 UTC e a data atualizada.
    toGMTSting() - Converte para string, usando a convernção do Horário de Greenwich.
    toLocaleString() - Converte o string em moedas, percent ou decimal.
    toString() - Informa o valor, em string, dentro do objeto.
*/

// setDate: Configura o dia. 0 = 1º dia do mês
const evento = new Date('August 19, 1975 23:15:30');

evento.setDate(23);

console.log(evento);


// Intl.NumberFormat
const dinheiro = 1000
const dinheiroFormatado = new Intl.NumberFormat('pt-BR').format(dinheiro)
console.log(dinheiroFormatado)


const money = 10000
const money2 = new Intl.NumberFormat('en').format(money)
console.log(money2)

/* 
    toString: Informa o valor dentro do objeto
    1- Retorna a string em decimal
    2- Retorna a string em binário
*/  
let number = new Number(4)
number = new Number(8)
number = new Number(23)
console.log(number)
console.log(number.toString())
console.log(number.toString(2))


let hoje = new Date()
let agora = hoje.getTimezoneOffset()
console.log(agora)