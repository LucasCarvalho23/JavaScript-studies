/*
    For In = Percorre os atributos de um objeto
    For Of = Percorre arrays
*/


// FOR IN
const aluno = {
    nome: "Lucas", 
    sobrenome: "Carvalho"
}

const notas = {
    n1: 80,
    n2: 75,
    n3: 92,
    n4: 85
}

const info = {
    ...aluno,
    ...notas
}

console.log(info.nome)

for (let dado in aluno) {
    console.log(aluno[dado])
}


// FOR OF

let nota = [100,90,80,70,60]

for (let dados of nota) {
    console.log (dados)
}

console.log('=======================')

let notes = [100,60,50,30,90,97,68,93,57]
let aprovados = 0
let reprovados = 0

for (let date of notes) {
    date >= 70 ? aprovados++ : reprovados++
}

console.log ("Aprovados: " + aprovados)
console.log ("Reprovados: " + reprovados)