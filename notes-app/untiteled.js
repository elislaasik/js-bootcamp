const brothersBday = new Date('January 18 2020 0:00:00')
const birthDay = new Date('April 28 2020 0:00:00')
const firstTimestamp = brothersBday.getTime()
const secondTimestamp = birthDay.getTime()
 if (firstTimestamp > secondTimestamp){
     console.log(brothersBday.toString())
 } else{
    console.log(birthDay.toString())
 }


// const timeStamp = now.getTime()
// const myDate = new Date(timeStamp)
// console.log(myDate.getFullYear())

// console.log(`Year: ${now.getFullYear()}`)
// console.log(`Month: ${now.getMonth()}`)
// console.log(`Day: ${now.getDate()}`)
// console.log(`Hours: ${now.getHours()}`)
// console.log(`Minutes: ${now.getMinutes()}`)
// console.log(`Seconds: ${now.getSeconds()}`)

// const now = moment()
// now.add(1, 'week').subtract(20, 'days')
// console.log(now.format('MMMM Do, YYYY'))
// console.log(now.fromNow())

// const nowTimestamp = now.valueOf()
// console.log(moment(nowTimestamp).toString())

const now = moment()
now.date(28).month(3).year(1998);
console.log(now.format('MMM D, YYYY'))

