// burn your eyes
var fs = require('fs');
const { nextTick } = require('process');
var array = fs.readFileSync('input.txt').toString().split("\n");
var length = array.length - 1
var i = 0;
var v = 0;

while (i < length)
{
    var infoAndPassword = array[i].split(": ")
    var minMax = infoAndPassword[0].split("-")
    var letterCheck = minMax[1].split(" ");
    var infoCheck = {
        minNumber: Number(minMax[0]),
        maxNumber: Number(letterCheck[0]),
        specialChar: letterCheck[1],
        password: infoAndPassword[1],
    }
    var num1 = infoCheck.minNumber - 1;
    var num2 = infoCheck.maxNumber - 1

    var textArray = infoCheck.password.split("")
    if (textArray[num1] && textArray[num1].toString() === infoCheck.specialChar.toString())
        if (textArray[num2] && textArray[num2].toString() == infoCheck.specialChar.toString()) 
            nextTick
        else 
            v++
    else if (textArray[num2] && textArray[num2].toString() === infoCheck.specialChar.toString()) 
        v++
    else
        nextTick
    i++
}
  console.log(v)


    
