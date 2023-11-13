// a command is required to run the game.
// node oct10.js

// Hangman Game in JavaScript

const prompt = require('prompt-sync')();

const words = ["javascript", "hangman", "browser", "website"];
let word = words[Math.floor(Math.random() * words.length)];

let attempts = 6;
let guessedLetters = [];
let wordStatus = null;

function printWordToGuess() {
    wordStatus = word.split('').map(letter => (guessedLetters.includes(letter) ? letter : "_")).join('');

    console.log(wordStatus);
}

function getUserGuess() {
    let guess = prompt("Guess a letter: ");
    if (guess.length === 1 && /^[a-zA-Z]$/.test(guess)) {
        return guess;
    } else {
        console.log("Please enter a valid letter");
        return getUserGuess();
    }
}

function processGuess(guess) {
    guessedLetters.push(guess);

    if (!word.split("").includes(guess)) {
        attempts--;
    }
}

function gameWon() {
    if (wordStatus === word) {
        return true;
    }
    return false;
}

function gameLost() {
    if (attempts === 0) {
        return true;
    }
    return false;
}

function printHangman() {
    const hangmanVisuals = [
        `
     ------
     |    |
     |
     |
     |
     |
     |
     --------
    `,
        `
     ------
     |    |
     |    O
     |
     |
     |
     |
     --------
    `,
        `
     ------
     |    |
     |    O
     |    |
     |
     |
     |
     --------
    `,
        `
     ------
     |    |
     |    O
     |   /|
     |
     |
     |
     --------
    `,
        `
     ------
     |    |
     |    O
     |   /|\\
     |
     |
     |
     --------
    `,
        `
     ------
     |    |
     |    O
     |   /|\\
     |   /
     |
     |
     --------
    `,
        `
     ------
     |    |
     |    O
     |   /|\\
     |   / \\
     |
     |
     --------
    `
    ];

    console.log(hangmanVisuals[6 - attempts]);
}

console.log("Welcome to Hangman!");

while (!gameWon() && !gameLost()) {
    printHangman();
    printWordToGuess();
    processGuess(getUserGuess());
}

if (gameWon()) {
    console.log("Congratulations! You won.");
} else {
    console.log("Sorry, you lost! The word was: " + word);
}
