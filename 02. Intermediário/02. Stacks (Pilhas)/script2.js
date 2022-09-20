// Convert Dec to Bin

/*
function decToBin (decNumber) {
    let restStack = []
    let rest
    let binaryString = ""

    while (decNumber > 0) {
        rest = Math.floor(decNumber % 2)
        restStack.push(rest)
        decNumber = Math.floor(decNumber / 2)
    }

    while (restStack.length > 0) {
        binaryString += restStack.pop().toString()
    }

    return binaryString
}

console.log(decToBin(23))
*/

// Convert Dec to anyway base

function baseConverter(decNumber, base) {
    let restStack = []
    let rest
    let baseString = ""
    let digits = "0123456789ABCDEF"

    while (decNumber > 0) {
        rest = Math.floor(decNumber % base)
        restStack.push(rest)
        decNumber = Math.floor(decNumber / base)
    }

    while (restStack.length > 0) {
        baseString += digits[restStack.pop()]
    }

    return baseString
}

console.log (baseConverter(123, 16))

















