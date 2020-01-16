// Funtction – imput (argument), code, output (return value)

let greetUser = function () {
    console.log('Welcome user!')
}

greetUser()
greetUser()
greetUser()

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)

console.log(value)
console.log(otherValue)

//challange area

//convert Farenheit to celcius
let temperature = function (num) {
    let celcius = (num - 32) * 5/9 
    return celcius
}
let firstTemp = temperature(32)
let secondTemp = temperature(68)

//call a couple of times (32-> 0) (68 -> 20)
// print the converted values

console.log(firstTemp)
console.log(secondTemp)


