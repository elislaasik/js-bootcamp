let myAccount = {
    name: "Elis",
    expences: 0,
    income: 0
}

//let otherAccount = myAccount
//otherAccount.income = 1000

//let addExpence = function (account, amount) {
   // account = {}
   // account.expences = account.expences + amount
//}


//addIncome - which account  and the amount 
//reset account - resets the account = 0
//get account summary. Andew has 900. Income is 1000 and 100 in expences.return a string with console.log

//addIncome
let addIncome = function (account,amount){
    account.income = account.income + amount
}
addIncome(myAccount,100)

//addExpence
let addExpence = function (account, amount) { 
 account.expences = account.expences + amount
}
addExpence(myAccount, 25)
//addxpence
addExpence(myAccount,11)

//getAccountSummary
console.log(myAccount)

let getAccountSummary = function (account) {
    let balance = account.income - account.expences
    return(balance)
}
console.log("Elis has" + getAccountSummary(myAccount) )
//resetAccount
 myAccount.expences = 0
 myAccount.income = 0

 console.log(myAccount)

//getAccountSummary

