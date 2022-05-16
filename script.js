//Create a function that will randomly return either:
//  -rock
//  -paper
//  -scissors
//RETURN: Computers selection

let playerSelection = "";
let computerSelection;
let computerScore = 0;
let playerScore = 0;

function computerPlay(){
    const randNum = Math.floor(Math.random()*3);
    switch(randNum){
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        default:
            return "Error calculating answer";
    }
}

//Create a function called 'playRound' that will play 1 round and pulls the following parameters:
//  - playerSelection
//RETURN: string that declares who won this round

function playRound(playerSelection){
    //Convert to strings for comparison
    const computerSelection = String(computerPlay()).toLowerCase();
    let playerSelectionStringLower = String(playerSelection).toLowerCase();
    console.log(computerSelection);
    console.log(playerSelectionStringLower)
    if (computerSelection == playerSelectionStringLower){
                playerScore++;
                computerScore++;
                return "Tie Game!";
        } else if (
            computerSelection == "rock" && playerSelectionStringLower == "scissors" ||
            computerSelection == "scissors" && playerSelectionStringLower == "paper" ||
            computerSelection == "paper" && playerSelectionStringLower == "rock"
            ){
                computerScore++;
                return "Computer wins!";
            } else {
                playerScore++;
                return "Player win";
            }
    };

//Create a function called 'game' that will call the playRound function and will
//  - play 5 rounds
//for (let i = 0; i < 5; i++) {
    // your code here!
    //console.log(winner);
 //}
//  - keep score for all 5 rounds
//  - declare the winner for each round
//RETURN: declare the winner or loser at the end

function game(){
    for (let i = 0; i<5; i++){
        playerSelection = prompt("Rock, Paper, or Scissors?");
        winner = playRound(playerSelection);
        console.log(winner);
        console.log("Player: " + playerScore);
        console.log("Computer: " + computerScore);
    }
    switch(true){
        case playerScore > computerScore:
            return "Player wins the match!";
        case computerScore > playerScore:
            return "Computer wins the match!";
        default:
            return "We have a tie!"
    }

}