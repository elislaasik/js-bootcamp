
class Hangman {
    constructor(word, guessNumber){
        this.word = word.toLowerCase().split('')
        this.guessNumber = guessNumber
        this.guess = []
        this.status = 'playing'   
    }

    statusCalculation(){
        const finished = this.word.every((letter) =>  this.guess.includes(letter) || letter === ' ')

        if (this.guessNumber === 0){
            this.status = 'failed'
        }else if(finished){
            this.status = 'finished'
        }else{
            this.status = 'playing'
        }
    }

    makeGuess(character){
        character = character.toLowerCase()
        const isUnique =!this.guess.includes(character) 
        const isBadGuess = !this.word.includes(character)

        if(this.status !== 'playing'){
            return
        }

        if (isUnique){
            this.guess.push(character)
        } 

        if(isUnique && isBadGuess){
            this.guessNumber-- 
        }
     
        this.statusCalculation()
    }
    get getStatusMessage(){
        if(this.status === 'playing'){
            return `Guesses left: ${this.guessNumber} `
        } else if (this.status === 'failed'){
            return `Nice try! The word was "${this.word.join('')}"`
        } else {
            return 'Great work, you guessed the word'
        }
    }

    get puzzle(){
        let puzzle = ''  
        this.word.forEach((letter) => {
            if(this.guess.includes(letter) || letter === ' '){
                puzzle += letter
            } else {
                puzzle += '*'
            }
        })
        return puzzle
    }
}




const word1 = new Hangman('cat', 2)


//    let finished = true

//    this.word.forEach((letter) => {
//        if(this.guess.includes(letter)){
            
//        }else {
//            finished = false
//        }
//    })

// const lettersUngessed = this.word.filter((letter) => {
//     return !this.guess.includes(letter)
// })
// const finised = lettersUngessed.length === 0 






