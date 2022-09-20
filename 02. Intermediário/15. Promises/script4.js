function sumNumbers() {
    let result = 1 + 1

    if (result == 2) {
        sucessCallback()
    } else {
        errorCallback()
    }

}

function sucessCallback() {
    console.log ("Year! Number 2!")
}

function errorCallback() {
    console.log ("Ops! Something wrong.")
}

sumNumbers()


// Exemple with Promise
let p = new Promise( (resolve, reject) => {
    let number = 1 + 1
    if (number == 2) {
        resolve ("Sucess")
    } else {
        reject ("Failed")
    }
})

p.then( (message) => console.log ('This is in the then ' + message)
).catch ( (err) => console.log ('This s the catch ' + message))


// Another example

const betterDeveloper = 'Lucas'

function whoIsBetter(callback, errorCallback) {
    return new Promise( (resolve, reject) => {
        if (betterDeveloper != "Lucas") {
            reject({
                name: ' This is wrong',
                message: betterDeveloper + '? Really'
            })
        } else {
            resolve ({
                name: betterDeveloper,
                message: ' He is the better!'
            })
        }
    })
}

whoIsBetter()
    .then( (result) => {
        console.log (result.name + '? Yeah!' + result.message)
    }).catch( (error) => {
        console.log(error.name + ' ' + error.message)
    })



// Real example

const ul = document.querySelector('#users')
const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
    .then( (resp) => resp.json())
    .then (function (data) {
        console.log (data)

        return data.map(function(user) {
            let li = document.createElement('li')
            li.innerHTML = `${user.name} (${user.username})`
            ul.appendChild(li)
        })
    })
    .catch( (error) => {
        console.log('Oops!' + error)
    })





























