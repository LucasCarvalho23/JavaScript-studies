let squadId = document.querySelector("#squad-id")
let angle = 0
let animation

function turning() {
    squadId.style.transform = "rotate(" + angle + "deg)"
    angle++

    if(angle > 360) {
        angle = 0
    }

    animation = requestAnimationFrame(turning)
}

turning()

/*

class SquareTurning {

    constructor() {
        this.squadId = document.querySelector("#squad-id")
        this.angle = 0
        this.animation

        this.turning()
    }

    turning() {
        this.squadId.style.transform = "rotate("+ this.angle + "deg)"
        this.angle++

        if (this.angle > 360) {
            this.angle = 0
        }

        this.animation = requestAnimationFrame(this.turning)
    }

}

let squareTurning = new SquareTurning()

*/