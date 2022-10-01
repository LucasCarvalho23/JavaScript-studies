class TransfObj {

    constructor() {
        this.str = 'http://teste.com.br/index.html?ola=mundo&user=lucas&id=123'
        this.regex = /[\?,&](\w+)=(\w+)/g
        this.arr
        this.parameter = {}
        
        this.regexObj()
    }


    regexObj() {
        
        while (this.arr = this.regex.exec(this.str)) {
            this.parameter[this.arr[1]] = this.arr[2]
        }

        console.log (this.parameter)

    }

}

let transfObj = new TransfObj()