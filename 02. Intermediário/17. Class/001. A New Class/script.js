class insertName {

    constructor(name) {
        this._name = name
    }

    get name() {
        return this._name
    }

    set name(string) {
        this._name = this.team(string)
    }

    team(name) {
        return `${name} is Vasco da Gama.`
    }

}


class State extends insertName {
    
    constructor (name, state) {
        super(name)
        this._state = state 
    }

    code() {
        return `${this._name} is living in ${this._state}`
    }

}

let duda = new State('Maria Eduarda', 'Rio de Janeiro')
console.log (duda.code())

const person = new insertName('Lucas')
console.log (person.name)
person.name = "Suelem"
console.log (person.name)
