let temp = 55 

 // logical and operator – True if both sides are true
 // logical or operator – True if one of the sides is true, otherwise false

if (temp >= 60 && temp <= 90) {
    console.log('It is pretty nice out')
} else if (temp <= 0 || temp >= 120) {
    console.log('Do not go outside!!!')
} else {
    console.log('Eh.. do what you want')
}

//Challenge area

let isGuestOneVegan = true
let isGuestTwoVegan = false

if (isGuestOneVegan === true && isGuestTwoVegan === true) {
    console.log('Offer vegan dishes')
} else if (isGuestOneVegan === true || isGuestTwoVegan === true)
{
    console.log('Offer some vegan dishes')
} else {
    console.log('Offer anything on the menue')
}