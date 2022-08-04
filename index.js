


// module 
let gameBoard = (function () {

    let gameArray = [];
    let gb = document.querySelector('.gameBoard');

    // create gameboard with CSS grid 
    for (let i = 0; i < 9; i++) {
        gameArray.push(" ");
        let cell = document.createElement("div");
        cell.innerText = "this is cell " + i;
        cell.className = 'cell';
        cell.id = 'cell' + i;
        gb.appendChild(cell);
    }



})();

// factory for player creation 
let playerFactory = (name) => {

}

let number = 0;

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



