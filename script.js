// set variables

var originalBoard;
const humanPlayer = "O";
const aiPlayer = "X";
const winner = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [6,4,2]
]
//  //every cell on the board
const cells = document.querySelectorAll('.cell')
//
// // logic to start the game
startGame();

// 1. removes styling from end game modal
// 2. creates an array from the board
// 3. loops through the array, removes the text inside the square,
//    removes the background color, turns the turnClick to false
function startGame() {
  document.querySelector(".endgame").style.display = "none";
  originalBoard = Array.from(Array(9).keys());
   for (var i = 0; i < cells.length; i++) {
     cells[i].innerText = '';
     cells[i].style.removeProperty('background-color');
     cells[i].addEventListener('click', turnClick, false);
   }
}

//1. allows humanPlayer to take a turn
function turnClick(square){
  turn(square.target.id, humanPlayer);
}

//turn function, taking a turn referenced in above function
// checks if game is won after every move
function turn(squareId, player) {
  originalBoard[squareId] = player;
  document.getElementById(squareId).innerText = player;
  var gameWon = checkWin(originalBoard, player)
    if (gameWon){
      gameOver(gameWon)
    }
}


//checks if game is won
function checkWin(board, player) {
	let plays = board.reduce((a, e, i) =>
		(e === player) ? a.concat(i) : a, []);
	let gameWon = null;
	for (let [index, win] of winCombos.entries()) {
		if (win.every(elem => plays.indexOf(elem) > -1)) {
			gameWon = {index: index, player: player};
			break;
		}
	}
	return gameWon;
}
// logic to show winner

// AI
// //
// create a logic for an unbreatable AI
