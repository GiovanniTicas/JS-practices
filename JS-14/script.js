// Interactive Game with Arrays

let playGame = confirm("Shall we play rock, paper, scissors?")
if (playGame) {
  // PLAY
  while (playGame) {
    const playerChoice = prompt("Please enter rock, paper or scissors")
    if (playerChoice || playerChoice === "") {
      const playerOne = playerChoice.trim().toLocaleLowerCase()
      if (
        playerOne === "rock" ||
        playerOne === "paper" ||
        playerOne === "scissors"
      ) {
        const computerChoice = Math.floor(Math.random() * 3)
        const rpsArray = ["rock", "paper", "scissors"]
        const computer = rpsArray[computerChoice]

        const result =
          playerOne === computer
            ? "Tie game!"
            : playerOne === "rock" && computer === "paper"
            ? `You chose: ${playerOne}\nComputer chose: ${computer}\nComputer wins!`
            : playerOne === "paper" && computer === "scissors"
            ? `You chose: ${playerOne}\nComputer chose: ${computer}\nComputer wins!`
            : playerOne === "scissors" && computer === "rock"
            ? `You chose: ${playerOne}\nComputer chose: ${computer}\nComputer wins!`
            : `You chose: ${playerOne}\nComputer chose: ${computer}\nYou win!`
        alert(result)
        playGame = confirm("Play again?")
        if (!playGame) alert("Ok, Thanks for playing.")
        continue
      } else {
        alert("You didn't enter any of the options")
        continue
      }
    } else {
      alert("Changed your mind? Maybe next time!")
      break
    }
  }
} else {
  alert("Ok, maybe next time")
}
