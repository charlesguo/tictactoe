// window.onload = clearReset;
$(document).ready(clearReset);

var winningComb = [0b000000111,
  0b000111000,
  0b111000000,
  0b001001001,
  0b010010010,
  0b100100100,
  0b100010001,
  0b001010100,
];

var grid = $('.cell');
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
  grid.html("");
  grid.css('background-color', 'transparent');
  grid.on('click', selectCell);
  // for (var i = 0; i < grid.length; i++) {
  //     grid[i].innerHTML = "";
  //     grid[i].style.backgroundColor = "transparent";
  //     grid[i].addEventListener("click", selectCell, false);
  //  }
}


document.getElementById("resetButton").addEventListener("click", clearReset);

function selectCell() {
  if (!$(this).innerHTML) {
    if (sign) {
      $(this).html("X");
      $(this).css('background-color', 'red');
      historicalX += Math.pow(2, parseInt($(this).attr('id')));
    } else {
      $(this).html("O");
      $(this).css('background-color', 'blue');
      historicalO += Math.pow(2, parseInt($(this).attr('id')));
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
    // for (var i = 0; i < grid.length; i++) {
    //   grid[i].removeEventListener("click", selectCell, false);
    // }
    grid.off('click', selectCell);
  }

}
