/*
    Call - Define the object that you want get as parameter 
    Apply - Like the Call, return the parameters choiced. Apply accept a array of arguments.
    Bind - Catch the 'this' and unite a new function create when it's called
*/

this.place = "Rio de Janeiro"

function printPlace() {
    console.log(`${this.place}`)
}

printPlace()

const placeSecond = {
    place: 'São Paulo'
}

printPlace.call(placeSecond) // Receive placeSecond as parameter
printPlace.apply(placeSecond) 


console.log ("==========================")



console.log ("==========================")

this.place2 = "Brasil"

function wellcome(text,who) {
    console.log (`${text} ${who}. You are browsing of the ${this.place2}`)
}

const place2Second = {
    place2: 'Japan'
}

wellcome('Morning','Lucas')
wellcome.call(place2Second,'Hi','Lucas') 
wellcome.apply(place2Second,['Hi','Lucas']) 
console.log ("==========================")

/* 
    Errors:

    When don't direct a object
*/

wellcome.call('Morning','Lucas')
wellcome.apply(['Morning','Lucas'])
console.log ("==========================")
console.log ("==========================")


/*
    BIND
*/

console.log ('BIND:')

// Exemple with arrow function
console.log ('')
console.log ('Arrow Function:')

const person2 = {
    name: "Lucas",
    welc: () => console.log(`Olá ${this.name}`)
    // dont't print because this.name is not declared global
}

person2.welc()


// Exemple with anonimus functions. It's working!
console.log ('')
console.log ('Anonimus Function:')
const person = {
    name: "Lucas",
    welc: function () { 
        console.log(`Olá ${this.name}`) 
    }
}

person.welc()

const otherPerson = {
    //welc: person.welc
    welc: person.welc.bind(person2)
}

otherPerson.welc()