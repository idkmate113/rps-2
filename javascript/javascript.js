const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const restart = document.querySelector(".restart");
const playerComputer = document.querySelector(".player-computer");
const questionMark = document.querySelector(".question-mark");
const mainText = document.querySelector(".main-text");

function disableBtn() {
  rock.disabled = true;
  paper.disabled = true;
  scissors.disabled = true;
}

function getComputerChoice() {
  let randomChoice = Math.ceil(Math.random() * 3);

  if (randomChoice === 1) {
    return "Rock";
  }
  if (randomChoice === 2) {
    return "Paper";
  }
  if (randomChoice === 3) {
    return "Scissors";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanSelection, computerSelection) {
    if (
      (humanSelection === "Rock" && computerSelection === "Scissors") ||
      (humanSelection === "Paper" && computerSelection === "Rock") ||
      (humanSelection === "Scissors" && computerSelection === "Paper")
    ) {
      mainText.innerText = `You Win The Round!`;
      questionMark.innerText = `You picked:  ${humanSelection} | Computer picked:  ${computerSelection}`;
      playerComputer.innerText = `Player Score: ${++humanScore} Computer Score: ${computerScore}`;
    } else if (
      (computerSelection === "Rock" && humanSelection === "Scissors") ||
      (computerSelection === "Paper" && humanSelection === "Rock") ||
      (computerSelection === "Scissors" && humanSelection === "Paper")
    ) {
      mainText.innerText = `You Lost The Round!`;
      questionMark.innerText = `You picked: ${humanSelection} | Computer picked: ${computerSelection}`;
      playerComputer.innerText = `Player Score: ${humanScore} Computer Score: ${++computerScore}`;
    } else {
      mainText.innerText = `It's a Draw!`;
      questionMark.innerText = `You picked: ${humanSelection} | Computer picked:  ${computerSelection}`;
      playerComputer.innerText = `Player Score: ${++humanScore} Computer Score: ${++computerScore}`;
    }
    if (humanScore === 5 && humanScore > computerScore) {
      disableBtn();
      mainText.innerText(`You Won The Game ${computerScore}-${humanScore}`);
    } else if (computerScore === 5 && computerScore > humanScore) {
      disableBtn();
      mainText.innerText(`You Lost The Game ${computerScore}-${humanScore}`);
    } else if (computerScore === 5 && humanScore === 5) {
      disableBtn();
      mainText.innerText(
        `It's a Draw. Nobody Wins The Game! ${computerScore}-${humanScore}`
      );
    }
  }

  rock.addEventListener("click", () => {
    playRound("Rock", getComputerChoice());
  });

  paper.addEventListener("click", () => {
    playRound("Paper", getComputerChoice());
  });

  scissors.addEventListener("click", () => {
    playRound("Scissors", getComputerChoice());
  });

  restart.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;

    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;

    console.clear();
  });
}

playGame();
