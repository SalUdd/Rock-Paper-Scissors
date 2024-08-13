console.log('Hello');

const list = ["Rock", "Paper", "Scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
const randomNum = Math.floor(Math.random() * list.length);
let computerChoice = list[randomNum];
console.log("Comp:" + computerChoice);
return computerChoice;
}

function getHumanChoice(){
    let humanChoice = prompt("Rock, Paper, or Scissors?")
    console.log("Human:" + humanChoice);
    
    return humanChoice.toLowerCase();
    
}

function playRound(humanChoice, computerChoice) {
    // your code here!
    if (humanChoice === 'rock' && computerChoice === 'Paper'){
         console.log("You lose! Paper beats Rock")
         computerScore++;
    } else if (humanChoice === 'rock' && computerChoice === 'Scissors') {
        console.log("You Win! Rock beats Scissor")
        humanScore++;
    } else if (humanChoice === 'rock' && computerChoice === 'Rock'){
        console.log("It's a DRAW! Rock vs Rock")
    } 
    
    else if (humanChoice === 'scissors' && computerChoice === 'Paper'){
            console.log("You Win! Scissors beats Paper")
            humanScore++;
    } else if (humanChoice ===  'scissors' && computerChoice === 'Scissors') {
            console.log("It's a DRAW! Scissors vs Scissors")
    } else if (humanChoice === 'scissors' && computerChoice === 'Rock'){
            console.log("You lose! Rock beats Scissor")
            computerScore++;
    } 
    
    else if (humanChoice === 'paper' && computerChoice === 'Paper'){
        console.log("It's a DRAW! Paper vs Paper")
    } else if (humanChoice ===  'paper' && computerChoice === 'Scissors') {
        console.log("You lose! Scissors beats Paper")
        computerScore++;
    } else if (humanChoice === 'paper' && computerChoice === 'Rock'){
        console.log("You Win! Paper beats Rock")
        humanScore++;
    } 
    
    
    else 
    {
        console.log("Please choose an appropriate option")
    }
  }
  



function playGame(){
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        
        console.log("Human Score: " + humanScore + "/nComputer Score:" + computerScore);
        
     
    } 
}
  
playGame();

