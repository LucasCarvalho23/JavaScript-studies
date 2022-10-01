/*
    
    Search: Return the position the first parameter found.

    Match: Return an array with data.

*/

class TextSearch {

    constructor() {

        this.str = "Today is 27/09/2022 and tomorrow will be 27/09/22. My birthday is 3/07"
        this.regex = /\d{1,2}/g

        this.test = this.str.search(this.regex)
        this.test2 = this.str.match(this.regex)

        console.log ('Search:')
        console.log (this.test)
        console.log ('--------------------------')
        console.log ('Match:')
        console.log (this.test2)
        console.log ('--------------------------')

    }

}

let textsearch = new TextSearch()