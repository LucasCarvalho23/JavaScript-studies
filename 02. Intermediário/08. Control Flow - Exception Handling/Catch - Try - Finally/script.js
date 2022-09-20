/*
    Em uma execução de programa, quando ocorre um erro, o console não permite execução até que seja feito a correção. O try-catch permite a execução.

    Quando ocorre erro, ele continua a execução e informa que houve um erro, caso seja desejado.

    Caso queira exibir o erro, dr console.log na variável que está direcionada dentro do catch()

*/

try {
    console.log ('Try - Código que será avaliado')
    console.logg ('Vasco') // com erro
} catch (error) {
    console.log ('Catch - Captura qualquer retorno de errodo try')
    console.log(error)
} finally {
    console.log ('Finally - Se executará sempre ao final de um bloco do try-catch')
}

console.log ("==============")


try {

    let number = "vasco"
    if (isNaN(number)) {
        throw new Error('Is not a number')
    } else {
        console.log (number)
    }

} catch (error) {
    console.log (error)
}


