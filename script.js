function computerPlay() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  let isWon = true;
  playerSelection = capitalizeInitial(playerSelection);
  if (playerSelection === undefined) {
    return;
  }
  if (playerSelection === computerSelection) {
    return `Draw Game! ${playerSelection} ties with ${computerSelection}.`;
  }
  if (
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")
  ) {
    isWon = false;
  }
  if (isWon) {
    return `You Win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}.`;
  }
}

function capitalizeInitial(playerSelection) {
  try {
    if (typeof playerSelection !== "string") {
      throw new TypeError("Please provide a string.");
    }
    if (playerSelection.length === 0) {
      throw new TypeError(
        "Invalid input. Please provide any of the valid options: Rock, Paper, or Scissors",
      );
    }
    playerSelection = playerSelection.toLowerCase().trim();
    playerSelection =
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    if (
      !(
        playerSelection === "Rock" ||
        playerSelection === "Paper" ||
        playerSelection === "Scissors"
      )
    ) {
      throw new TypeError(
        "Please provide one of any of the valid options: Rock, Paper, or Scissors",
      );
    }
    return playerSelection;
  } catch (error) {
    console.error("Error: ", error.message);
    return undefined;
  }
}

const playerSelection = " Scissors ";
const computerSelection = computerPlay();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let roundsPlayed = 0;

  while (roundsPlayed < 5) {
    let playerSelection = prompt("Choose Rock, Paper or Scissors:");

    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);

    if (result === undefined) {
      alert("X Invalid input. Try again.");
      continue;
    }

    console.log(result);

    if (result.includes("Win")) {
      playerScore++;
    } else if (result.includes("Lose")) {
      computerScore++;
    }

    roundsPlayed++;
  }

  console.log(`Final Score: Player ${playerScore} - Computer ${computerScore}`);

  if (playerScore > computerScore) {
    console.log("You win!");
  } else if (computerScore > playerScore) {
    console.log("Computer wins!");
  } else {
    console.log("It's a tie!");
  }
}

game();
