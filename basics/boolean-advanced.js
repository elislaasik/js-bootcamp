let isAccountLocked = false
let userRole = 'user'

if (isAccountLocked) {
    console.log('Account is locked')
} else if (userRole === 'admin') {
    console.log('Welcome Admin!')
} else {
    console.log('Welcome!')
}


// challenge

let temp = 45

// It's freezing outside! 31
// It's hot outside!
// Go for it, it is pretty nice. 120
if (temp <= 31){
    console.log('It is freezing outside')
} else if (temp >= 120) {
    console.log('It  getting hot in here.. so take of all your clothes')
} else {
    console.log('Go for it, it is pretty nice')
}