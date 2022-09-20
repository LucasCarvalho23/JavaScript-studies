function itsWorking() {
    return Promise.resolve('23066107')
}

itsWorking()
    .then( (cep) => window.fetch('https://viacep.com.br/ws/'+ cep +'/json/')
    )
    .then ( (data) => data.json()
    )
    .then ( (address) => console.log (address)
    )

// Exemple with code improvement

function itsWorking2() {
    return Promise.resolve('23066107')
}

function catchCEP(cep) {
    return window.fetch('https://viacep.com.br/ws/'+ cep +'/json/')
}

function extractAddress(data3) {
    return data3.json()
}

function printAddress(address2) {
    console.log (address2)
}

function manageError(error) {
    console.log (`ERROR!!!`)
}

function alwaysExecute() {
    console.log ('Always working')
}

itsWorking2() 
    .then (catchCEP)
    .then (extractAddress)
    .then (printAddress)
    .catch (manageError)
    .finally (alwaysExecute) // Always working independent of the error.

// Summon all promises, just if one don't depend of other. Show the value of the all resolved.
Promise.all([
    itsWorking(),
    catchCEP('20740530')
]).then ( (promiseWorking) => (promiseWorking) )

//When a Promise is returned, he return the value. Show th value the reject first, to be correct. After the resolved.
Promise.race([
    itsWorking2(),
    manageError()
])
.then( (itsWorking2) => console.log(itsWorking2), (manageError) => console.log(manageError) )




