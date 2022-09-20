/*
    Inheritance and Extends
*/

class Car {

    static alertCar = true 

    constructor (typeC, typeF) {
        this.carType = typeC
        this.onCar = false 
        this.fuelType = typeF 
        this.fuel = 100
    }

    // Print the result
    info () {
        console.log (`It's fuel type is: ${this.fuelType}`)
        console.log (`It's on? ${this.onCar ? "Yes" : "No"}`)
        console.log (`It's fuel is: ${this.fuel}%`)

        if (this.carType == 1) {
            console.log ('Army Car')
        } else if (this.carType == 2) {
            console.log ('F1 Car')
        } else if (this.carType == 3) {
            console.log ('Combat Car')
        } else {
            console.log ('Passenger Car')
        }

        console.log ("===================")
    }


    // Define value the fuel
    set setFuel(value) {
        if (value < 0 || value > 100) {
            alert ('Error!')
        } else {
            this.fuel = value 
        }
    }

    // On or Off Car
    set _onCar(t) {
        this.onCar = t
    }

    get _onCar() {
        return this.onCar
    }

}

class CombatCar extends Car {
    constructor() {
        super (2, 4)
        this.bullets = 1000
    }

    info() {
        console.log (`You are ${this.bullets} bullets`)
        super.info()
    }
}


let car1 = new Car (1, 1)
let car2 = new CombatCar(3, 2)

car1.info() // Print the car
car2.info()