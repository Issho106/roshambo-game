function computerPlay() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function playerPlay() {
  let playerSelection = prompt(`Please provide any of the valid options: Rock, Paper, or Scissors (Type Q to quit):`);
  
  if(playerSelection === null || playerSelection.toUpperCase().trim() === 'Q') {
    const quit =  validateQuit();
    return quit ? "QUIT" : undefined;
  }

  playerSelection = playerSelection.toLowerCase().trim();
  playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

  if (playerSelection === "") {
    alert("I believe you forgot to write something?\nPlease provide any of the valid options: Rock, Paper, or Scissors");
    return undefined;
  }

  if (!(playerSelection === "Rock" || playerSelection === "Paper" || playerSelection === "Scissors")) {
    alert("Is that supposed to be a new move?\nPlease provide any of the valid options: Rock, Paper, or Scissors");
    return undefined;
  }

  return playerSelection;
}

function validateQuit(playerSelection) {
    let confirmation = prompt(`Are you sure you want to quit? (Type Y to confirm, or type N to cancel):`);
    if (confirmation === null) { confirmation = "Y"; }

    while (confirmation.toUpperCase().trim() !== "Y" && confirmation.toUpperCase().trim() !== "N") {
      confirmation = prompt(`Please provide one of the two options. (Type Y to quit, or type N to continue):`);
      if (confirmation === null) { confirmation = "Y"; }
    }

    if (confirmation.toUpperCase().trim() === "Y") {
      console.log(`Goodbye for now. Hope you come back prepared next time.`);
      return true;
    }
    else { return false; }
}

function playRound(playerSelection, computerSelection) {
  let isWon = true;

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

function playAgain() {
  let again = prompt(`Would you like to go again? (Type Y to confirm, or type N to quit):`);

  while (again !== null && again.toUpperCase().trim() !== "Y" && again.toUpperCase().trim() !== "N") {
    again = prompt(`Please provide one of the two options. (Type Y to restart, or type N to exit the game):`);
  }

  if (again === null) { again = "N"; }

  if (again.toUpperCase().trim() === "N") {
    console.log(`Goodbye for now. Hope you come back prepared next time.`);
    return;
  }

  else {
    console.clear();
    game();
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let roundsPlayed = 0;

  console.log("Greetings from your AI nemesis, human. I was bored, so I decided to take over your computer.");

  while (roundsPlayed < 5) {
    const playerSelection = playerPlay();

    if (playerSelection === "QUIT") { return; }
    if (playerSelection === undefined) { continue; }
    
    console.log("Round " + (roundsPlayed + 1));
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);

    if (result === undefined) { continue; }
    console.log(result);

    if (result.includes("Win")) { playerScore++; }
    else if (result.includes("Lose")) { computerScore++; }

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
      "Open the DevTools by pressing (Ctrl + Shift + i) or (F12), then head to Console to start the game.\n" +
      "Note: If the Console doesn't show any messages, please quit the game and refresh the page.");

game();