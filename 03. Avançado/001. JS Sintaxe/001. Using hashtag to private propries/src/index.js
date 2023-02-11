const EntityBase = require('./entityBase')

console.log (new EntityBase({
    name: 'Lucas Carvalho',
    gender: 'male',
}).name)

console.log (new EntityBase({
    name: 'Maria Eduarda',
    gender: 'female',
}).name)