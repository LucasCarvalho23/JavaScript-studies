
const agora = new Date()
const hora = agora.getHours()
const minutos = agora.getMinutes()
const mes = agora.getMonth()

switch (mes) {
    case 0: 
        console.log (`Janeiro`)
    break
    case 1: 
        console.log (`Fevereiro`)
    break
    case 2: 
        console.log (`Março`)
    break
    case 3: 
        console.log (`Abril`)
    break
    case 4: 
        console.log (`Maio`)
    break
    case 5: 
        console.log (`Junho`)
    break
    case 6: 
        console.log (`Julho`)
    break
    case 7: 
        console.log (`Agosto`)
    break
    case 8: 
        console.log (`Setembro`)
    break
    case 9: 
        console.log (`Outubro`)
    break
    case 10: 
        console.log (`Novembro`)
    break
    case 11: 
        console.log (`Dezembro`)
    break
}

if (hora <= 12) {
    console.log ('Bom dia')
} else if (hora > 12 && hora <=18) {
    console.log ('Boa tarde')    
} else {
    console.log ('Boa noite')
}


/*
while (contador <= 5) {
    console.log (`Vasco da Gama ${contador}`)
    contador++
}


do {
    console.log (`Vasco da Gama ${contador}`)
    contador++
} while (contador <= 6)

console.log ('FINISH')



console.log ('READY.. Go!')

for (let contador = 1; contador <= 5; contador++) {
    console.log (`Vasco 0${contador}`)
}

console.log ('FINISH')

*/