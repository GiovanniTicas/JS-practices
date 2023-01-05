// Intereactive Game

let playGame = confirm("Shall we play rock, paper, scissors?")
if (playGame) {
    let playerChoice = prompt("Please enter rock, paper or scissors")
    if (playerChoice) {
        let playerOne = playerChoice.trim().toLocaleLowerCase()
        if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
            let computerChoice = Math.floor(Math.random() * 3 + 1)

            let computer = computerChoice === 1 ? "rock" 
                : computerChoice === 2 ? "paper"
                : "scissors"

            let result = playerOne === computer ? "Tie game!"
                : playerOne === "rock" && computer === "paper"
                ? `You chose: ${playerOne}\nComputer chose: ${computer}\nComputer wins!`
                : playerOne === "paper" && computer === "scissors"
                ? `You chose: ${playerOne}\nComputer chose: ${computer}\nComputer wins!`
                :  playerOne === "scissors" && computer === "rock"
                ? `You chose: ${playerOne}\nComputer chose: ${computer}\nComputer wins!`
                : `You chose: ${playerOne}\nComputer chose: ${computer}\nYou win!`

                alert(result)
                let playAgain = confirm("Play again?")

                playAgain ? location.reload() : alert("ok thanks for playing")
        } else {
            alert("You did not enter rock, paper or scissors.\nLet's try again!")
        }
    } else {
        alert("Changed of mind?, maybe next time!")
    }
} else {
    alert("Ok, maybe next time!")
}