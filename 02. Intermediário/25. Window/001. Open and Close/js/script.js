/*

    Open: Open a new window
    Close: Close window

*/

class EventButton {

    constructor() {
        
        this.buttonEvent = document.querySelector ("#button-id")
        this.button2Event = document.querySelector ("#button2-id")
        this.newWindow = window.open ("./index2.html","_blank")
        this.newWindow

        this.buttonEvent.addEventListener ("click", () => this.newPage())
        this.button2Event.addEventListener ("click", () => this.closeWindow())

    }

    newPage() {
        this.newWindow = window.open ("./index2.html","_blank")
    }

    closeWindow() {
        this.newWindow.close()
    }

}

let eventButton = new EventButton()