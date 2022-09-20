var nome = window.prompt('Qual seu nome?')

document.write(`Olá, ${nome}.Seu nome tem ${nome.length} letras.<br/>`) 

document.write(`Seu nome em maiúsculas é ${nome.toUpperCase()}<br/>`)

document.write(`Seu nome em minúsculo é ${nome.toLowerCase()}`)


/*
let numero1 = 1545.5

let numero1.toFixed(2) // Deixar com 2 causas decimais

numero1.toFixed(2).replace('.',',') // Substituir ponto por vírgula

numero1.toLocalString('pt-BR', {style: 'currency', currency: 'BRL'}) // Conveter para real

*/