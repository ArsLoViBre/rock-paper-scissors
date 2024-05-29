let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3)
    return num
}

function getHumanChoice() {
    let num = parseInt(prompt("Make a choice:\n 0: Rock\n 1: Paper\n 2: Scissors"))
    return num
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


const computerSelection = getComputerChoice();

console.log("Comp choose: " + computerSelection);

const humanSelection = getHumanChoice();

playRound(humanSelection, computerSelection)