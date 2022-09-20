function resposta() {

    let horario = document.querySelector ('div#horario')
    let agora = new Date()
    let hora = agora.getHours()
    let imagem = document.createElement ('img')

    horario.innerHTML = `Agora são ${hora} horas.`
    imagem.setAttribute ('id', 'foto')

    if (hora <= 12) {
        horario.innerHTML += `<br>`
        imagem.setAttribute ('src','fotomanha.png')
        document.body.style.background = "rgba(250, 203, 101, 0.829)"
    } else if (hora > 12 && hora <= 17) {
        horario.innerHTML += `<br>`
        imagem.setAttribute ('src','fototarde.png')
        document.body.style.background = "lightgray"
    } else {
        horario.innerHTML += `<br>`
        imagem.setAttribute ('src','fotonoite.png')
        document.body.style.background = "rgba(194, 129, 255, 0.712)"
    }

    horario.appendChild(imagem) 

}