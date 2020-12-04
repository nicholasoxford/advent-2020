var fs = require("fs");
var array = fs.readFileSync("input.txt").toString().split("\n");
var slopes = [
  [1, 1, 0],
  [3, 1, 0],
  [5, 1, 0],
  [7, 1, 0],
  [1, 2, 0],
];
slopes.forEach(tuple => 
  tuple[2] = checkTree(tuple)
);
console.log(slopes[0][2] * slopes[1][2] * slopes[2][2] * slopes[3][2] * slopes[4][2]);

function checkTree(cords) {
  var treeHits = 0;
  var i = 0;
  var t = [0, 0];
  while (i < array.length - 1) {
    var row = array[t[1]];
    if (row) row = row.repeat(t[0] / 10);
    if (row && row[t[0]] == "#") treeHits++;
    t[0] += cords[0];
    t[1] += cords[1];
    i++;
  }
  return treeHits;
}
