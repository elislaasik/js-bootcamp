// const myAge = 21
// const message = myAge >= 18 ? 'You can vote' : 'You cannot vote'
// console.log(message)

const myAge = 21
const showPage = () => {
    console.log('Showing the page')
}
const showErrorPage = () => {
    console.log('Showing error page')
}

const message = myAge >= 18  ? showPage() : showErrorPage()
//console.log(message)


const team = ['Tyler', 'Porter']
console.log( team.length <= 4 ? `Your team has ${team.length} members` : 'too many people on your team')

