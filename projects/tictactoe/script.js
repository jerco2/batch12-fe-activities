const selectPlayerX = document.querySelector("#playerX");
const selectPlayerO = document.querySelector("#playerO");
const board = document.querySelector(".board");
const selectFirstPlayer = document.querySelector(".selectFirstPlayer");

selectPlayerX.addEventListener("click", () => {
  board.classList.add("x");
  selectFirstPlayer.classList.add("off");
});
