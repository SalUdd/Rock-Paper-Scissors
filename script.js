const list = ["Rock", "Paper", "Scissors"];
let humanScore = 0;
let computerScore = 0;
const humanScoreElement = document.querySelector(".humanScore");
const computerScoreElement = document.querySelector(".compScore");

function getComputerChoice(){
    const randomNum = Math.floor(Math.random() * list.length);
    let computerChoice = list[randomNum];
    console.log("Comp:" + computerChoice);
    return computerChoice;
    }
    
  //  function getHumanChoice(){
  //      let humanChoice = prompt("Rock, Paper, or Scissors?")
  //      console.log("Human:" + humanChoice);
        
  //      return humanChoice;
        
  //  }


    document.getElementById("rock").addEventListener("click",function() {
        playRound('rock', getComputerChoice());
    })

    document.getElementById("paper").addEventListener("click",function() {
        playRound('paper', getComputerChoice());
    })

    document.getElementById("scissors").addEventListener("click",function() {
        playRound('scissors', getComputerChoice());
    })

    document.getElementById("resetGame").addEventListener("click",function() {
        humanScore = 0;
        computerScore = 0;
        roundResult.textContent = "";
        humanScoreElement.textContent = "";
        computerScoreElement.textContent = "";
    })

      
    
    function playRound(humanChoice, computerChoice) {
        // your code here!
        humanChoice = humanChoice.toLowerCase();

        const roundResult = document.getElementById("roundResult");

        if (humanChoice === 'rock' && computerChoice === 'Paper'){
            roundResult.textContent = "You lose! Paper beats Rock";
            console.log("You lose! Paper beats Rock")
             computerScore++;
        } else if (humanChoice === 'rock' && computerChoice === 'Scissors') {
            roundResult.textContent = "You Win! Rock beats Scissor";
            console.log("You Win! Rock beats Scissor")
            humanScore++;
        } else if (humanChoice === 'rock' && computerChoice === 'Rock'){
            roundResult.textContent = "It's a DRAW! Rock vs Rock";
            console.log("It's a DRAW! Rock vs Rock")
        } 
        
        else if (humanChoice === 'scissors' && computerChoice === 'Paper'){
                roundResult.textContent = "You Win! Scissors beats Paper";
                console.log("You Win! Scissors beats Paper")
                humanScore++;
        } else if (humanChoice ===  'scissors' && computerChoice === 'Scissors') {
                roundResult.textContent = "It's a DRAW! Scissors vs Scissors";
                console.log("It's a DRAW! Scissors vs Scissors")
        } else if (humanChoice === 'scissors' && computerChoice === 'Rock'){
            roundResult.textContent = "You lose! Rock beats Scissor";    
            console.log("You lose! Rock beats Scissor")
                computerScore++;
        } 
        
        else if (humanChoice === 'paper' && computerChoice === 'Paper'){
            
            roundResult.textContent = "It's a DRAW! Paper vs Paper";
            console.log("It's a DRAW! Paper vs Paper")
        } else if (humanChoice ===  'paper' && computerChoice === 'Scissors') {
            roundResult.textContent = "You lose! Scissors beats Paper";
            console.log("You lose! Scissors beats Paper")
            computerScore++;
        } else if (humanChoice === 'paper' && computerChoice === 'Rock'){
            roundResult.textContent = "You Win! Paper beats Rock";
            console.log("You Win! Paper beats Rock")
            humanScore++;
        } 
        
        
        else 
        {
            roundResult.textContent = "Please choose an appropriate option";
            console.log("Please choose an appropriate option")
        }

        
        humanScoreElement.textContent = `<strong>Human Score:</strong> ${humanScore}`;
        computerScoreElement.textContent = `<strong>Computer Score:</strong> ${computerScore}`;
      }
    
 
