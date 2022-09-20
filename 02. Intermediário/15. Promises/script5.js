// Create a promise
const myPromise = new Promise( (resolve, reject) => {

    const name = "Lucas"

    if (name === "Lucas") {
        resolve (`User found!`)
    } else {
        reject (`User not found!`)
    }

})

myPromise.then( (data) => {
    console.log (data)
})


// Example 2
const myPromise2 = new Promise( (resolve, reject) => {

    const num = 10

    if (typeof num === "number") {
        resolve(num*num) 
    } else {
        reject('Error.')
    }

})

myPromise2.then( (item) => {
    console.log (item)
})


// Example 3
const myPromise3 = new Promise( (resolve, reject) => {

    const name = "Suelem"

    if (name === "Lucas") {
        resolve (`User found!`)
    } else {
        reject (`User not found!`)
    }

})

myPromise3
    .then( (data3) => console.log (data3))
    .catch( (error) => console.log
     (`Aconteceu um error: ${error}`))


// Resolve any Promises

const example = new Promise( (resolve, reject) => {
    
    resolve ('Vasco 1')

})

const example2 = new Promise( (resolve, reject) => {
    
    resolve ('Vasco 2')

})

const example3 = new Promise( (resolve, reject) => {
    
    resolve ('Vasco 3')

})


const resolveAll = Promise.all([example, example2, example3])
    .then( (data) => console.log (data))
    .catch()