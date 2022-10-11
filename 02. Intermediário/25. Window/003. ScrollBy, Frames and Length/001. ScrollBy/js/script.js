/*

    ScrollBy: Allows you to sroll the page to the desired position.

*/

class ObjectWindow {

    constructor() {

        this.buttonLength = document.querySelector ("#button-length-id")
        this.container = document.querySelector ("#container-id")

        this.buttonLength.addEventListener ("click", () => this.eventButton())

    }

    eventButton() {
        window.scrollBy(1000,1000)
    }

}

let objectwindow = new ObjectWindow()