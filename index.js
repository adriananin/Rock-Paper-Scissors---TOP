let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;
let round = 0;
let buttons = document.querySelectorAll("button");
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (this.id !== "reset") {
      playerChoice = this.id;
      playGame();
    } else {
      resetGame();
    }
  });
});

function playGame() {
  if (round < 5) {
    computerChoice = getComputerChoice();
    let result = determineWinner(playerChoice, computerChoice);
    updateScore(result);
    displayResult(
      `R${round + 1}  
      You: ${playerScore} vs Computer: ${computerScore}`
    );
    round++;
  } else {
    displayResult(
      `The game is over! Score: Player: ${playerScore} vs Computer: ${computerScore}`
    );
    checkTie();
  }
}

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else if (randomNumber === 2) {
    return "scissors";
  }
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}

function resetGame() {
  playerChoice = null;
  computerChoice = null;
  playerScore = 0;
  computerScore = 0;
  round = 0;
  displayResult("The game has been reset.");
}

function updateScore(result) {
  if (result === "You win!") {
    playerScore++;
  } else if (result === "You lose!") {
    computerScore++;
  }
}

function checkTie() {
  if (playerScore === computerScore) {
    displayResult("The game ended in a tie!");
  } else if (playerScore > computerScore) {
    displayResult("You won the game!");
  } else {
    displayResult("You lost the game!");
  }
}

function displayResult(result) {
  document.getElementById("result").innerHTML = result;
}
