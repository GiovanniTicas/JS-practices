// Conditionals: If statements

// syntax 
// if (condition) {
//     //run come coded
// } else {
//     //run some different code
// }
 
//////////////////////////////////////////////////////////////////////////////

// let customerIsBanned = false
// let soup = "s"
// let crackers = false
// let reply

// if (customerIsBanned) {
//     reply = "No soup for you!"
// } else if (soup && crackers) {
//     reply = `Here your ${soup} and crackers`
// } else if (soup){
//     reply = `Here is you order of ${soup}`
// } else {
//     reply = `Sorry, we are out of ${soup}`
// }

// console.log(reply)

/////////////////////////////////////////////////////////////////////////////

// let testScore = 30
// let collegeStudent = true
// let grade

// if (testScore >= 90) {
//     grade = "A"
// } else if (testScore >= 80) {
//     grade = "B"
// } else if (testScore >= 70) {
//     grade = "C"
// }else if (testScore >= 60) {
//     grade = "D"
// } else {
//     if (collegeStudent) {
//         grade = "U"
//     } else {
//         grade = "F"
//     }
// }

// console.log(grade)

/////////////////////////////////////////////////////////////////////////////
 
let playerOne = "scissors"
let computer = "paper"

let winner;

if (playerOne === computer) {
    winner = "Draw"
} else if (playerOne === "rock") {
    if (computer === "paper"){
        winner = "Computer wins"
    }  else {
        winner = "Player wins"
    }
} else if (playerOne === "paper") {
    if (computer === "scissors") {
        winner = "Computer wins"
    }  else {
        winner = "Player wins"
    }
} else {
    if (computer === "rock") {
        winner = "Computer wins"
    }  else {
        winner = "Player wins"
    }
}


console.log(winner);