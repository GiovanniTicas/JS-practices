// Interactive Game with Functions
function initGame() {
  let startGame = confirm("Shall we play rock, paper, scissors?")
  startGame ? playGame() : alert("Ok maybe next time")
}

function playGame() {
  while (true) {
    let playerChoice = getPlayerChoice()
    playerChoice = formatPlayerChoice(playerChoice)
    if (playerChoice === "") {
      invalidChoice()
      continue
    }
    if (!playerChoice) {
      decideNotToPlay()
      break
    }

    playerChoice = evaluatePlayerChoice(playerChoice)
    if (!playerChoice) {
      invalidChoice()
      continue
    }
    const computerChoice = getComputerChoice()
    const result = determineWinner(playerChoice, computerChoice)
    displayResult(result)
    if (askToPlayAgain()) {
      continue
    } else {
      thanksForPlaying()
      break
    }
  }
}

function getPlayerChoice() {
  return prompt("Please enter rock, paper or scissors")
}

function formatPlayerChoice(playerChoice) {
  if (playerChoice || playerChoice === "") {
    return playerChoice.trim().toLocaleLowerCase()
  } else {
    return false
  }
}

function evaluatePlayerChoice(playerChoice) {
  if (
    playerChoice === "rock" ||
    playerChoice === "paper" ||
    playerChoice === "scissors"
  ) {
    return playerChoice
  } else {
    return false
  }
}

function invalidChoice() {
  alert("You didn't enter any of the options")
}

function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3)
  const rpsArray = ["rock", "paper", "scissors"]
  return rpsArray[computerChoice]
}

function askToPlayAgain() {
  return confirm("Play again?")
}

function decideNotToPlay() {
  alert("Changed your mind? Maybe next time!")
}

function thanksForPlaying() {
  alert("Ok, thanks for playing")
}

function determineWinner(player, computer) {
  const winner =
    player === computer
      ? "Tie game!"
      : player === "rock" && computer === "paper"
      ? `You chose: ${player}\nComputer chose: ${computer}\nComputer wins!`
      : player === "paper" && computer === "scissors"
      ? `You chose: ${player}\nComputer chose: ${computer}\nComputer wins!`
      : player === "scissors" && computer === "rock"
      ? `You chose: ${player}\nComputer chose: ${computer}\nComputer wins!`
      : `You chose: ${player}\nComputer chose: ${computer}\nYou win!`

  return winner
}

function displayResult(result) {
  alert(result)
}

initGame()
