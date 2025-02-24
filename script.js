function getSystemChoice () {
    let choice = Math.random() * 10;
    choice = choice.toFixed(0);
    if (choice === "1" || choice === "2" || choice === "3") return ("rock");
    else if (choice === "4" || choice === "5" || choice === "6") return ("paper");
    else return ("scissors");
}

function getHumanChoice () {
    let choice = prompt("Choose between rock, paper or scissors: ");
    return `${choice}`;
}

function playGame () {

    function playRound (hChoice, cChoice) { // h -> human, c -> Computer.
        console.log(`Human: ${hChoice}.`);
        console.log(`CPU: ${cChoice}`);
        if (hChoice === cChoice) {
            console.log("Draw!");
            return ("draw");
        } else if (hChoice === "paper") {
            if (cChoice === "scissors") {
                console.log("You lost this round! Scissors beat paper.");
                return undefined;
            } else if (cChoice === "rock") {
                console.log("You won this round! Paper beats rock.");
                return 1;
            }
        } else if (hChoice === "rock") {
            if (cChoice === "scissors") {
                console.log("You won this round! Rock beats scissors.");
                return 1;
            } else if (cChoice === "paper") {
                console.log("You lost this round! Paper beats rock.");
                return undefined;
            }
        } else if (hChoice === "scissors") {
            if (cChoice === "paper") {
                console.log("You won this round! Scissors beats paper.");
                return 1;
            } else if (cChoice === "rock") {
                console.log("You lost this round! Rock beats scissors.");
                return undefined;
            }
        }
    
    }

    let humanScore = 0;
    let systemScore = 0;
    let i = 1;

    while (i <= 5) {
        (playRound(getHumanChoice(), getSystemChoice())) ? humanScore = humanScore + 1 : systemScore = systemScore + 1;
        i = i + 1;
    }
    console.log(`Human score: ${humanScore}`); // additional code.
    console.log(`Computer score: ${systemScore}`); // additional code.
    (humanScore > systemScore) ? console.log("You won the game!") : console.log("You lost the game!"); // additional code
}