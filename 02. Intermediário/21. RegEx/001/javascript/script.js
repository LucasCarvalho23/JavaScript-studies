/*

    Create expression: new RegExp()

    RegEx
        test (str) / str - String tested return boolean.
        exec (str) / str - String tested give more info (position, etc.).

    String
        replace (regex | str | fn) - Replace. 
        match (regex) - String tested give more info (position, etc.).
        search (regex) - Return the position where was the first occurrence of the RegEx found.

    Flags
        g: Global.
        i: Case Sensitive
        m: Multiline

*/


let cep = '23066-107'


function isValidCEP(str) {
    let regex = /\d{5}-?\d{3}/g
    console.log (regex.test(str))
    return regex.test(str)
}

isValidCEP('23066-107')