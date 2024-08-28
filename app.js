window.onload = () => {
    function playGame() {

        // let rounds = 5;
        let humanScore = 0
        let computerScore = 0

        const body = document.body;
        const divButtons = document.createElement("div");
        divButtons.setAttribute("style", "border-style: solid; border-color: black; padding: 40px; display: flex; gap: 40px;");
        const divResults = document.createElement("div");
        divResults.setAttribute("style", "border-style: solid; border-color: black; min-height: 300px;");

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

        divButtons.appendChild(rockBtn);
        divButtons.appendChild(paperBtn);
        divButtons.appendChild(scissorsBtn);
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

        // function getHumanChoice() {
        //     let num = parseInt(prompt("Make a choice:\n 0: Rock\n 1: Paper\n 2: Scissors"))
        //     if (0 <= num & num <= 3) {
        //         return num
        //     }
        //     else {
        //         window.alert("You made a wrong choice. Time and space collapsed.")
        //         throw new Error("You made a wrong choice. Time and space collapsed.")
        //     }
        // }

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
                console.log("Draw")
            }
            else if (humanChoice == 0) {
                if (humanChoice + 1 == computerChoice) {
                    console.log("You lost. Paper cover rock.")
                    counterJudge("c")
                }
                else if (humanChoice + 2 == computerChoice) {
                    console.log("You win. Rock dulls scissors.")
                    counterJudge("h")
                }
            }
            else if (humanChoice == 1) {
                if (humanChoice - 1 == computerChoice) {
                    console.log("You win. Paper cover rock.")
                    counterJudge("h")
                }
                else if (humanChoice + 1 == computerChoice) {
                    console.log("You lost. Scissors cut paper.")
                    counterJudge("c")
                }
            }
            else if (humanChoice == 2) {
                if (humanChoice - 1 == computerChoice) {
                    console.log("You win. Scissors cut paper.")
                    counterJudge("h")
                }
                else if (humanChoice - 2 == computerChoice) {
                    console.log("You lsot. Rock dulls scissors.")
                    counterJudge("c")
                }
            }
            console.log(`Human ${humanScore} - ${computerScore} Computer`)
        }

        // playRound(getHumanChoice(), getComputerChoice())

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