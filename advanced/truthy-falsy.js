const products = [{ name: 'computer mouse'}]
const product = products[0]

//Truthy - values that resolve to true in a boolean context

//Falsy - values that resolve to false in a boolean context
//Falsy values - false, 0, empty string, null, undefined, NaN

if (product){
    console.log('Product found')
} else {
    console.log('Product not found')
}