
console.log("Hello World");

let playerSelection = prompt("Enter Rock, Paper or Scissors");
    if ((playerSelection.toLowerCase()) == "rock")
        console.log("You chose: Rock")
    if ((playerSelection.toLowerCase()) == "paper")
        console.log("You chose: Paper")
    if ((playerSelection.toLowerCase()) == "scissors")
        console.log("You chose: Scissors")
    else console.log("INVALID")

computerSelection = 0
function getComputerChoice(computerSelection){
    computerSelection = Math.floor(Math.random() * 3) + 1;
        if (computerSelection == 1)
            return "Computer chose: Rock"
        else if (computerSelection == 2)
            return "Computer chose: Paper"
        else if (computerSelection == 3)
            return "Computer chose: Scissors"
}
console.log(getComputerChoice(computerSelection)) 
function playRound(playerSelection,computerSelection){
    if (playerSelection=="rock" && computerSelection=="scissors")
        console.log("You Win!")
    if (playerSelection=="rock" && computerSelection=="scissors")
        console.log("You Win!")
    if (playerSelection=="rock" && computerSelection=="scissors")
        console.log("You Win!")
    if (playerSelection=="rock" && computerSelection=="scissors")
        console.log("You Win!")
    if (playerSelection=="rock" && computerSelection=="scissors")
        console.log("You Win!")
    if (playerSelection=="rock" && computerSelection=="scissors")
        console.log("You Win!")
    if (playerSelection=="rock" && computerSelection=="scissors")
        console.log("You Win!")
    if (playerSelection=="rock" && computerSelection=="scissors")
        console.log("You Win!")
    if (playerSelection=="rock" && computerSelection=="scissors")
        console.log("You Win!")
        
}
/*
}
function playRound(playerSelection, computerSelection) {
}
*/

