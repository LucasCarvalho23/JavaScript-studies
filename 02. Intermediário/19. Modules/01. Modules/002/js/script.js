import sum from './sum.js'
import subt from './subt.js'
import div from './div.js'
import mult from './mult.js'
import end from './end.js'

let result = document.querySelector ("#result")

const sum1 = sum(2, 3)
console.log (sum1)

const subt1 = subt(4, 2)
console.log (subt1)

const div1 = div(6, 2)
console.log(div1);

const mult1 = mult(4, 5)
console.log(mult1);

const end1 = end()

result.innerHTML = 
`
    <h3>The result the values</h3>
    <p>The sum is: ${sum1}</p>
    <p>The subt is: ${subt1}</p>
    <p>The mult is: ${mult1}</p>
    <p>The div is: ${div1}</p>
    <p>${end1}</p>
`