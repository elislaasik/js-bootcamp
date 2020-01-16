//undefined for variable
let name 

if (name === undefined) {
    console.log('please provide a name')
} else {
    console.log(name)
}
// undefined for function
//undefined as the function return default value
let sqaure = function (num) {
    console.log(num)
}

let result = square()
console.log(result)

//null as assigned value

let age = 27
age = null

console.log(age)