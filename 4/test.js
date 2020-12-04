var falsey = ["byr:2003", "hgt:190in", "hgt:190", "hcl:#123abz", "hcl:123abc", "ecl:wat", "pid:0123456789"];

var truey = ["byr:2002", "hgt:60in", "hgt:190cm", "hcl:#123abc", "ecl:brn", "pid:000000001", ];
FalseResult = [];
TrueResult = [];
falsey.forEach((x) => FalseResult.push(validateItems(x.split(":"))));
truey.forEach((x) => TrueResult.push(validateItems(x.split(":"))));
console.log(FalseResult);
console.log(TrueResult);
function validateItems(items) {
  if (items[0] == "byr") {
    if (items[1] >= 1920 && items[1] <= 2002) return true;
    else return false;
  } else if (items[0] == "iyr") {
    if (items[1] >= 2010 && items[1] <= 2020) return true;
    else return false;
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
