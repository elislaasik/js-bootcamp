let myBook = {
    title: '1984', 
    author: 'George Orwell',
    pagecount: 326
}


let otherBook = {
    title: 'A Peoples Hisotry', 
    author: 'GHoward Zinn',
    pagecount: 713
}


let getSummary = function (book){
    return {
        summary :`${book.title} by ${book.author}`,
        pageCountSummary: `${book.title}  is ${book.pagecount} pages long`
    }
  
}

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSummary)


//Challenge
//create object - take farenheight in and return  with all three celcious



let getTemperature = function (fahrenheit){
    
    return{
           fahrenheit: fahrenheit,
           celcius : (fahrenheit - 32) * 5/9,
           kelvin : (fahrenheit + 459.67) * 5/9

    }
}

let weatherForcast = getTemperature (74)


console.log(weatherForcast)
