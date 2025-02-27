function getSystemChoice () {
    let choice = Math.random() * 10;
    choice = choice.toFixed(0);
    if (choice === "1" || choice === "2" || choice === "3") return ("rock");
    else if (choice === "4" || choice === "5" || choice === "6") return ("paper");
    else return ("scissors");
}

function playRound (hChoice, cChoice) { // h -> human, c -> Computer.
    const log = document.querySelector(".log");
    const round = document.createElement("p");
    round.setAttribute("class", "log-text")
    round.textContent = `User: ${hChoice} | System: ${cChoice} / `;
    if (hChoice === cChoice) {
        round.textContent += "Draw!";
    } else if (hChoice === "paper") {
        if (cChoice === "scissors") {
            round.textContent += "You lost this round! Scissors beat paper.";
            systemScore++;
            } else if (cChoice === "rock") {
            round.textContent += "You won this round! Paper beats rock.";
            userScore++;
        }
    } else if (hChoice === "rock") {
        if (cChoice === "scissors") {
            round.textContent += "You won this round! Rock beats scissors.";
            userScore++
        } else if (cChoice === "paper") {
            round.textContent += "You lost this round! Paper beats rock.";
            systemScore++;
        }
    } else if (hChoice === "scissors") {
        if (cChoice === "paper") {
            round.textContent += "You won this round! Scissors beats paper.";
            userScore++;
        } else if (cChoice === "rock") {
            round.textContent += "You lost this round! Rock beats scissors.";
            systemScore++;
        }
    }
    cleanLog();
    log.appendChild(round);
}

function firstCheck () {
    if (userScore === 5 || systemScore === 5) {
        log.textContent = "";
        userScore = 0;
        systemScore = 0;
        // result.textContent = `Final score: User ${userScore} | System ${systemScore}. `;
    }
}

function lastCheck() {
    if (userScore === 5) {
        result.textContent = "You win!";
        log.appendChild(result);
    } else if (systemScore === 5) {
        result.textContent = "The system wins!";
        log.appendChild(result);
    }
}

function cleanLog () {
    if (Array.from(log.childNodes).length > 8) {
        log.firstChild.remove();
    }
}


const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const log = document.querySelector(".log");
const result = document.createElement("p");
let userScore = 0;
let systemScore = 0;

result.setAttribute("class", "log-text");
// result.textContent = `Final score: User ${userScore} | System ${systemScore}. `;

rock.addEventListener("click", () => {
    firstCheck();
    playRound("rock", getSystemChoice());
    lastCheck();
});

paper.addEventListener("click", () => {
    firstCheck();
    playRound("paper", getSystemChoice());
    lastCheck();
});

scissors.addEventListener("click", () => {
    firstCheck();
    playRound("scissors", getSystemChoice());
    lastCheck();
});