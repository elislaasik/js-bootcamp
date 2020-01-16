 //Lexical scope (Static scope)
 // Global scope – defined outside code blocks
 // Local scope – defined inside a code block

// In any scope you can access variables defined in that scope, or in any parent ancestor scope
 
 let varOne = 'varOne'

 if (true) {
    console.log(varOne)
    let varTwo = 'varTwo'
    console.log(varTwo)
    if (true) {
        let varFour = 'varFour'
    }
 }

 if (true) {
   
    let varThree = 'varThree'
    
 }
