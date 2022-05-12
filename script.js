//Create a function that will randomly return either:
//  -rock
//  -paper
//  -scissors
//RETURN: Computers selection

let winner;
let playerSelection;
let computerSelection;

function computerPlay(){
    const randNum = Math.round(Math.random()*2);
    switch(randNum){
        case 0:
            computerSelection = "Rock"
            break;
        case 1:
            computerSelection = "Paper"
            break;
        case 2:
            computerSelection = "Scissors"
            break;
        default:
            computerSelection = "Error calculating answer"
    }
}

//Create a function called 'playRound' that will play 1 round and pulls the following parameters:
//  - playerSelection
//  - computerSelection
//RETURN: string that declares who won this round

function playRound(playerSelection, computerSelection){

    
    playerSelection.toLowerCase();
    computerSelection.toLowerCase();

    if (playerSelection == "rock" && computerSelection == "scissors"){
        winner = "Player wins!"
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        winner = "Computer wins!"
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        winner = "Computer wins!"
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        winner = "Player wins!"
    } else if (playerSelection == "scissors" && computerSelection == "rock"){
        winner = "Computer wins!"
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        winner = "Player wins!"
    } else{
        winner = "Draw!"
    }


}

//Create a function called 'game' that will call the playRound function and will
//  - play 5 rounds
//for (let i = 0; i < 5; i++) {
    // your code here!
    console.log(winner);
 //}
//  - keep score for all 5 rounds
//  - declare the winner for each round
//RETURN: declare the winner or loser at the end