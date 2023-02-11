const EntityBase = require('./entityBase')

const assert = require ('assert')
const Employee = require('./employee')

const GENDER = {
    male: 'male',
    female: 'female'
}


// Context. All variables create inside the "{}" isn't accessed
{

    const employee = new Employee({
        name: 'Maria Eduarda',
        gender: GENDER.female
    })

    assert.throws( () => employee.birthYear, {message: "You must define age first!!!"})

}

{

    const employee = new Employee({
        name: 'Lucas Carvalho',
        age: 32,
        gender: GENDER.male
    })

    assert.deepStrictEqual(employee.name, "Mr. Lucas Carvalho")
    assert.deepStrictEqual(employee.age, undefined)
    assert.deepStrictEqual(employee.gender, undefined)
    assert.deepStrictEqual(employee.grossPaY,0)

}
