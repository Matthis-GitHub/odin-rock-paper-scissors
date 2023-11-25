const numberOfRounds = 5;
let roundsWonPlayer = 0;
let roundsWonComputer = 0;
game();

function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  let choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

function getRoundOutcome(playerSelection, computerSelection) {
  let result = "";
  if (playerSelection === "Rock" && computerSelection === "Scissors") {
    result = "You Win! Rock beats Scissors";
    roundsWonPlayer++;
  }
  if (playerSelection === "Rock" && computerSelection === "Paper") {
    result = "You Lose! Paper beats Rock";
    roundsWonComputer++;
  }
  if (playerSelection === "Paper" && computerSelection === "Rock") {
    result = "You Win! Paper beats Rock";
    roundsWonPlayer++;
  }
  if (playerSelection === "Paper" && computerSelection === "Scissors") {
    result = "You Lose! Scissors beats Paper";
    roundsWonComputer++;
  }
  if (playerSelection === "Scissors" && computerSelection === "Paper") {
    result = "You Win! Scissors beats Paper";
    roundsWonPlayer++;
  }
  if (playerSelection === "Scissors" && computerSelection === "Rock") {
    result = "You Lose! Rock beats Scissors";
    roundsWonComputer++;
  }
  return result;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = capitalize(playerSelection);

  let result = "";
  if (playerSelection === computerSelection) {
    result = "It's a tie! Go again";
  } else {
    result = getRoundOutcome(playerSelection, computerSelection);
  }
  return result;
}

function game() {
  roundsWonPlayer = 0;
  roundsWonComputer = 0;

  for (let index = 0; index < numberOfRounds; index++) {
    const playerSelection = prompt("Choose Rock, Paper or Scissors");
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
  console.log(`
  The player has won ${roundsWonPlayer} rounds
  The computer has won ${roundsWonComputer} rounds`);
}
