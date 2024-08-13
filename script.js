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
    
 
    
    