class Rectangle {

    constructor(_width, _height, _color) {
        console.log("The rectangle is being created!");

        this.width = _width
        this.height = _height
        this.color = _color
        console.log(this.width, this.height, this.color);
    }

    getArea() {
        return this.width * this.height
    }

    printDescription() {
        console.log (`I'm a rectangle of ${this.width}m x ${this.height}m and I'm ${this.color}`)
    }

}

let Rectangle1 = new Rectangle(5, 3, "blue")
let Rectangle2 = new Rectangle(7, 4, "red")

console.log (Rectangle1.printDescription()) 
console.log (Rectangle2.printDescription()) 