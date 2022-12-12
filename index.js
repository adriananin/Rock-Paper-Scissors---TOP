function getComputerChoice(){
    const randomNumber = (Math.floor(Math.random() * 3));
    console.log(randomNumber);
    if (randomNumber === 0){
      return 'rock';
    }
    else if (randomNumber === 1){
      return 'paper';
    }
    else if (randomNumber === 2){
    return 'scissors';
    }
}


function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection){
        return 'It\'s a tie !';
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper'){
        return 'You lose :( paper covers rock!';
    }
    else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        return 'You win :) rock crushes scissors!';
    }
    else if(playerSelection === 'paper' && computerSelection === 'rock'){
        return 'You win :) paper covers rock!';
    }
    else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        return 'You lose :( scissors cuts paper!';
    }
    else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        return 'You lose :(  rock crushes scissors!';
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        return 'You win :) scissors cuts paper!'
    }
}


  function game(){
    let playerSelection = prompt("rock, paper, or scissors?");  
    playerSelection = playerSelection.toLowerCase();

     let computerSelection = getComputerChoice();
    
    // Play rounds until the player wins or loses
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < 5 && computerScore < 5) {
      let result = playRound(playerSelection, computerSelection);
      console.log(result);
  
      // Update the score
      if (result.startsWith("You win")) {
        playerScore++;
      } else if (result.startsWith("You lose")) {
        computerScore++;
      }
  
      // Prompt the player to make another selection
      playerSelection = prompt("rock, paper, or scissors?");
      playerSelection = playerSelection.toLowerCase();
    }
  
    // Display the final score and declare a winner
    console.log("Final score: You " + playerScore + " - " + computerScore + " Computer");
    if (playerScore > computerScore) {
      console.log("You win the game :)");
    } else {
      console.log("You lose the game :(");
    }
  }

  game();