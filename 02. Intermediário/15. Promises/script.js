/*

JavaScript is single thread, ie, your code is processed line by line, instruction by inscrution. 
JavaScript is not blocking, ie, while you make the repare, it's continue working.
Assync stuff are process that don't depend of JavaScript, ie, it's acess any differents APIs, so the anwser don't depend its.

Promised - It's a feature (like API) that manager this assync part.


States Of Promisse:
- Pending (Pendente) - Send and can be either fulfilled or rejected.

- Fulfilled (Realizada) - 
    Methods:
        resolve()
        then() - to summon

- Rejected (Rejeitada) - 
Methods:
        reject()
        catch() - Deals with excess
- Settled (Estabelecida) - 


Body:

function promiseWorking() {
    return new Promise( function(resolve, reject) {
        resolve ('Mensage you choice')
    } )
}

promiseWorking().then( function(message) {
    console.log (message)
} )

*/


// Fullfilled
function itsFulfilled() {
    return Promise.resolve(23)
}

itsFulfilled().then( (data) => console.log ("It's resolved", data) )


// Rejected
function itsRejected() {
    return Promise.reject()
}

itsRejected().catch( () => console.log ("It's rejected") )


/*
    STANDARD USAGE
*/

function promiseWorking() {
    return new Promise( function(resolve, reject) {
        resolve ('Mensage you choice')
    } )
}

promiseWorking().then( function(message) {
    console.log (message)
} )


function promiseWorking() {
    return new Promise( function(resolve, reject) {
        resolve ('Mensage you choice')
    } )
}

promiseWorking().then( function(message) {
    console.log (message)
    console.log ("================")
    console.log ("================")
} )


// OTHER EXEMPLE

function promiseWorking() {
    return new Promise( function(resolve, reject) {
        setTimeout(() => resolve('Vasco da Gama'), 1000);
    } )
}

promiseWorking().then( function(message) {
    console.log (message)
    console.log ("================")
    console.log ("================")
} )


fetch('https://viacep.com.br/ws/23066107/json/').then( (data) => data.json().then( (address) => console.log (address)) )



