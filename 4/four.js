// byr (Birth Year)
// iyr (Issue Year)
// eyr (Expiration Year)
// hgt (Height)
// hcl (Hair Color)
// ecl (Eye Color)
// pid (Passport ID)
// cid (Country ID)

var seven = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
var fs = require("fs");
var array = fs.readFileSync("input.txt").toString().split("\n");
var truthy = arr => arr.every(v => v === true);
var checker = (arr, target) => target.every((v) => arr.includes(v));
var testNumber = 0;
var badNumber = 0;
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
      
      if (truthy(isGood) && isGood.length > 2)
          testNumber++;
  }
    else badNumber++
});
console.log(testNumber, badNumber, allPassports.length);
// byr (Birth Year) - four digits; at least 1920 and at most 2002.

// iyr (Issue Year) - four digits; at least 2010 and at most 2020.
// eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
// hgt (Height) - a number followed by either cm or in:
// If cm, the number must be at least 150 and at most 193.
// If in, the number must be at least 59 and at most 76.
// hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
// ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
// pid (Passport ID) - a nine-digit number, including leading zeroes.

// var validPassports = 0;
// allCodes.forEach((listOfCodes) => {
//   let isValid = checker(listOfCodes, seven);
//   if (isValid == true) validPassports += 1;
// });
// console.log(validPassports);

function validateItems(items) {
    if (items[0] == "byr") {
      if (items[1] >= 1920 && items[1] <= 2002) return true;
      else return false;
    } else if (items[0] == "iyr") {
      if (items[1] <= 2010 && items[1] >= 2020) return false;
      else return true;
    } else if (items[0] == "eyr") {
      if (items[1] <= 2020 && items[1] >= 2030) return false;
      else return true;
    } else if (items[0] == "pid") {
      console.log(items[0], items[1], items[1].length)
      if ((items[1].length == 9)) return true;
      else return false;
    } else if (items[0] == "cid") {
      return true;
    } else if (items[0] == "hgt") {
      var parms = items[1].slice(-2);
      var int = parseInt(items[1].replace(parms, ""));
      if (parms == "cm") {
        if (int >= 150 && int <= 193) return true;
        else return false;
      }
      if (parms == "in") {
        if (int >= 59 && int <= 76) return true;
        else return false;
      } else return false;
    } else if (items[0] == "hcl") {
      if (items[1].substring(0, 1) == "#") {
        if (items[1].substring(1, 7).match("^[A-Fa-f0-9]+$") == items[1].substring(1, 7)) {
          return true;
        } else return false;
      } else return false;
    } else if (items[0] == "ecl") {
      var eyeColor = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
      if ((items[1].length = 2)) return eyeColor.includes(items[1]);
      else return false;
    }
  }

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

// var seven = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
// var fs = require("fs");
// var array = fs.readFileSync("input.txt").toString().split("\n");
// var allCodes = [];
// var allPassports = combineLines();
// allPassports.forEach((passport) => {
//   var codesAndValue = passport.split(" ");
//   var listOfCodes = [];
//   codesAndValue.forEach((item) => {
//     if (item) var codes = item.split(":");
//       if (codes) {
//           var areValid = validateItems(codes);
//           if(codes && areValid ===true)
//           listOfCodes.push(codes[0])
//       }
//   });
//   allCodes.push(listOfCodes);
// });

// var validPassports = 0;
// allCodes.forEach((listOfCodes) => {
//   let checker = (arr, target) => target.every((v) => arr.includes(v));
//     let isValid = checker(listOfCodes, seven);
//   if (isValid == true) validPassports += 1;
// });
// console.log(validPassports);

// function combineLines() {
//   var i = 0;
//   var allPassports = [];
//   var tempLines = [];
//   while (i < array.length) {
//     tempLines.push(array[i]);
//     if (array[i] == "") {
//       allPassports.push(tempLines.join(" "));
//       tempLines = [];
//     }
//     i++;
//   }
//   return allPassports;
// }
