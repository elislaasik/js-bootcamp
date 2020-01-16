let myBook = {
    title: '1984', 
    author: 'George Orwell',
    pagecount: 326
}
console.log (`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'
console.log (`${myBook.title} by ${myBook.author}`)

//Challenge area
//name, age, location
//Andrew is 27 and lives in Philadelphia
//increase age by 1 and print new message

let newPerson = {
    name: 'Elis',
    age: 20,
    location: 'Aarhus'
}
console.log (`${newPerson.name} is ${newPerson.age} and lives in ${newPerson.location}.`)

newPerson.age = 21
console.log (`${newPerson.name} is ${newPerson.age} and lives in ${newPerson.location}.`)