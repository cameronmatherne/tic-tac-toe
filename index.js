
// module (immediately invoked function )
let gameBoard = (() => {

    let gameArray = [];
    let gb = document.querySelector('.gameBoard');
 
    // counter to keep track of current player
    // even number == player one
    // odd number == player two
    let counter = 0;

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

    // public function that sets the event listener to listen for any moves
    function scanForMove() {
        let buttonOnGrid = document.querySelectorAll('div.cell');
        buttonOnGrid.forEach(cell => {
            cell.addEventListener('click', function () {
                updateArray(cell.id);

            })
        })
    }

    function updateArray(id) {
        if (gameArray[id] == " ") { 
            if (counter % 2 == 0) {
                gameArray[id] = "X";
                counter++;
            }
            else if (counter % 2 != 0) {
                gameArray[id] = "O";
                counter++;
            }
            console.log(gameArray)
            console.log("counter: " + counter)
            updateGrid(id);

        }
    }

    function updateGrid(id) {
        let currentCell = document.getElementById(id);
        if (gameArray[id] == "X") {
            currentCell.innerText = "X";
        }
        if (gameArray[id] == "O") {
            currentCell.innerText = "O";
        }
        if (gameArray[id] == " ") {
            currentCell.innerText = " ";
        }
    }

    function resetBoard() {
        let buttonOnGrid = document.querySelectorAll('div.cell');
        gameArray = [" ", " ", " ", " ", " ", " ", " ", " ", " "]
        buttonOnGrid.forEach(cell => {
           cell.innerText = " ";
            })
        console.log("testing reset function");
        console.log(gameArray)
    }

    return { generateBoard, resetBoard, scanForMove }

})();


const playerFactory = (name, symbol) => {

    this.name = name;
    this.symbol = symbol;
    const score = 0;

};


gameBoard.generateBoard();
gameBoard.scanForMove();

let resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', gameBoard.resetBoard)




























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

