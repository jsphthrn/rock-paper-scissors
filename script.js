function getComputerChoice () {
    let choice = Math.random() * 10
    choice = choice.toFixed(0);
    if (choice === "1" || choice === "2" || choice === "3") return ("rock");
    else if (choice === "4" || choice === "5" || choice === "6") return ("paper");
    else return ("scissors");
}

function getHumanChoice () {
    let choice = prompt("Choose between rock, paper or scissors: ");
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log("Draw!")
        return 0;
    } else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            computerScore = computerScore + 1;
            console.log("You lost this round! Scissors beat paper.");
        } else if (computerChoice === "rock") {
            humanScore = humanScore + 1;
            console.log("You won this round! Paper beats rock.");
        }
    } else if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            humanScore = humanScore + 1;
            console.log("You won this round! Rock beats scissors.");
        } else if (computerChoice === "paper") {
            computerScore = computerScore + 1;
            console.log("You lost this round! Paper beats rock.");

        }
    }

}