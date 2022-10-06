/*
    
    LocaleCompare: Compare if the string are equals. If true return 0. Else return 1.
    Substr: Looks like the method "slice". (Initial position, length the cut)
    
*/  


let textId = document.querySelector ("#text-p-id").innerHTML
let text2 = textId

let result = textId.localeCompare(text2)
let result2 = textId.substr(4,20)

result == 0 ? console.log ("It's equal") : console.log ("It's diferents!") 

document.write (result2)

