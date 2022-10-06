/* 
    Search: Returns the first ocorrency founded.
    Replace: Replace some character in string.
    charCodeAt: Return the charcode when search the char.
    FromCharCode: Return the char when search the charcode.
    concat: Smelt more strings
*/

let resultId = document.querySelector("#result-id").innerHTML
let word = 'magni'

let resultFinal = resultId.search(word)
// or let resultFinal = resultId.search(/magni/)
let resultFinalReplace = resultId.replace(/sequi/i, "vasco")
let textTwo = "<br>The Vasco da Gama is the major team."

let textFinal = resultId.concat(textTwo)

document.write('The word: '+word+ ' show '+resultFinal+' times.')
document.write ('<br>=========================<br>')
document.write (resultFinalReplace)
document.write ('<br>=========================<br>')
document.write (textFinal)