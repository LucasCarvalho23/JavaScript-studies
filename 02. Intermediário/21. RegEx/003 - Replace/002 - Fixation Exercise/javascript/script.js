/*
    a - All date
    b - day
    c - month
    d - year
    e - 
    f - 
*/


class ReplaceDate {

    constructor() {
        
        this.textSite = "Hi, my name is Lucas Carvalho. I'm born 3/07. My daughter born 21/01/2021 and my wife born 15/11/97."

        this.replaceContent()

    }

    replaceContent() {
        this.regex = /(\d{1,2})\/(\d{1,2})\/?(\d{2,4})?/g
        this.day = ''
        this.array = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "octuber", "november", "december"]

        return this.textSite.replace(this.regex,(a, b, c, d) => {
            console.log (c)
            console.log (this.array[c])
            this.day = b + ' de ' + this.array[c]-1 + ' de ' + d
            console.log(this.day);
            return this.day
        })
    }

}

let replaceDate = new ReplaceDate()
