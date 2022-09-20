let nascimento = window.prompt ('Em que ano você nasceu?')
let mesnasc = window.prompt ('E em qual mês?')

let ano = 2022 - nascimento

if (mesnasc < 7) {
    window.document.write (`Você tem ${ano} anos.`)
}
if (mesnasc >= 7) {
    ano = ano - 1
    window.document.write (`Você tem ${ano} anos.`)
}