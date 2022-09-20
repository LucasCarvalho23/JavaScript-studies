let num = document.querySelector ('input#num')
let valores = document.querySelector ('select#valores')
let resultado = document.querySelector ('div#resultado')
let vetor = []

function isNumero(n) {
    // Valor está dentro de 1 e 100.
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    // Valor não foi encontrado na lista
    if (l.indexOf(Number(n)) != -1) { 
        return true
    } else {
        return false
    }
}

function inserir() {
    // 2 funções dentro do if
    if (isNumero(num.value) && !inLista(num.value, vetor)) {
        vetor.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        valores.appendChild(item)
        resultado.innerHTML = `` // Limpa o finalizar quando insere novo valor
    } else {
        alert ('Valor inválido ou já encontrado na lista')
    }

    num.value = ''
    num.focus() // Deixa o campo focado - com mouse piscando

}

function finalizar() {
    if (vetor.length == 0) {
        alert ('Adicione valores antes de finalizar.')
    } else {
        let total = vetor.length 
        // Maior e menor valor
        let maior = vetor[0] // Recebe automaticamente o 1º
        let menor = vetor[0] // pois ele começa como sendo > e <.
        let soma = 0
        let media = 0

        for (let contador in vetor) {
            soma += vetor[contador]
            if (vetor[contador] > maior) {
                maior = vetor[contador]
            }

            if (vetor[contador] < menor) {
                menor = vetor[contador]
            }
        }

        media = soma / total 

        resultado.innerHTML = ``
        resultado.innerHTML += `<p> Ao todo, temos ${total} números cadastrados. </p>`
        resultado.innerHTML += `<p> O maior valor informado foi ${maior} </p>`
        resultado.innerHTML += `<p> O menor valor informado foi ${menor} </p>`
        resultado.innerHTML += `<p> Somando todos os valores, temos ${soma}</p>`
        resultado.innerHTML += `<p> A média de todos os valores é ${media.toFixed(2)}</p>`

    }
}