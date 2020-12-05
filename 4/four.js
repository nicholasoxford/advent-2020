var seven = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
var fs = require("fs");
var array = fs.readFileSync("input.txt").toString().split("\n");
var truthy = (arr) => arr.every((v) => v === true);
var checker = (arr, target) => target.every((v) => arr.includes(v));
var testNumber = 0;
var allPassports = combineLines();
allPassports.forEach((passport) => {
  var codesAndValue = passport.split(" ");
  var listOfCodes = [];
  var ListData = [];
  codesAndValue.forEach((item) => {
    if (item) var codes = item.split(":");
    if (codes) {
      listOfCodes.push(codes[0]);
      ListData.push(codes);
    }
  });
  if (listOfCodes) var check = checker(listOfCodes, seven);
  if (check == true) {
    var isGood = [];
    ListData.forEach((x) => {
      isGood.push(validateItems(x));
    });

    if (truthy(isGood) && isGood.length > 2) testNumber++;
  }
});

function combineLines() {
  var i = 0;
  var allPassports = [];
  var tempLines = [];
  while (i < array.length) {
    tempLines.push(array[i]);
    if (array[i] == "") {
      allPassports.push(tempLines.join(" "));
      tempLines = [];
    }
    i++;
  }
  return allPassports;
}

function validateItems(items) {
  if (items[0] == "byr") {
    if (items[1] >= 1920 && items[1] <= 2002) return true;
  } else if (items[0] == "iyr") {
    if (items[1] >= 2010 && items[1] <= 2020) return true;
  } else if (items[0] == "eyr") {
    if (items[1] >= 2020 && items[1] <= 2030) return true;
  } else if (items[0] == "pid") {
    console.log(items[0], items[1], items[1].length);
    if (items[1].length == 9) return true;
  } else if (items[0] == "cid") {
    return true;
  } else if (items[0] == "hgt") {
    var parms = items[1].slice(-2);
    var int = parseInt(items[1].replace(parms, ""));
    if (parms == "cm") {
      if (int >= 150 && int <= 193) return true;
    }
    if (parms == "in") if (int >= 59 && int <= 76) return true;
  } else if (items[0] == "hcl") {
    if (items[1].substring(0, 1) == "#") {
      if (items[1].substring(1, 7).match("^[A-Fa-f0-9]+$") == items[1].substring(1, 7)) 
        return true;
    } 
  } else if (items[0] == "ecl") {
    var eyeColor = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
    if ((items[1].length = 2)) return eyeColor.includes(items[1]);
  }
  else return false;
}
