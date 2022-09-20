class calculator {

    constructor(number1, number2) {
        this._number1 = number1
        this._number2 = number2
    }

    sum() {
        this.total = this._number1 + this._number2
        return this.total
    }

    sub() {
        this.total = this._number1 - this._number2
        return this.total
    }

    mul() {
        this.total = this._number1 * this._number2
        return this.total
    }

    div() {
        this.total = this._number1 / this._number2
        return this.total
    }

}


let number = new calculator(10, 20)
console.log ('Exemplo 1', number.sum())
console.log ('Exemplo 1', number.sub())
console.log ('Exemplo 1', number.mul())
console.log ('Exemplo 1', number.div())

let number2 = new calculator(40,10)
console.log ('==========')
console.log ('Exemplo 2', number2.sum())
console.log ('Exemplo 2', number2.sub())
console.log ('Exemplo 2', number2.mul())
console.log ('Exemplo 2', number2.div()) 


class modal extends calculator {
    constructor(number1, number2) {
        super(number1, number2)
    }

    mod() {
        this.total = this._number1 % this._number2
        return this.total
    }
}

let number3 = new modal(10, 4)
console.log ('==========')
console.log ('Exemplo 3', number3.mod()) 