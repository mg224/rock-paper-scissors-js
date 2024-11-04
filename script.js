let humanScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.value, getComputerChoice());
    });
});

function endGame() {
    buttons.forEach((button) => {
        button.disabled = true;
    });
}

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("rock, paper or scissors? ");
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    // humanChoice = humanChoice.toLowerCase();
    let result = '';

    if ((humanChoice == 'rock' && computerChoice == 'scissors') || (humanChoice == 'paper' && computerChoice == 'rock') || (humanChoice == 'scissors' && computerChoice == 'paper')) {

        humanScore++;
        result = '<br>You win! ' + humanChoice + ' beats ' + computerChoice + '<br>Player score: ' + humanScore + '<br>Computer score: ' + computerScore;
        

        if (humanScore === 5) {
            result += '<br>You won! Reload the page to play again.';
            endGame();
        }

    }
    else if ((humanChoice == 'rock' && computerChoice == 'paper') || (humanChoice == 'paper' && computerChoice == 'scissors') || (humanChoice == 'scissors' && computerChoice == 'rock')) {
        computerScore++;
        result = '<br>You lose! ' + computerChoice + ' beats ' + humanChoice + '<br>Player score: ' + humanScore + '<br>Computer score: ' + computerScore;
        

        if (computerScore === 5) {
            result += '<br>You lose! Reload the page to play again.';
            endGame();
        }
        
    }
    else if (humanChoice === computerChoice) {

        result = '<br>Tie! <br>Player score: ' + humanScore + '<br>Computer score: ' + computerScore;
    }

    document.querySelector('#result').innerHTML = result;
    return;
}

// function playGame() {
//     for (let i = 0; i < 5; i++) {
//         playRound(getHumanChoice(), getComputerChoice());
//     }
// }

// playGame();





// playRound(humanSelection, computerSelection);

// console.log(getComputerChoice());
// console.log(getComputerChoice());
// console.log(getComputerChoice());
// console.log(getHumanChoice());

