function squarePromise(value) {
    if (typeof value !== "number") {
        return Promise.reject (`The value informed isn't allow.`)
    }
    return new Promise ( (resolve, reject) => {
        setTimeout(() => {
            resolve ({
                value:  value,
                result:  value * value
            }) 

        }, 1000);
    })
}

// He inform the error first and before execute the resolve.
squarePromise (4)
    .then( (obj) => console.log (obj.result))
    .catch(err => console.log (err))

squarePromise ("4")
    .then( (obj) => console.log (obj.result))
    .catch(err => console.log (err))