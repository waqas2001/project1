// Hangman Game 

// Declaing guess words
const words = ["HANGMAN", "JAVASCRIPT", "DEVELOPER", "COMPUTER", "GAMING", "PYTHON", "AMAZON", "ANACONDA"];
// Random word will be chosen
let chosenWord = words[Math.floor(Math.random() * words.length)];
// arry will show guess word fill
let guessedWord = Array(chosenWord.length).fill("_");
// begin with 0 will have up to 6 options
let mistakes = 0;

// This will git the input word
const wordElement = document.getElementById("word");
//display the message
const messageElement = document.getElementById("message");
// play the game again
const playAgainButton = document.getElementById("play-again");


function updateWordDisplay() {
    wordElement.textContent = guessedWord.join(" ");
}

function checkLetter(letter) {
    let found = false;
    for (let i = 0; i < chosenWord.length; i++) {
        if (chosenWord[i] === letter) {
            guessedWord[i] = letter;
            found = true;
        }
    }

    if (!found) {
        mistakes++;
        const hangmanImage = document.getElementById('hangman-image'); 
        updateHangman();
    }

    updateWordDisplay();
// loop if mistaks excced 6 turns paly the game again.
    if (mistakes >= 6) {
        messageElement.textContent = "You lose! The word was " + chosenWord;
        disableLetters();
        playAgainButton.style.display = "block"; 
    }
// if chosend words match you win!
    if (guessedWord.join("") === chosenWord) {
        messageElement.textContent = "Congratulations! You win!";
        disableLetters();
        playAgainButton.style.display = "block"; 
    }
}

function updateHangman() {
    const hangmanImage = document.getElementById('hangman-image'); 
    hangmanImage.src = `./assets/img/hangman${mistakes}.svg`;
}

function disableLetters() {
    document.querySelectorAll(".letter").forEach(letterElement => {
        letterElement.style.backgroundColor = "#ddd";
        letterElement.style.cursor = "not-allowed";
    });
}

function enableLetters() {
    document.querySelectorAll(".letter").forEach(letterElement => {
        letterElement.style.backgroundColor = "";
        letterElement.style.cursor = "pointer";
    });
}

function resetGame() {
    chosenWord = words[Math.floor(Math.random() * words.length)];
    guessedWord = Array(chosenWord.length).fill("_");
    mistakes = 0;

    wordElement.textContent = "";
    messageElement.textContent = "";
    updateHangman();
    updateWordDisplay();
    enableLetters();
    playAgainButton.style.display = "none";
    
    const hangmanImage = document.getElementById('hangman-image');
    hangmanImage.src = "./assets/img/hangman0.svg";
}

document.querySelectorAll(".letter").forEach(letterElement => {
    letterElement.addEventListener("click", () => {
        if (messageElement.textContent === "") {
            const letter = letterElement.getAttribute("data-letter");
            letterElement.style.backgroundColor = "#ddd";
            letterElement.style.cursor = "not-allowed";
            checkLetter(letter);
        }
    });
});

updateWordDisplay();

playAgainButton.addEventListener("click", resetGame); 