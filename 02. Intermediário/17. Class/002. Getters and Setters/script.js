/*
    Getters and Setters

    Get = Realize action
    Set = Allow insert value
*/

class Square {

    constructor(_width) {
        this.width = _width
        this.height = _width
    }

    get area() {
        return this.width * this.height
        //console.log (`The square has ${this.width}m x ${this.height}m.`)
    }

    set area(width) {
        this.width = width
        this.height = this.width
    }

}

let date = new Square(4)
console.log(date.area);

date.area = 5
console.log(date.area);

