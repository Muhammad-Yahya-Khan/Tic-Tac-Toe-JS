function isEven(number) {
  if (number % 2 === 0) return true;
  else return false;
}

function checkForWin(sign) {
  box1 = document.getElementById(1).innerHTML;
  box2 = document.getElementById(2).innerHTML;
  box3 = document.getElementById(3).innerHTML;
  box4 = document.getElementById(4).innerHTML;
  box5 = document.getElementById(5).innerHTML;
  box6 = document.getElementById(6).innerHTML;
  box7 = document.getElementById(7).innerHTML;
  box8 = document.getElementById(8).innerHTML;
  box9 = document.getElementById(9).innerHTML;

  if (
    (box1 === sign && box2 === sign && box3 === sign) ||
    (box4 === sign && box5 === sign && box6 === sign) ||
    (box7 === sign && box8 === sign && box9 === sign) ||
    (box1 === sign && box5 === sign && box9 === sign) ||
    (box3 === sign && box5 === sign && box7 === sign) ||
    (box1 === sign && box4 === sign && box7 === sign) ||
    (box2 === sign && box5 === sign && box8 === sign) ||
    (box3 === sign && box6 === sign && box9 === sign)
  ) {
    return true;
  } else return false;
}

var count = 0;
var valueTobeWritten;

function onClick(boxNumber) {
  var box = document.getElementById(boxNumber);

  if (!isEven(count)) valueTobeWritten = "O";
  else if (isEven(count)) valueTobeWritten = "X";

  if (box.innerHTML == "") {
    box.innerHTML = valueTobeWritten;
    count++;
  }

  if (checkForWin(valueTobeWritten)) {
    if (valueTobeWritten === "O") alert("Player 1 Won");
    else alert("Player 2 Won");
  }
}
