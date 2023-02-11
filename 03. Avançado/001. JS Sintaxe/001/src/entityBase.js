class EntityBase {

// Whenever there is "#", the properties is not accessed.
    #name
    #age
    #gender
    
    constructor({ name, age, gender}) {
        this.#name = name
        this.#age = age
        this.#gender = gender
    }

    get name() {
        const preffix = this.#gender === "male" ? "Mr." : "Miss"
        return `${preffix} ${this.#name}`
    }

}

module.exports = EntityBase