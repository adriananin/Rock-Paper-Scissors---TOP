function getComputerChoice(){
    const randomNumber = (Math.floor(Math.random() * 3));
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
  console.log(getComputerChoice());





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
  
 
  let playerSelection= prompt("Choose your weapon");

if (sign.toLowerCase() === "scorpio") {
  alert("Wow! I'm a Scorpio too!");
}
  playerSelection = playerSelection.toLowerCase();
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));


//   function game(){

//   }