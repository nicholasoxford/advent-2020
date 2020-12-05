// Every seat also has a unique seat ID: multiply the row by 8,
// then add the column.In this example, the seat has ID 44 * 8 + 5 = 357.

var fs = require("fs");
var array = fs.readFileSync("input.txt").toString().split("\n");
var Ids = [];
topID = 0;
array.forEach((ticket) => {
  var { row, column } = rowAndSet(ticket);
  if (row && column) Ids.push(row * 8 + column);
});
Ids.sort((a, b) => {
  return a - b;
});
var counter = Ids[0] - 1;
console.log(Ids)

Ids.forEach((id) => {
  counter = counter + 1;
  console.log(counter, id);
  if (counter != id) {
    console.log("Your seat ID is: " + counter);
    stop;
  }
});

function rowAndSet(ticket) {
  var tempPlaneRows = [0, 127];
  var tempPlaneColumn = [0, 7];
  var seatLine = ticket.substring(0, 6).split("");
  seatLine.forEach((x) => {
    if (x == "F") {
      tempPlaneRows = [Math.round(tempPlaneRows[0]), tempPlaneRows[1] - (tempPlaneRows[1] - tempPlaneRows[0] + 1) / 2];
    } else if (x == "B") {
      tempPlaneRows = [tempPlaneRows[0] + (tempPlaneRows[1] - tempPlaneRows[0] + 1) / 2, tempPlaneRows[1]];
    }
  });
  var row = lastRow(ticket.substring(6, 7), tempPlaneRows);
  var columLine = ticket.substring(7, 10).split("");
  columLine.forEach((x) => {
    if (x == "L") tempPlaneColumn = [tempPlaneColumn[0], tempPlaneColumn[1] - (tempPlaneColumn[1] - tempPlaneColumn[0] + 1) / 2];
    else if (x == "R") {
      tempPlaneColumn = [tempPlaneColumn[0] + (tempPlaneColumn[1] - tempPlaneColumn[0] + 1) / 2, tempPlaneColumn[1]];
    }
  });
  var column = lastRow(ticket.substring(9, 10), tempPlaneColumn);
  return { ticket, row, column };
}

function lastRow(key, value) {
  if (key == "F" || key == "R") {
    return value[0];
  } else if (key == "B" || key == "L") return value[1];
}
