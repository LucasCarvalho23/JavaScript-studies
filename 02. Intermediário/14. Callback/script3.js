function numberSquared(value, callback) {
    setTimeout(() => {
        callback (value * value)
    }, 1000);
}

numberSquared(4, (value) => {
    console.log ("iniciar callback")
    console.log (`${value}`)
})