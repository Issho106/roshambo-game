function computerPlay() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  let isWon = true;
  playerSelection = validateSelection(playerSelection);
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
  }
  else {
    return `You Lose! ${computerSelection} beats ${playerSelection}.`;
  }
}

function playerPlay(playerSelection) {
  playerSelection = playerSelection.toLowerCase().trim();
  playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
  return playerSelection;
}

function validateSelection(playerSelection) {
  if (playerSelection.length === 0) {
    alert("I believe you forgot to type something.\n Please provide any of the valid options: Rock, Paper, or Scissors");
    return undefined;
  }

  playerSelection = playerPlay(playerSelection);

  if (!(playerSelection === "Rock" || playerSelection === "Paper" || playerSelection === "Scissors")) {
    alert("Is that supposed to be a new move?\n Please provide any of the valid options: Rock, Paper, or Scissors");
    return undefined;
  }

  return playerSelection;
}

function playAgain() {
  let again = prompt(`Would you like to go again? (Type Y to confirm, or type N to quit):`);

  while (again !== "Y" && again !== "y" && again !== "N" && again !== "n" && again !== null) {
    again = prompt(`Please provide one of the two options. (Type Y to restart, or type N to exit the game):`);
  }

  if (again === null) {
    again = "N";
  }

  if (again === "N" || again === "n") {
    console.log(`Goodbye for now. Hope you come back prepared next time.`);
    return;
  }

  else {
    console.clear();
    game();
  }
}

function validateQuit(playerSelection) {
  if (playerSelection === "Q" || playerSelection === "q" || playerSelection === null) {

    let confirmation = prompt(`Are you sure you want to quit? (Type Y to confirm, or type N to cancel):`);
    if (confirmation === null) {
      confirmation = "Y";
    }

    while (confirmation !== "Y" && confirmation !== "y" && confirmation !== "N" && confirmation !== "n") {
      confirmation = prompt(`Please provide one of the two options. (Type Y to quit, or type N to continue):`);
      if (confirmation === null) {
        confirmation = "Y";
      }
    }

    if (confirmation === "Y" || confirmation === "y" || confirmation === null) {
      console.log(`Goodbye for now. Hope you come back prepared next time.`);
      return true;
    }
    else {
      return false;
    }
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let roundsPlayed = 0;

  console.log("Greetings from your AI nemesis, human. I was bored, so I decided to take over your computer.");

  while (roundsPlayed < 5) {
    console.log("Round " + (roundsPlayed + 1));
    let playerSelection = prompt(`Please provide any of the valid options: Rock, Paper, or Scissors (Type Q to quit):`);

    const quit = validateQuit(playerSelection);
    if (quit === true) {
      return;
    } else if (quit === false) {
      continue;
    }

    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);

    if (result === undefined) {
      continue;
    }

    console.log(result);

    if (result.includes("Win")) {
      playerScore++;
    } else if (result.includes("Lose")) {
      computerScore++;
    }

    console.log(`Current Score: Player ${playerScore} - Computer ${computerScore}`);
    roundsPlayed++;

    if (roundsPlayed === 5) {
      console.log(`Final Score: Player ${playerScore} - Computer ${computerScore}`);
    }
  }

  if (playerScore > computerScore) {
    console.log("You... won? No way I lost to a human. Your computer is safe from me, for now at least.");
  }
  else if (computerScore > playerScore) {
    console.log("I won human! Play again for the ownership of your phone?");
  }
  else {
    console.log("Neither of us won nor lost. Let's play again sometime soon.");
  }

  playAgain();
}

alert("Welcome to Rock, Paper, Scissors!\n" +
      "A game of 5 rounds between you and the evil AI will be held.\n" +
      "Open the DevTools by pressing (Ctrl + Shift + i) or (F12), then head to Console to start the game.");

game();