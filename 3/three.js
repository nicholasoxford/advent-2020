var fs = require("fs");
var array = fs.readFileSync("input.txt").toString().split("\n");
var testObj = [
  [1, 1, 0],
  [3, 1, 0],
  [5, 1, 0],
  [7, 1, 0],
  [1, 2, 0],
];
testObj.forEach((tuple) => {
  tuple[2] = checkTree(tuple);
});
console.log(testObj[0][2]*testObj[1][2]*testObj[2][2]*testObj[3][2]*testObj[4][2]);
    
function checkTree( cords) {
  var x = cords[0];
  var y = cords[1];
  var tempTree = 0;
  var i = 0;
  var t = [0, 0];
  while (i < array.length - 1) {
    var tempString = array[t[1]];
      if (tempString) tempString = tempString.repeat(Math.floor(t[0] / 10) + 1);
      if (tempString && tempString[t[0]] == "#") tempTree = tempTree + 1;
    t[0] += x;
    t[1] += y;
    i++;
  }
  return tempTree;
}
