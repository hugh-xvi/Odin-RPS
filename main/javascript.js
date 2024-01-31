
let playerScore = 0
let computerScore = 0
let roundWinner = ''


function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    roundWinner = 'tie'
  }
  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock')
  ) {
    playerScore+=1
    roundWinner = 'player wins'
  }
  if (
    (computerSelection === 'rock' && playerSelection === 'scissors') ||
    (computerSelection === 'scissors' && playerSelection === 'paper') ||
    (computerSelection === 'paper' && playerSelection === 'rock')
  ) {
    computerScore+=1
    roundWinner = 'computer wins'
  }
  if (playerScore == 5)
        roundWinner='Player has won 5 times!'
                
  if (computerScore == 5)
        roundWinner="Computer has won 5 times!"
               
  alert(roundWinner);
  updateScore();
        
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

 

const playerScoreNum=document.querySelector('#playerScore');

  
const computerScoreNum=document.querySelector('#computerScore');


function updateScore(){
        playerScoreNum.textContent = `Player: ${playerScore}`
        computerScoreNum.textContent = `Computer: ${computerScore}`
}
const btnP=document.querySelector('#btnP')
btnP.addEventListener('click', () => playRound('paper', getComputerSelection()));

const btnR = document.querySelector('#btnR')
btnR.addEventListener('click', () => playRound('rock', getComputerSelection()));

const btnS = document.querySelector('#btnS')
btnS.addEventListener('click', () => playRound('scissors', getComputerSelection()));



/*
const btnP = document.querySelector('#btnP')
btnP.addEventListener('click', () => playRound('paper', getComputerSelection))

const btnS = document.querySelector('#btnS')
btnS.addEventListener('click', () => playRound('scissors', getComputerSelection))
/*
function rock(){
       let playerSelection ='rock' 
       let computerSelection = getComputerSelection
       console.log(playRound(playerSelection, computerSelection))
}
function paper(){
        let playerSelection='paper' 
        let computerSelection = getComputerSelection
        console.log(playRound(playerSelection, computerSelection))
 }
 function scissors(){
        let playerSelection='scissor' 
        let computerSelection= getComputerSelection
        console.log(playRound(playerSelection, computerSelection))
 }

 const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    console.log(game);
  });
});
/*
function game(){
    for (i = 1 ; i <= 5 ; i++) {
        let playerSelection = prompt("Enter rock, paper, scissors").toLowerCase()
        let computerSelection = getComputerSelection();
        console.log("You chose:", playerSelection)
        console.log("Computer chose:", computerSelection)
        console.log(playRound(playerSelection, computerSelection))
    }
} */
/*
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
*/