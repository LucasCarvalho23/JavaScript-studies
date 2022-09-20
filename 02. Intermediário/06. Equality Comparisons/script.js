/*

Equality Comparisons:

== => Same value
=== => Same value and same type
Object.is => Same value and same type

isLooselyEqual => ==
isStrictlyEqual => ===
sameValueEqual => Object.is
sameValueZeroEqual => 

*/

let value1 = 10
let value2 = 10
let value3 = "10"

console.log (Object.is(value1,value2))
console.log (Object.is(value1,value3))