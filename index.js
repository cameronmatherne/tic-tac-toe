
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

    function scanForMove() {
        let buttonOnGrid = document.querySelectorAll('div.cell');
        buttonOnGrid.forEach(cell => {
            cell.addEventListener('click', function () {
                console.log("testing cell: " + cell.id)
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


    }

    function resetBoard() {
        for (let i = 0; i < 9; i++) {
            gameArray[i] == (" ");
        }
    }

    return { generateBoard, resetBoard, scanForMove }
})();




gameBoard.generateBoard();
gameBoard.scanForMove();



























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

