/*
    Match: Search in string other string searching.

    i- case sensitive
    g- all
    m- return array
*/

let textId = document.querySelector ("#text-id").innerHTML
let result = textId.match(/is/gi)
let result3 = textId.match(/[is]/gi)
let result2 = textId.match(/[^is]/gi)

console.log ('There '+result.length+' ('+result+') on total.')
console.log ('There '+result3.length+' ('+result3+') on total.')
console.log ('There '+result2.length+' ('+result2+') on total.')
