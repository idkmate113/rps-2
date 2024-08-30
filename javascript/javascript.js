function getComputerChoice() {
  let randomChoice = Math.ceil(Math.random() * 3);

  if (randomChoice === 1) {
    return "rock";
  }
  if (randomChoice === 2) {
    return "paper";
  }
  if (randomChoice === 3) {
    return "scissors";
  }
}

function getHumanChoice() {
  let userChoice = prompt("Please choose between rock, paper, scissors ");
  userChoice = userChoice.toLowerCase();
  if (userChoice === "rock") {
    return "rock";
  }
  if (userChoice === "paper") {
    return "paper";
  }
  if (userChoice === "scissors") {
    return "scissors";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound() {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    if (humanSelection === "rock" && computerSelection === "scissors") {
      console.log(`You Win! Rock beats Scissors!`);
      console.log(
        `Player Score: ${++humanScore} - Computer Score: ${computerScore}`
      );
    } else if (humanSelection === "paper" && computerSelection === "rock") {
      console.log(`You Win! Paper beats Rock!`);
      console.log(
        `Player Score: ${++humanScore} - Computer Score: ${computerScore}`
      );
    } else if (humanSelection === "scissors" && computerSelection === "paper") {
      console.log(`You Win! Scissors beat Paper!`);
      console.log(
        `Player Score: ${++humanScore} - Computer Score: ${computerScore}`
      );
    } else if (computerSelection === "rock" && humanSelection === "scissors") {
      console.log(`You Lose! Rock beats Scissors!`);
      console.log(
        `Computer Score: ${++computerScore} - Player Score: ${humanScore}`
      );
    } else if (computerSelection === "paper" && humanSelection === "rock") {
      console.log(`You Lose! Paper beats Rock!`);
      console.log(
        ` Computer Score: ${++computerScore} - Player Score: ${humanScore}`
      );
    } else if (computerSelection === "scissors" && humanSelection === "paper") {
      console.log(`You Lose! Scissors beat Paper!`);
      console.log(
        `Computer Score: ${++computerScore} - Player Score: ${humanScore}`
      );
    } else if (computerSelection === humanSelection) {
      console.log(`It's a draw! You both get a point!`);
      console.log(
        `Player Score: ${++humanScore} - Computer Score ${++computerScore}`
      );
    } else {
      console.log("Wrong Input");
    }
    if (humanScore > computerScore) {
      console.log(`You Won! ${humanScore}-${computerScore}`);
    } else if (computerScore > humanScore) {
      console.log(`You Lost! ${computerScore}-${humanScore}`);
    } else {
      console.log(`It's a Tie! ${humanScore}-${computerScore}`);
    }
  }
  playRound();
  playRound();
  playRound();
  playRound();
  playRound();
}
playGame();
