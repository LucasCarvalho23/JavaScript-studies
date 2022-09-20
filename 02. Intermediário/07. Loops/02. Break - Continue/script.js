// BREAK: Sai do laço pai e encerra

const numbers = [1,2,3,4,5,6,7,8,9,10]

for (let date of numbers) {
    if (date === 5) {
        break
    }
    console.log (date)
}

console.log("===================")


// CONTINUE: Retorna o laço pai e continua o processo (não imprime o 5 e nem o console log)

const numbers2 = [1,2,3,4,5,6,7,8,9,10]

for (let dates of numbers2) {
    if (dates === 5) {
        continue
        console.log ('Isso imprime?')
    }
    console.log (dates)
}