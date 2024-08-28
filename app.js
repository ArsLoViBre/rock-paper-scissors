function playGame() {

    let humanScore = 0
    let computerScore = 0

    const body = document.body;
    const divButtons = document.createElement("div");
    divButtons.setAttribute("style", "border-style: solid; border-color: black; padding: 40px; display: flex; gap: 40px;");
    const divResults = document.createElement("div");
    divResults.setAttribute("style", "border-style: solid; border-color: black; min-height: 300px; display: flex; align-items: center; flex-direction: column; flex-wrap: wrap; justify-content: center; font-size: 24px;");

    const rockBtn = document.createElement("button");
    rockBtn.setAttribute("id", 0);
    rockBtn.setAttribute("style", "flex: 1 1 0; padding: 10px; font-size: 24px;");
    rockBtn.innerText = "ROCK";
    const paperBtn = document.createElement("button");
    paperBtn.setAttribute("id", 1);
    paperBtn.setAttribute("style", "flex: 1 1 0; font-size: 24px;");
    paperBtn.innerText = "PAPER";
    const scissorsBtn = document.createElement("button");
    scissorsBtn.setAttribute("id", 2);
    scissorsBtn.setAttribute("style", "flex: 1 1 0; font-size: 24px;");
    scissorsBtn.innerText = "SCISSORS";
    let resultsText = document.createElement("p");
    let scoreText = document.createElement("p");

    divButtons.append(rockBtn, paperBtn, scissorsBtn);
    divResults.append(resultsText, scoreText);
    body.append(divButtons,divResults);

    const buttons = document.querySelectorAll("button");
    
    function getComputerChoice() {
        let num = Math.floor(Math.random() * 3)
        return num
    }

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            playRound(parseInt(button.id), getComputerChoice())
        })
    })

    function checkWinner() {
        if (humanScore === 5) {
            endGame("Human wins!");
        } else if (computerScore === 5) {
            endGame("Computer wins!");
        }
    }

    function endGame(message) {
        resultsText.textContent = message;
        // Disable all buttons
        buttons.forEach((button) => {
            button.disabled = true;
        });

        setTimeout(() => {
            if (confirm(`Game over!\n${message}\nDo you want to start a new game?`)) {
                startNewGame();
            }
        }, 1);
    }

    function startNewGame() {
        humanScore = 0;
        computerScore = 0;
        resultsText.textContent = "";
        scoreText.textContent = "Human 0 - 0 Computer";

        // Re-enable all buttons
        buttons.forEach((button) => {
            button.disabled = false;
        });
    }

    function counterJudge(msg) {
        if (msg == "h") {
            humanScore += 1
        }
        else if (msg == "c") {
            computerScore += 1
        }
        else {
            humanScore = 0
            computerScore = 0
        }
        checkWinner();
    }

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            resultsText.textContent = "Draw";
        }
        else if (humanChoice == 0) {
            if (humanChoice + 1 == computerChoice) {
                resultsText.textContent = "You lost. Paper cover rock.";
                counterJudge("c")
            }
            else if (humanChoice + 2 == computerChoice) {
                resultsText.textContent = "You win. Rock dulls scissors.";
                counterJudge("h")
            }
        }
        else if (humanChoice == 1) {
            if (humanChoice - 1 == computerChoice) {
                resultsText.textContent = "You win. Paper cover rock.";
                counterJudge("h")
            }
            else if (humanChoice + 1 == computerChoice) {
                resultsText.textContent = "You lost. Scissors cut paper.";
                counterJudge("c")
            }
        }
        else if (humanChoice == 2) {
            if (humanChoice - 1 == computerChoice) {
                resultsText.textContent = "You win. Scissors cut paper.";
                counterJudge("h")
            }
            else if (humanChoice - 2 == computerChoice) {
                resultsText.textContent = "You lost. Rock dulls scissors.";
                counterJudge("c")
            }
        }
        scoreText.textContent = `Human ${humanScore} - ${computerScore} Computer`;
    }
}

window.onload = () => {
    playGame();
}