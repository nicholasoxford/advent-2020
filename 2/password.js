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
    var num1 = Number(minMax[0]) - 1;
    var num2 = Number(letterCheck[0]) - 1

    var textArray = infoAndPassword[1].split("")
    if (textArray[num1] && textArray[num1].toString() === letterCheck[1].toString())
        if (textArray[num2] && textArray[num2].toString() == letterCheck[1].toString()) 
            nextTick
        else 
            v++
    else if (textArray[num2] && textArray[num2].toString() === letterCheck[1].toString()) 
        v++
    else
        nextTick
    i++
}
  console.log(v)


    
