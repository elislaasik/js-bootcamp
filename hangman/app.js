//primitive value (non-object): string, number, boolean, null, undefined

// Object:myObject --> Object.prototype --> null
//Array: myArray --> array.prototype --> Object.prototype --> null
// Function: myfucntion --> function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
//Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null

// const product = 'computer'
// console.log(product)

// const otherProduct = new String('Phone')
// console.log(otherProduct)


//HTTP - hypertext tranfer protocall
// request - what do we want to do
// response - what was actually done

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')

puzzleEl.textContent = word1.puzzle
guessesEl.textContent = `You have ${word1.guessNumber} guesses left`
console.log(word1.status)

let statusEl = document.querySelector('#status')
statusEl.textContent = word1.getStatusMessage

window.addEventListener('keypress', (e)=>{
    const character = String.fromCharCode(e.charCode)
    word1.makeGuess(character)
    puzzleEl.textContent = word1.puzzle
    guessesEl.textContent = `You have ${word1.guessNumber} guesses left`
    statusEl.textContent = word1.getStatusMessage
    console.log(word1.status)
   
})


//making a HTTP request
const request = new XMLHttpRequest()

request.addEventListener('readystatechange', (e) =>{
    if(e.target.readyState === 4 && e.target.status === 200){
        console.log(e.target.status)
        const data = JSON.parse(e.target.responseText)
        console.log(data)
    }else if(e.target.readyState ===4){
        console.log('An error has taken place')
    }
})
    request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=2')
    request.send()
