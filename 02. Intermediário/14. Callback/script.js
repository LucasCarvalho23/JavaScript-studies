/*
    Callbacks function: Allow execute a function before a certain action. Wait for some feature to make another action. As long as it doesn't receive, it doesn't execute.
*/

function exib (number) {
    console.log (number)
}

function soma(number1, number2, callback) {
    let rest = number1 + number2
    callback (rest) // Return the number that go to the callback
}

function mult(number1, number2, callback) {
    let rest = number1 * number2
    callback (rest) // Return the number that go to the callback
}

soma (3, 4, exib)
mult (3, 5, exib)