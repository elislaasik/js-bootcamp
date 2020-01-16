// students score, total possible score
// 15/ 20 - You got a C (25%)!
// A- 90-100, B 80-89, C 70-79, D 60-69, F 0-59

let gradeCalc = function (score, maxScore) {
    let percentage = score / maxScore * 100
    let lettergrade = ''
    if (percentage >= 90  ){
        lettergrade = 'A'
    }
    else if (percentage >= 80 ){
        lettergrade = 'B'
    }
    else if (percentage >= 70 ){
        lettergrade = 'C'
    }    else if (percentage >= 60 ){
        lettergrade = 'D'
    }    else {
        lettergrade ='F'
    }
    return `You got a ${lettergrade} (${percentage}%)!`
}

let endGrade = gradeCalc (93, 100)
console.log(endGrade)