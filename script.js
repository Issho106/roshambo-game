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
  if (typeof playerSelection !== "string") {
    console.log(
      "Is that supposed to be a new move? Please provide any of the valid options: Rock, Paper, or Scissors");
    return undefined;
  }
  if (playerSelection.length === 0) {
    console.log(
      "I think you forgot to play. Please provide any of the valid options: Rock, Paper, or Scissors");
    return undefined;
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
    console.log(
      "Is that supposed to be a new move? Please provide any of the valid options: Rock, Paper, or Scissors");
    return undefined;
  }
  return playerSelection;
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let roundsPlayed = 0;

  while (roundsPlayed < 5) {
    let playerSelection = prompt(`Please provide any of the valid options: Rock, Paper, or Scissors (Type Q to quit):`);
    if (playerSelection === null) {
      playerSelection = "";
    }
    if (playerSelection === "Q" || playerSelection === "q") {
      let confirmation = prompt(
        `Are you sure you want to quit? (Type Y to confirm, or type N to cancel):`);
      while (
        confirmation !== "Y" &&
        confirmation !== "y" &&
        confirmation !== "N" &&
        confirmation !== "n"
      ) {
        confirmation = prompt(
          `Invalid input. Please type 'y' to quit or 'n' to continue:`);
      }
      if (confirmation === "Y" || confirmation === "y") {
        console.log(`Goodbye for now. Hope you come back prepared next time.`);
        return;
      } else {
        continue;
      }
    }
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);

    if (result === undefined) {
      alert("Invalid input. Please try again human.");
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
    console.log(
      "You... won? No way I lost to a human. Your computer is safe from me, for now at least.");
  } else if (computerScore > playerScore) {
    console.log("I won human! Play again for the ownership of your phone?");
  } else {
    console.log("Neither of us won nor lost. Let's play again sometime soon.");
  }
  let again = prompt(
    `Would you like to go again? (Type Y to confirm, or type N to cancel):`);
  while (again !== "Y" && again !== "y" && again !== "N" && again !== "n") {
    again = prompt(
      `Invalid input. Please enter 'y' to continue or 'n' to quit:`);
  }
  if (again === "N" || again === "n") {
    console.log(`Goodbye for now. Hope you come back prepared next time.`);
    return;
  } else {
    console.clear();
    console.log("Greetings from your AI nemesis, human. I was bored, so I decided to take over your computer.");
    game();
  }
}

console.log("Greetings from your AI nemesis, human. I was bored, so I decided to take over your computer.");
game();