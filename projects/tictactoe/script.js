const selectPlayerX = document.querySelector("#playerX");
const selectPlayerO = document.querySelector("#playerO");
const board = document.querySelector(".board");
const selectFirstPlayer = document.querySelector(".selectFirstPlayer");

/* --SELECT WHO'S TURN FIRST
    BOARD CLASS ADD x or o */
selectPlayerX.addEventListener("click", () => {
  board.classList.add("x");
  selectFirstPlayer.classList.add("off");
});
selectPlayerO.addEventListener("click", () => {
  board.classList.add("circle");
  selectFirstPlayer.classList.add("off");
});
