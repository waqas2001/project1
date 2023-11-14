let currentPlayer = 'X';  // It starts with 'X', but take turns and become 'O' too, and vice versa
let computerPlayer = 'O'; // The computer's symbol
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const cells = document.querySelectorAll('.cell');  // cells is an array, listening to all 9 cells
const message = document.querySelector('.message');

function makeMove(box) {                                                  // makeMove is defined in html. clicking a box calls this funtion
    const cellIndex = Array.from(cells).indexOf(box);                     // finding the Index of the box clicked
    if (gameBoard[cellIndex] === '' && gameActive) {
        box.textContent = currentPlayer;                                  // to show on display
        gameBoard[cellIndex] = currentPlayer;                             // to record in the gameBoard
        if (checkWin(currentPlayer)) {
            gameActive = false;
            if (currentPlayer === 'X') {
                message.textContent = `You won!`;
            } else {
                message.textContent = `Computer won!`;
            }
        } else if (gameBoard.indexOf('') === -1) {  // if indexOf doesn't find any what is looking for in an array then its -1
            gameActive = false;
            message.textContent = "It's a draw!";
        } else {                                    // Now it is time to move the turn
            if (currentPlayer === 'X'){
                message.textContent = `Computer's turn`;
                currentPlayer = 'O'
            } else {
                message.textContent = `Your turn`;
                currentPlayer = 'X'
            }

            if (currentPlayer === computerPlayer) {      // If the current player is the computer, computer plays after 1000ms delay
                setTimeout(makeComputerMove, 1000);
            }
        }
    }
}

function makeComputerMove() {
    const availableCells = [];                                       // An empty array to store empty box indices
    for (let i = 0; i < gameBoard.length; i++) {                     // Loop over the gameBoard
        if (gameBoard[i] === '') {                                   // Checking if the box is empty
            availableCells.push(i);  //[1, 3, 5, 8]                  // Saving the index of the empty box
        }
    }
    const id = Math.floor(Math.random() * availableCells.length) // 2 //generating a random number within 0 and leftover_empty_box_number-1
    const randomIndex = availableCells[id];       // 5     // picking an empty box by index
    if (randomIndex !== undefined) {              // checking in case there is no empty box left
        const emptyCell = cells[randomIndex];     // cells[5] // computer is picking a random empty box
        makeMove(emptyCell);                      // computer is calling the makeMove function to fill the chosen empty box.
    }
}


function checkWin(player) {
    for (let combo of winCombos) {                   // each combo is a 1x3 array containig winning combination
        if (gameBoard[combo[0]] === player && gameBoard[combo[1]] === player && gameBoard[combo[2]] === player) {
            cells[combo[0]].style.color = 'red';     //dispaly text red after winning the game
            cells[combo[1]].style.color = 'red';
            cells[combo[2]].style.color = 'red';
            return true;
        }
    }
    return false;
}

function resetBoard() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];  // making game board empty
    gameActive = true;
    cells.forEach((cell) => {           // cells contain 9 cell, using a FOR loop to go over each cell
        cell.textContent = '';          // making each cell empty 
        cell.style.color = '';          // setting text (X or O) color to default CSS color (which is black)
    });
    message.textContent = "Your turn first. Your symbol is 'X'.";
}

resetBoard(); // upon loading the page this function is called by default
