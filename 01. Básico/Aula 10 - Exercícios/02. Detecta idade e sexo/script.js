function verificar() {
    
    let ano = document.querySelector ('input#ano').value 
    let resposta = document.querySelector ('div#resposta')
    let radsex = document.getElementsByName ('radsex')
    let imagem = document.createElement ('img')

    imagem.setAttribute ('id','foto')
    
    //Calcula idade
    let agora = new Date()
    let anoAtual = agora.getFullYear()
    let idade = anoAtual - ano

    if (ano.length == 0 || ano > anoAtual || idade >= 120) {
        alert ('Erro. Digite um ano válido.')

        // HOMEM
    } else if (radsex[0].checked) {

        if (idade <= 1) {
            resposta.innerHTML = `Sua idade é: ${idade} ano. Você é do sexo masculino`
            imagem.setAttribute ('src','Hbebe.png')
        } else if (idade > 1 && idade <= 4) {
            resposta.innerHTML = `Sua idade é: ${idade} anos. Você é do sexo masculino`
            imagem.setAttribute ('src','Hbebe.png')
        } else if (idade > 4 && idade <= 16) {
            resposta.innerHTML = `Sua idade é: ${idade} anos. Você é do sexo masculino`
            imagem.setAttribute ('src','Hcriança.png')
        } else if (idade > 16 && idade <= 55) {
            resposta.innerHTML = `Sua idade é: ${idade} anos. Você é do sexo masculino`
            imagem.setAttribute ('src','Hadulto.png')
        } else {
            resposta.innerHTML = `Sua idade é: ${idade} anos. Você é do sexo masculino`
            imagem.setAttribute ('src','Hidoso.png')
        }

        // MULHER
    } else if (radsex[1].checked) {
        
        if (idade <= 1) {
            resposta.innerHTML = `Sua idade é: ${idade} ano. Você é do sexo feminino`
            imagem.setAttribute ('src','Mbebe.png')
        } else if (idade > 1 && idade <= 4) {
            resposta.innerHTML = `Sua idade é: ${idade} anos. Você é do sexo feminino`
            imagem.setAttribute ('src','Mbebe.png')
        } else if (idade > 4 && idade <= 16) {
            resposta.innerHTML = `Sua idade é: ${idade} anos. Você é do sexo feminino`
            imagem.setAttribute ('src','Mcriança.png')
        } else if (idade > 16 && idade <= 55) {
            resposta.innerHTML = `Sua idade é: ${idade} anos. Você é do sexo feminino`
            imagem.setAttribute ('src','Madulto.png')
        } else {
            resposta.innerHTML = `Sua idade é: ${idade} anos. Você é do sexo feminino`
            imagem.setAttribute ('src','Midoso.png')
        }

    }

    resposta.appendChild (imagem)

}