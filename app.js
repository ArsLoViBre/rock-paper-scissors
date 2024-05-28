function getComputerChoice(){
    let choice
    num = Math.floor(Math.random() * 3)
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