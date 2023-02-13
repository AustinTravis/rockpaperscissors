function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomItem = choices[Math.floor(Math.random() * choices.length)];
    return randomItem;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let winner = "computer";
    if (playerSelection == "rock") {
        // player selected rock
        if (computerSelection == "rock") {
            winner = "tie"
        } else if (computerSelection == "paper") {
            winner = "computer"
        } else {
            //computer chose scissors
            winner = "player"
        }
    } else if (playerSelection == "paper") {
        // player selected paper
        if (computerSelection == "rock") {
            winner = "player"
        } else if (computerSelection == "paper") {
            winner = "tie"
        } else {
            //computer chose scissors
            winner = "computer"
        }
    } else {
        // player selected scissors
        if (computerSelection == "rock") {
            winner = "computer"
        } else if (computerSelection == "paper") {
            winner = "player"
        } else {
            //computer chose scissors
            winner = "tie"
        }
    }
    return winner;
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Please inut rock, paper, or scissors.");
        console.log(playRound(playerSelection, getComputerChoice()));
    }
}

game();