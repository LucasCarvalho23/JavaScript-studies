class PIXKey {

    constructor() {
        this.pixkey = document.querySelector ('#pixkey')
        this.containerEnd = document.querySelector ("#containerEnd")
        this.btnSend = document.querySelector ("#btnSend")
        this.regCpf = /\d{11}|\d{3}.\d{3}.\d{3}.\d{2}/g
        this.regEmail = /\w{4,20}@[a-z]+\.com.?b?r?/g

        this.btnSend.addEventListener ('click', () => this.clickedPix())
    }

    clickedPix() {
        
        if (this.regCpf.test(this.pixkey.value) == true) {
            this.containerEnd.innerHTML = `The key informed is ${this.pixkey.value}. It's a CPF.`
        } else if (this.regEmail.test(this.pixkey.value) == true) {
            this.containerEnd.innerHTML = `The key informed is ${this.pixkey.value}. It's a e-mail.`
        } else {
            alert ('Error! Insert the key correctly.')
        }
    }

}


const pixkey = new PIXKey()