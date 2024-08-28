window.onload = () => {
    function playGame() {

        // let rounds = 5;
        let humanScore = 0
        let computerScore = 0

        const body = document.body;
        const divButtons = document.createElement("div");
        divButtons.setAttribute("style", "border-style: solid; border-color: black; padding: 40px; display: flex; gap: 40px;");
        const divResults = document.createElement("div");
        divResults.setAttribute("style", "border-style: solid; border-color: black; min-height: 300px; display: flex; align-items: center; flex-direction: column; flex-wrap: wrap; justify-content: center; gap: 40px");

        const rockBtn = document.createElement("button");
        rockBtn.setAttribute("id", 0);
        rockBtn.setAttribute("style", "flex: 1 1 0; padding: 10px;");
        rockBtn.innerText = "ROCK";
        const paperBtn = document.createElement("button");
        paperBtn.setAttribute("id", 1);
        paperBtn.setAttribute("style", "flex: 1 1 0;");
        paperBtn.innerText = "PAPER";
        const scissorsBtn = document.createElement("button");
        scissorsBtn.setAttribute("id", 2);
        scissorsBtn.setAttribute("style", "flex: 1 1 0;");
        scissorsBtn.innerText = "SCISSORS";
        let resultsText = document.createElement("p");
        let scoreText = document.createElement("p");

        divButtons.appendChild(rockBtn);
        divButtons.appendChild(paperBtn);
        divButtons.appendChild(scissorsBtn);
        divResults.appendChild(resultsText);
        divResults.appendChild(scoreText);
        body.appendChild(divButtons);
        body.appendChild(divResults);

        const buttons = document.querySelectorAll("button");
        
        function getComputerChoice() {
            let num = Math.floor(Math.random() * 3)
            return num
        }

        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                playRound(parseInt(button.id), getComputerChoice())
            })
        });

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

        // while (rounds > 0) {
        //     playRound(getHumanChoice(), getComputerChoice())
        //     rounds -= 1;
        // }
    }

    playGame();
    // while (prompt("Another round?").toLowerCase() == "yes") {
    //     playGame();
    // }
}