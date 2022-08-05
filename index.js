
// module (immediately invoked function )
let gameBoard = (() => {

    let gameArray = [];
    let gb = document.querySelector('.gameBoard');


    // create gameboard with CSS grid 
    function generateBoard() {
        for (let i = 0; i < 9; i++) {
            gameArray.push(" ");
            let cell = document.createElement("div");
            cell.className = 'cell';
            cell.id = i;
            gb.appendChild(cell);
        }
    }

    function addEntry() {
        console.log("testing the function")


    }

    function resetBoard() {
        for (const i=0; i<9; i++) {
            gameArray[i] == (" ");
        }
    }

    return { generateBoard, addEntry, resetBoard }
})();

let number = 0;
gameBoard.generateBoard();

let buttonOnGrid = document.querySelectorAll('div.cell');
buttonOnGrid.forEach(cell => {
    cell.addEventListener('click', gameBoard.addEntry)})





















/*
let buttonOnGrid = document.querySelectorAll('div.cell');
buttonOnGrid.forEach(cell => {
    cell.addEventListener('click', function () {
        number++;
        console.log('button clicked!');

        if (number % 2 == 0) {
            cell.innerText = "X"
            cell.style.backgroundColor = 'red';
        }
        else {
            cell.innerText = "O"
            cell.style.backgroundColor = 'green';
        }
    });
})
*/

