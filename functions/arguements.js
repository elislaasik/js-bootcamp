
// Multiple arguements
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

//Default arguements

let getScoreText = function (name = 'Anonymous', score = 0) {
   return `Name: ${name} – Score ${score}`
   //return  'Name: ' + name + ' Score: ' + score
}

 let scoreText = getScoreText(undefined, 99 )
 console.log(scoreText)

 // Challenge 

 // total for the bill, tip percentage 0.2 
// A 25% tip on 40$ would be
 let tipAmount = function (total = 'how much is the bill?', tipPercent = 0.25) {
    let percent = tipPercent * 100
    let tip = total * tipPercent
   return `A ${percent}% tip on ${total} would be ${tip}`
   // return total * tip
 }

 let totalTipAmount = tipAmount (40)
 console.log(totalTipAmount)


 console.log('Andrew' + 'Mead') 

let name = 'Jen'
let age = '12'
 console.log(`Hey! My name is ${name}! I am ${age} years old.`)