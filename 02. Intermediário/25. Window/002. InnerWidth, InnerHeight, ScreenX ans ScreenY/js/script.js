/*

    InnerWidth: Return the inner size the window
    InnerHeight: Return the inner size the window
    OuterWidth: Return the out size the window
    OuterHeight: Return the out size the window

    ScreenX: 
    ScreenY: 

*/

class ObjectWindow {

    constructor() {

        this.widthSize
        this.heightSize
        this.positionX
        this.positionY

        this.widthSize = window.innerWidth //Obtain the inner Width 
        this.heightSize = window.innerHeight
        this.positionX = window.screenX
        this.positionY = window.screenY

        this.buttonLength = document.querySelector ("#button-length-id")
        this.container = document.querySelector ("#container-id")

        this.buttonLength.addEventListener ("click", () => this.eventButton())

    }

    eventButton() {
        this.container.innerHTML += `~The width the page is ${this.widthSize}px.<br><br>`
        this.container.innerHTML += `~The height the page is ${this.heightSize}px.<br><br>`
        this.container.innerHTML += `~The position X the page is ${this.positionX}px.<br><br>`
        this.container.innerHTML += `~The position Y the page is ${this.positionY}px.`
    }

}

let objectwindow = new ObjectWindow()