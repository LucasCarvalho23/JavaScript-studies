/* 

    EXEC: Return last index found.

*/

class RegexExec {

    constructor() {
        this.str = 'O pato chato tem sapato de gato'
        this.regex = /(ch|[gp])ato/g 
        this.array

        this.executor()

    }

    executor() {
        while (this.array = this.regex.exec(this.str) ) {
            this.message = 'Found ' + this.array[0] + ' in ' + this.array.index + ' position. '
            this.message += "Next starts in " + this.regex.lastIndex + ' position.'
            console.log (this.message)
        }
    }

}

let regexExec = new RegexExec()