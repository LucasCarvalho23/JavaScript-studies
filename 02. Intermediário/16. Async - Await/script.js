//Sintax

function firstFunction() {
    return new Promise( (resolve) => {
        setTimeout(() => {
            console.log ('Esperou...')
            resolve()
        }, 1000);
    })
}

async function secondFunction() {
    console.log ('Primeiro')    
    await firstFunction()
    console.log ('Terceiro')    
}

secondFunction()