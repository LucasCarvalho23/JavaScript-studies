class IFrameInfo {

    constructor() {

        this.containerId = document.querySelector ("#container-id")
        this.amountTotal = window.length

        window.addEventListener("load", () => this.beginFunc())

    }

    beginFunc() {
        
        this.containerId.innerHTML = `${this.amountTotal}`

        //for (this.count = 0; this.count < this.amountTotal; this.count++) {}

        window.frames[0].location = "http://cfbcursos.com.br"

    }

}

let iframeInfo = new IFrameInfo()