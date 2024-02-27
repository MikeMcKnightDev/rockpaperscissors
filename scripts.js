console.log("Welcome to a riveting game of rock paper scissors.");

let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let random = Math.floor(Math.random() * 3);
    let choice = "";
    if(random === 0){
        choice = "rock";
    } else if (random === 1){
        choice = "paper";
    } else if (random === 2){
        choice = "scissors";
    } else {
        choice = "shoot";
    }

    return choice;
}

function getPlayerChoice(){
    let playerChoice = prompt("What is your choice for this round?");
    if(playerChoice.toLowerCase() != "rock" && playerChoice.toLowerCase() != "paper" && playerChoice.toLowerCase() != "scissors"){
        if(confirm("That is not a valid option, please enter either rock, paper, or scissors.")) return getPlayerChoice();
    } else {
        return playerChoice.toLowerCase();
    }
    
}



function playRound(pChoice, cChoice){
    pChoice = getPlayerChoice();
    cChoice = getComputerChoice();

    console.log("The computer has chosen " + cChoice + ".");
    console.log("The player has chosen " + pChoice + ".");
    if(pChoice == cChoice){
        console.log("This round is a tie.")
        playRound();
    } else if((pChoice == "rock" && cChoice == "scissors") || (pChoice == "paper" && cChoice == "rock") || (pChoice == "scissors" && cChoice == "paper")){
        console.log("The player wins this round!")
        playerScore++;
    } else if((pChoice == "rock" && cChoice == "paper") || (pChoice == "paper" && cChoice == "scissors") || (pChoice == "scissors" && cChoice == "rock")){
        console.log("The Computer wins this round!")
        computerScore++;
    }
    
}

function playGame(){
    console.clear();
    while (playerScore < 5 && computerScore < 5) {
        playRound();
        console.log("The players score is: " , playerScore);
        console.log("The computers score is: " , computerScore);
    }
    if(playerScore == 5){
        alert("Congratulations you win!!!");
        if(confirm("Would you like to play again?")){
            computerScore = 0;
            playerScore = 0;
            playGame();
        }
    } else if (computerScore == 5){
        alert("Sorry you lose :(");
        if(confirm("Would you like to play again?")){
            computerScore = 0;
            playerScore = 0;
            playGame();
        }
    }

}

playGame();
