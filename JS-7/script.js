// Conditionals: Switch statements

// Syntax
// switch (expression OR value) {
//     case choice1:
//         //run this code
//         break;
    
//     case: choice2:
//         //run this other code
//         break;

//     // add as many cases needed

//     default: 
//         //run this code if no case matches
//         //no need for a break here
// }

/////////////////////////////////////////////////////////////////////////////

// switch (2) {
//     case 1: 
//         console.log(1);
//         break;
//     case 2: 
//         console.log(2);
//         break;
//     case 3: 
//         console.log(3);
//         break;

//     default:
//         console.log("No match")
// }
/////////////////////////////////////////////////////////////////////////////

let playerOne = "rock"
let computer = "paper"

switch (playerOne) {
    case computer:
        console.log("Draw")
        break

    case "rock":
        if (computer === "paper"){
            console.log("Computer wins")
        } else (
            console.log("Player wins")
        )
        break
     case "paper":
        if (computer === "scissors"){
            console.log("Computer wins")
        } else (
            console.log("Player wins")
        )
            break
    default:
        if (computer === "rock"){
            console.log("Computer wins")
        } else (
            console.log("Player wins")
        )
        break
}