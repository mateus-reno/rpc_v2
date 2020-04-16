// Options to select from for Rock, Paper Scissors
const inputOption = ["rock", "paper", "scissors"] 

// Computer random selection of strategy
function computerPlay() {
    let computerSelection = inputOption[Math.floor(Math.random() * inputOption.length)];
    return(computerSelection)
}

let computerScore = 0
let playerScore = 0
let round = 0


// Function to determine who wins a round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        let outcome = "Nobody wins!"
        round++
        displayResult(outcome,playerSelection,computerSelection,playerScore,computerScore,round)
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        let outcome = "You win, paper beats rock!"
        playerScore++
        round++
        displayResult(outcome,playerSelection,computerSelection,playerScore,computerScore,round)
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        let outcome = "You lose, paper beats rock!"
        computerScore++
        round++
        displayResult(outcome,playerSelection,computerSelection,playerScore,computerScore,round)
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        let outcome = "You lose, rock beats scissors!"
        computerScore++
        round++
        displayResult(outcome,playerSelection,computerSelection,playerScore,computerScore,round)
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        let outcome = "You win, rock beats scissors!"
        playerScore++
        round++
        displayResult(outcome,playerSelection,computerSelection,playerScore,computerScore,round)
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        let outcome = "You lose, scissors beat paper!"
        computerScore++
        round++
        displayResult(outcome,playerSelection,computerSelection,playerScore,computerScore,round)
    } else {
        let outcome = "You win, scissors beat paper!"
        playerScore++
        round++
        displayResult(outcome,playerSelection,computerSelection,playerScore,computerScore,round)
    }
}

//Display of results
function displayResult (outcome,playerSelection,computerSelection,playerScore,computerScore, round) {   
//get correct div
        let overview = document.querySelector('#container')
//Score player
        let playerPoints = document.createElement('p');
        playerPoints.textContent = "Player: " + playerScore
        overview.replaceChild(playerPoints, overview.children[2]);
//Score computer
        let computerPoints = document.createElement('p');
        computerPoints.textContent = "Computer: " + computerScore
        overview.replaceChild(computerPoints, overview.children[3]);
//Round roundCounter
        let roundCount = document.createElement('p');
        roundCount.textContent = "Rounds played: " + round
        overview.replaceChild(roundCount, overview.children[1]);

        if (playerScore == 5) {
            //get correct div       
            let container = document.querySelector('#playground')
            //Outcome of Round
            let roundResult = document.createElement('p');
            roundResult.textContent = outcome
            container.replaceChild(roundResult, container.children[2]);        
            //Selection Player
            let playerChoice = document.createElement('p');
            playerChoice.textContent = "Player's Choice: " + playerSelection
            container.replaceChild(playerChoice, container.children[1]);
            //Selection Computer
            let computerChoice = document.createElement('p');
            computerChoice.textContent = "Computer's Choice: " + computerSelection
            container.replaceChild(computerChoice, container.children[0]);
            //get correct div for final        
            let finalResult = document.querySelector('#final')
            //Final verdict
            let verdict = document.createElement('p');
            verdict.textContent = "Player won the Game"
            finalResult.replaceChild(verdict, finalResult.children[0]);
        } else if (computerScore == 5) {
            //get correct div for playground       
            let container = document.querySelector('#playground')
            //Outcome of Round
            let roundResult = document.createElement('p');
            roundResult.textContent = outcome
            container.replaceChild(roundResult, container.children[2]);        
            //Selection Player
            let playerChoice = document.createElement('p');
            playerChoice.textContent = "Player's Choice: " + playerSelection
            container.replaceChild(playerChoice, container.children[1]);
            //Selection Computer
            let computerChoice = document.createElement('p');
            computerChoice.textContent = "Computer's Choice: " + computerSelection
            container.replaceChild(computerChoice, container.children[0]);
            //get correct div for final        
            let finalResult = document.querySelector('#final')
            //Final verdict
            let verdict = document.createElement('p');
            verdict.textContent = "Computer won the Game"
            finalResult.replaceChild(verdict, finalResult.children[0]);

        } else {
            //get correct div       
            let container = document.querySelector('#playground')
            //Outcome of Round
            let roundResult = document.createElement('p');
            roundResult.textContent = outcome
            container.replaceChild(roundResult, container.children[2]);        
            //Selection Player
            let playerChoice = document.createElement('p');
            playerChoice.textContent = "Player's Choice: " + playerSelection
            container.replaceChild(playerChoice, container.children[1]);
            //Selection Computer
            let computerChoice = document.createElement('p');
            computerChoice.textContent = "Computer's Choice: " + computerSelection
            container.replaceChild(computerChoice, container.children[0]);
        }  
}


//Event listeners
let btnRock = document.querySelector('#btnRock')
btnRock.onclick = () => playRound("rock", computerPlay())

let btnPaper = document.querySelector('#btnPaper')
btnPaper.onclick = () => playRound("paper", computerPlay())

let btnScissors = document.querySelector('#btnScissors')
btnScissors.onclick = () => playRound("scissors", computerPlay())