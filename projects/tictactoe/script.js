const selectPlayerX = document.querySelector("#playerX");
const selectPlayerO = document.querySelector("#playerO");
const selectFirstPlayer = document.querySelector(".selectFirstPlayer");
const board = document.querySelector(".board");
const cellElements = document.querySelectorAll("[data-cell");
const xClass = "x";
const oClass = "circle";
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let move = [];
let currentClass = "";
let history = [];

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
  placeMark(cell, currentClass);
  if (checkwin(currentClass)) {
    console.log("WINNER!");
  }
  /* check for draw */
  updatedBoardStatus();
  updateMoves();
  swapTurns();
};

/* --PLACE PLAYER MARK ON CELL-- */
const placeMark = (cell, currentClass) => {
  cell.classList.add(currentClass);
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

/* --ADD EVENTLISTENERS ON EVERY CELLS-- */
for (cell of cellElements) {
  cell.addEventListener("click", handleClick, { once: true });
}

/* --UPDATE BOARDSTATUS-- */
const updatedBoardStatus = () => {
  let row1 = [];
  let row2 = [];
  let row3 = [];
  let mark = "";

  for (let i = 0; i < cellElements.length; i++) {
    if (cellElements[i].classList.contains("x")) {
      mark = "x";
    } else if (cellElements[i].classList.contains("circle")) {
      mark = "o";
    } else {
      mark = "";
    }

    if (i <= 2) {
      row1.push(mark);
    } else if (i > 2 && i < 6) {
      row2.push(mark);
    } else {
      row3.push(mark);
    }
  }

  history.push([row1, row2, row3]);

  console.log(history);
};

/* --UPDATE NUMBER OF MOVE-- */
const updateMoves = () => {
  move.push = move++;
  console.log(`number of move: ${move}`);
};

/* --CHECK FOR WINNER-- */
const checkwin = (currentClass) => {
  return winningCombinations.some((combination) => {
    return combination.every((index) => {
      return cellElements[index].classList.contains(currentClass);
    });
  });
};
