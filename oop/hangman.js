

const Hangman = function(word, guessNumber){
    this.word = word
    this.guessNumber = guessNumber
}



const word1 = new Hangman('flag', 4)
const word2 = new Hangman('emblem', 5)

console.log(word1)
console.log(word2 )