/* 
    Generators: Includes "*" before the function and call with next()
*/

function* doSomething() {
    const msg = yield `Vasco`
    console.log(msg);
}

function main() {
    const generator = doSomething()
    const result = generator.next() 
    generator.next(result.value)
}

main()