let name = "Elis Laasik"

// length property
console.log(name.length)

//convert to uppercas

console.log(name.toUpperCase())

console.log(name.toLowerCase())

//includes method
let password = 'abc123password098'

console.log(password.includes('password'))

// trim

console.log(name.trim())

//challenge area
// isValidPassWord
let isValidPassword = function (password) {
    return password.length > 8 && !password.includes('password')
    
}
console.log(isValidPassword('wercw'))
console.log(isValidPassword('erwejrcqekrcqlk'))
console.log(isValidPassword('wercwelckjpassword'))