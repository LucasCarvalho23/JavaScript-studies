/*

    ForEach: It's a Object function array type. Serves for excute a code block for each array.

    The forEach accept until three parameters.
    
    forEach(parameter,position,array)
        parameter - Parameter traveled in array
        position - Like count
        array - Length the array. array.length show the 
            total length. Without .length show the position in array.


*/

let approvedList = [
    'lucasilva1990@hotmail.com',
    'suelemmacedoduarte@gmail.com',
    'maria.eduarda@apple.com'
]

const sendEmail = (email) => {
    console.log (`E-mail for ${email} send with sucess!`)
}

// for..of 
for (let email of approvedList) {
    sendEmail(email)
}

console.log('======================')
console.log('======================')

// forEach

approvedList.forEach((email) => {
    sendEmail(email)
}) 