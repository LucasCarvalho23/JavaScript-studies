class Square {

    constructor() {
        this.px = 0
        this.py = 0
        this.count = 1
        this.container = document.querySelector ("#containerSquare")
        this.containerShadow = document.querySelector("#containerGlue")

        this.initialState()
    }


    // Initial state
    initialState() {
        this.container.style.background = "white"
        this.container.style.left = 0+"px"
        this.container.style.top = 0+"px"
        this.actionElement = this.movElement.bind(this)
        document.addEventListener ("keydown", this.actionElement)
    }

    
    //Last state
    lastState() {
        this.container.style.background = "white"
        this.container.style.left = this.px+"px"
        this.container.style.top = this.py+"px"
        document.addEventListener ("keydown", this.actionElement)

        
        // Insert message unlocked or not
        if (this.count % 2 == 0) {
            alert ('Event unlocked')
            this.count++
        } 
    }


    // Move element with qwerty
    movElement() {
        this.keyFunc = event.keyCode

        // 37 - left / 38 - up / 39 - right / 40 - down
        if (this.keyFunc == 37) {
            this.px -= 10
            this.container.style.left = this.px + "px"
        } else if (this.keyFunc == 38) {
            this.py -= 10
            this.container.style.top = this.py + "px"
        } else if (this.keyFunc == 39) {
                this.px += 10
                this.container.style.left = this.px + "px" 
        } else if (this.keyFunc == 40) {
            this.py += 10
            this.container.style.top = this.py + "px"
        } else if (this.keyFunc == 13) {
            this.eventBlocked()
            this.count++
        }

    }


    // Block event
    eventBlocked() {
        document.removeEventListener ("keydown", this.actionElement)
        this.container.style.background = "red"
        alert ('Event blocked')
        document.addEventListener ("keydown", this.movElement2.bind(this))
        this.glueEvent()
    }


    
    glueEvent() {
        this.containerShadow.style.background = "rgba(255, 0, 0, 0.629)"
        this.containerShadow.style.left = this.px+"px"
        this.containerShadow.style.top = this.py+"px"
    }
    


    // Goes to function that save the value of last state
    movElement2() {
        this.keyFunc2 = event.keyCode
        if (this.keyFunc2 == 13) {    
            this.lastState()
        }
    }

}

const square = new Square()