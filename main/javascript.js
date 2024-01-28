
console.log("Hello World");
function game(){
    for (i = 1 ; i <= 5 ; i++) {
        let playerSelection = prompt("Enter rock, paper, scissors").toLowerCase()
        let computerSelection = getComputerSelection();
        console.log("You chose:", playerSelection)
        console.log("Computer chose:", computerSelection)
        console.log(playRound(playerSelection, computerSelection))
    }
}
function getComputerSelection(){
    computerSelection = Math.floor(Math.random() * 3) + 1;
    if (computerSelection == 1)
        return "rock"   
    if (computerSelection == 2)
        return "paper"
    if (computerSelection == 3)
        return "scissors"
}
function playRound(playerSelection,computerSelection){
    if (playerSelection=="rock" && computerSelection=="scissors")
            console.log("You Win!")
    if (playerSelection=="rock" && computerSelection=="rock")
            console.log("You Tied!")
    if (playerSelection=="rock" && computerSelection=="paper")
            console.log("You Lose!")
    if (playerSelection=="paper" && computerSelection=="scissors")
            console.log("You Lose!")
    if (playerSelection=="paper" && computerSelection=="rock")
            console.log("You Win!")
    if (playerSelection=="paper" && computerSelection=="paper")
            console.log("You Tied!")
    if (playerSelection=="scissors" && computerSelection=="scissors")
            console.log("You Tied!")
    if (playerSelection=="scissors" && computerSelection=="paper")
            console.log("You Win!")
    if (playerSelection=="scissors" && computerSelection=="rock")
            console.log("You Lose!")
}
console.log(game())