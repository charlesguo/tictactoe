window.onload = clearReset;

var winningComb = [0b000000111,
  0b000111000,
  0b111000000,
  0b001001001,
  0b010010010,
  0b100100100,
  0b100010001,
  0b001010100,
];

var grid = document.getElementsByClassName("cell");
var numTurns;
var sign;
var historicalX;
var historicalO;
var continuePlay;



function clearReset(){
  numTurns = 0;
  sign = true;
  historicalX = 0;
  historicalO = 0;
  continuePlay = true;
  for (var i = 0; i < grid.length; i++) {
      grid[i].innerHTML = "";
      grid[i].style.backgroundColor = "transparent";
      grid[i].addEventListener("click", selectCell, false);
   }
}


document.getElementById("resetButton").addEventListener("click", clearReset);


function selectCell() {
  if (!this.innerHTML) {
    if (sign) {
      document.getElementById("turnInfo").innerHTML="It's X's turn."
      this.innerHTML = "X";
      this.style.backgroundColor = "red";
      historicalX += Math.pow(2, parseInt(this.id));
    } else {
      document.getElementById("turnInfo").innerHTML="It's O's turn."
      this.innerHTML = "O";
      this.style.backgroundColor = "blue";
      historicalO += Math.pow(2, parseInt(this.id));
    }

    numTurns ++;
    console.log(numTurns);
    sign = !sign;

    for (var i = 0; i < winningComb.length; i++) {

      if (winningComb[i] === historicalX) {
      alert("Congratulations! X won this round");
      continuePlay=false;

      } else if (winningComb[i] === historicalO) {
      alert("Congratulations! O won this round");
      continuePlay=false;

      // console.log(continuePlay);
      } else if (numTurns === 9) {
      alert("It's a draw this round!");
      continuePlay=false;

      }
    }


  }

  if (!continuePlay) {
    for (var i = 0; i < grid.length; i++) {
      grid[i].removeEventListener("click", selectCell, false);
    }
  }

}
