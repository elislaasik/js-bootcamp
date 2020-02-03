const square = (num) =>  num * num


const squareLong = (num) => {
    return num * num
}
console.log(square(5))

const people = [{
    name: 'Andrew',
    age: 29
}, {
    name: 'Virkram',
    age: 31
}, {
    name: 'Jess',
    age: 22
}]

// const underThrity = people.filter(function(person){
//     return person.age < 30
// })

// console.log(underThrity)

const under30 = people.filter((person) => person.age < 30)
//console.log(under30)

const age22 = people.find((person) => person.age === 22)
console.log(age22.name)