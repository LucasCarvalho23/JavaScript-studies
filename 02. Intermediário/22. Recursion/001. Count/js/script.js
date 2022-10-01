class Recursion {

    constructor() {
        this.squadId = document.querySelector ("#squad-id")
        this.count(0,10)
    }

    count(min, max) {
        document.write(min + "<br>")
        min < max ? this.count(++min,max) : console.log ('end')
    }

}

let recursion = new Recursion()