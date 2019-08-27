var playerWin = 0;
var aiWin = 0;
var draws = 0;
var playerRoll = 0; //rock=1 paper=2 scissors=3//
var computerRoll2 = 0;
var computerRoll = Math.floor(Math.random() * 3 + 1);

//Turn comp choice into Rock paper or scissors
function aiThrow() {
  if (computerRoll === 1) {
    computerRoll2 = '&#9994';
  } else if (computerRoll === 2) {
    computerRoll2 = '&#9995';
  } else {
    computerRoll2 = '&#9996';
  }
  let element = document.getElementById("printAi");
  element.innerHTML = computerRoll2;
}

aiThrow();

function Roc() {
  playerRoll = 1;
  let elemental = document.getElementById("player");
  elemental.innerHTML = '&#9994';
  document.getElementById("printAi").style.opacity = "1";
  computerRoll = Math.floor(Math.random() * 3 + 1);
  aiThrow();
  compare(playerRoll, computerRoll);
}

function Sci() {
  playerRoll = 3;
  let elemental = document.getElementById("player");
  elemental.innerHTML = '&#9996';
  document.getElementById("printAi").style.opacity = "1";
  computerRoll = Math.floor(Math.random() * 3 + 1);
  aiThrow();
  compare(playerRoll, computerRoll);
}

function Pap() {
  playerRoll = 2;
  let elemental = document.getElementById("player");
  elemental.innerHTML = '&#9995';
  document.getElementById("printAi").style.opacity = "1";
  computerRoll = Math.floor(Math.random() * 3 + 1);
  aiThrow();
  compare(playerRoll, computerRoll);
}

let compare = function (playerRoll, computerRoll) {
  let wins = 0;
  if (playerRoll === computerRoll) wins = 3;
  else if (playerRoll === 1) {
    if (computerRoll === 3)
      wins = 1;
    else
      wins = 0;
  } else if (playerRoll === 2) {
    if (computerRoll === 1)
      wins = 1;
    else
      wins = 0;
  } else {
    if (computerRoll === 2)
      wins = 1;
    else
      wins = 0;
  }
  if (wins === 1) {
    playerWin++;
    winss = "You Win!";
  } else if (wins === 0) {
    aiWin++;
    winss = "You lose sorry";
  } else {
    draws++;
    winss = "It's a tie!";
  }
  document.getElementById("results").innerHTML = winss;
  document.getElementById("playerWins").innerHTML = 'Wins: ' + playerWin;
  document.getElementById("playerLosses").innerHTML = 'Losses: ' + aiWin;
  document.getElementById("playerTies").innerHTML = 'Ties: ' + draws;
};
