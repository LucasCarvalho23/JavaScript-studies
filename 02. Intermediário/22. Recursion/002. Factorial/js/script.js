class FatorialTest {

    constructor() {
        document.write (this.fatorial(5))
    }

    fatorial(number) {
        if (number == 1) {
            return 1
        } else {
            return number * this.fatorial(number - 1)
        }
    }

}

let fatorialTest = new FatorialTest()