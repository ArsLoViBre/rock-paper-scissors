function getComputerChoice(){
    let choice
    let num = Math.floor(Math.random() * 3)
    switch (num) {
        case 0:
            choice = 'rock';
            break
        case 1:
            choice = 'paper';
            break
        case 2:
            choice = 'scissors';
            break
        default:
            throw new Error("Something went wrong with getComputerChoice function");
    }
    return choice
}

console.log(getComputerChoice())

function getHumanChoice(){
    let choice
    let num = parseInt(prompt("Make a choice:\n 0: Rock\n 1: Paper\n 2: Scissors"))
    switch (num) {
        case 0:
            choice = 'rock';
            break
        case 1:
            choice = 'paper';
            break
        case 2:
            choice = 'scissors';
            break
        default:
            throw new Error("Something went wrong with getHumanChoice function");
    }
    return choice
}

console.log(getHumanChoice())