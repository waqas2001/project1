function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'tie';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'user';
    } else {
        return 'computer';
    }
}

// Update and display the score
function updateScore(winner, userScore, computerScore) {
    if (winner === 'user') {
        userScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
    document.getElementById('score').textContent = `Score: Player - ${userScore}, Computer - ${computerScore}`;
    return [userScore, computerScore];
}

// Play a round
function playRound(userChoice, userScore, computerScore) {
    clearConfetti(); // Clear confetti from previous rounds
    const computerChoice = getComputerChoice();
    const winner = determineWinner(userChoice, computerChoice);
    let resultMessage = `Your choice: ${userChoice}. Computer's choice: ${computerChoice}. `;

    if (winner === 'tie') {
        resultMessage += "It's a tie!";
    } else if (winner === 'user') {
        resultMessage += "You win!";
        createConfetti(); // Create confetti effect when user wins
    } else {
        resultMessage += "Computer wins!";
    }

    document.getElementById('result').textContent = resultMessage;

    return updateScore(winner, userScore, computerScore);
}


// Start a new game
function resetGame() {
    return [0, 0]; // Reset scores to zero for both user and computer
}

// Initial scores
let scores = [0, 0]; // [userScore, computerScore]

// Add event listeners to the buttons
document.getElementById('rock').addEventListener('click', () => {
    scores = playRound('rock', scores[0], scores[1]);
});
document.getElementById('paper').addEventListener('click', () => {
    scores = playRound('paper', scores[0], scores[1]);
});
document.getElementById('scissors').addEventListener('click', () => {
    scores = playRound('scissors', scores[0], scores[1]);
});

// Event handler for the new game button
document.getElementById('replay').addEventListener('click', () => {
    scores = resetGame();
    document.getElementById('score').textContent = 'Score: Player - 0, Computer - 0';
    document.getElementById('result').textContent = '';
});
// ... (other parts of your JavaScript code)

function updateResultMessage(userChoice, computerChoice, winner) {
    const resultDiv = document.getElementById('result');
    let resultMessage = `Your choice: ${userChoice}. Computer's choice: ${computerChoice}. `;
    resultDiv.classList.remove('win-message'); // Remove the class in case it was added before

    if (winner === 'tie') {
        resultMessage += "It's a tie!";
    } else if (winner === 'user') {
        resultMessage += "You win!";
        resultDiv.classList.add('win-message'); // Add the class to trigger the animation
        function createConfetti() {
            const confettiWrapper = document.getElementById('confetti-wrapper');
            for (let i = 0; i < 100; i++) { // Creates 100 pieces of confetti
                const confetti = document.createElement('div');
                confetti.classList.add('confetti');
                confetti.style.left = `${Math.random() * 100}vw`; // Random horizontal position
                confetti.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random animation duration between 2 and 5 seconds
                confetti.style.animationDelay = `${Math.random() * 5}s`; // Random animation delay up to 5 seconds
                confetti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`; // Random color
                confettiWrapper.appendChild(confetti);
            }
        }
        
        function clearConfetti() {
            const confettiWrapper = document.getElementById('confetti-wrapper');
            confettiWrapper.innerHTML = ''; // Remove all confetti pieces
        }
        
        // Call createConfetti when the user wins
        // Call clearConfetti at the start of a new game or round to clean up
        
    } else {
        resultMessage += "Computer wins!";
    }

    resultDiv.textContent = resultMessage;
}

// ... (rest of your JavaScript code)
function createConfetti() {
    const confettiWrapper = document.getElementById('confetti-wrapper');
    for (let i = 0; i < 100; i++) { // Creates 100 pieces of confetti
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random animation duration between 2 and 5 seconds
        confetti.style.animationDelay = `${Math.random() * 5}s`; // Random animation delay up to 5 seconds
        confetti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`; // Random color
        confettiWrapper.appendChild(confetti);
    }
}

function clearConfetti() {
    const confettiWrapper = document.getElementById('confetti-wrapper');
    confettiWrapper.innerHTML = ''; // Remove all confetti pieces
}
