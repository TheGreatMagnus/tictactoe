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

const cell = document.querySelectorAll('td')

// logic to start the game
startGame();
function startGame() {
  document.querySelector(".endgame").style.display = "none";
  originalBoard = Array.from(Array(9).keys())
}
// logic to show winner

// AI
// //
// create a logic for an unbreatable AI
