const account = {
    name: 'Elis Laasik',
    expences: [],
    incomes:[],
    addExpence : function (description, amount){
        this.expences.push({
            description: description,
            amount: amount
        })
    },
    addIncome : function (description, amount){
        this.incomes.push({
            description: description,
            amount: amount
        })
    },

    getAccountSummary : function(){

        let totalIncome = 0
        this.incomes.forEach(function(income){
            totalIncome = totalIncome + income.amount
        })
        let totalExpences = 0
        this.expences.forEach(function(expence){
            totalExpences = totalExpences + expence.amount
        })
        let totalBalance = totalIncome - totalExpences

        return `${this.name} has account balance of ${totalBalance} euros. Income of ${totalIncome} euros
        and expences of ${totalExpences} euros.`
       
   
      
   }
}

// 1. add an income array to account
// 2. add income method -> description, amount
// 3. tweak how much in expences, income and account balance

// Adnrew Mead has a balance of 10. 100 in income and 90 in expences. 


account.addExpence('Rent', 950)
account.addExpence('Coffee', 2)
account.addIncome('job', 1000)


console.log(account.getAccountSummary())



console.log(account)