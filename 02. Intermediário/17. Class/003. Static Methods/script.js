/*
    Static Methods: Define the variable to all objects.
*/

class Car {

    static alertCar = true 

    constructor (brand, model, color) {
        this.brand = brand 
        this.model = model
        this.color = color 
        this.onCar = false 
        this.km = 0
        this.fuel = 10
    }

    // Print the result
    info () {
        console.log (`It's brand is: ${this.brand}`)
        console.log (`It's model is: ${this.model}`)
        console.log (`It's color is: ${this.color}`)
        console.log (`It's on? ${this.onCar ? "Yes" : "No"}`)
        console.log (`It's km is: ${this.km}`)
        console.log (`It's fuel is: ${this.fuel}%`)
        console.log ('Alert: ' + (Car.alertCar ? "Yes" : "No"))
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
    _onCar() {
        this.onCar = true 
    }

    offCar() {
        this.onCar = false
    }

}


let car1 = new Car ("Ferrari", "F1 2022", "Red")
let car2 = new Car ("Mercedes", "F1 2022", "Black")
let car3 = new Car ("Red Bull", "F1 2022", "Blue")
let car4 = new Car ("Mc Laren", "F1 2022", "Orange")

car4.setFuel = 100 // Insert fuel on the car

car1._onCar() // On the car
car3._onCar() // On the car
Car.alertCar = false

car1.info() // Print the car
car2.info() // Print the car


//car3.info() // Print the car
//car4.info() // Print the car