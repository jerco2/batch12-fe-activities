const selectPlayerX = document.querySelector("#playerX");
const selectPlayerO = document.querySelector("#playerO");
const selectFirstPlayer = document.querySelector(".selectFirstPlayer");
const board = document.querySelector(".board");
const cellElements = document.querySelectorAll("[data-cell");
const xClass = "x";
const oClass = "circle";

let currentClass = "";
let circleTurn = "";
let boardStatus = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

/* --SELECT WHO'S TURN FIRST
    BOARD CLASS ADD x or o */
selectPlayerX.addEventListener("click", () => {
  currentClass = xClass;
  board.classList.add(currentClass);
  selectFirstPlayer.classList.add("off");
});
selectPlayerO.addEventListener("click", () => {
  currentClass = oClass;
  board.classList.add(currentClass);
  selectFirstPlayer.classList.add("off");
});
/* --PLAYER ACTION ON CLICK-- */
const handleClick = (e) => {
  const cell = e.target;
  /* placemark */
  placeMark(cell, currentClass);
  /* check for win */
  /* check for draw */
  /* switch turns */
  swapTurns();
};
/* --PLACE PLAYER MARK ON CELL-- */
const placeMark = (cell, currentClass) => {
  cell.classList.add(currentClass);
  console.log(boardStatus);
};
/*--SWAP TURNS, CHANGES BOARD CLASS-- */
const swapTurns = () => {
  if (currentClass === "x") {
    board.classList.remove("x");
    board.classList.add("circle");
    currentClass = "circle";
  } else {
    board.classList.remove("circle");
    board.classList.add("x");
    currentClass = "x";
  }
};
/* --ADD EVENTLISTENERS ON EVERY CELLS */
for (cell of cellElements) {
  cell.addEventListener("click", handleClick, { once: true });
}
