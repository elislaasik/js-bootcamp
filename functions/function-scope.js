// Global scope (convertfarenheit to  celcios, temp1, temp1)
    // local scope (farenheit, celcious)
        //local scope (isfreezing)


//convert Farenheit to celcius
let temperature = function (num) {
    let celcius = (num - 32) * 5/9 
    return celcius
    if (celcius <= 0){
        let isFreezing = true
    }
}
let firstTemp = temperature(32)
let secondTemp = temperature(68)

//call a couple of times (32-> 0) (68 -> 20)
// print the converted values

console.log(firstTemp)
console.log(secondTemp)
