//random
var w = rand(2);
var x = rand(2);
var y = rand(2);
var z = rand(2);
document.getElementById("demo1").innerHTML = w;
document.getElementById("demo2").innerHTML = x;
document.getElementById("demo3").innerHTML = y;
document.getElementById("demo4").innerHTML = z;

// convert to string
var wToString = w.toString();
var xToString = x.toString();
var yToString = y.toString();
var zToString = z.toString();
var decResult = wToString.concat(xToString, yToString, zToString);
document.getElementById("demo5").innerHTML = decResult;
		
// convert to integer

var binInt = parseInt(decResult);

// calaulate bin to dec
document.getElementById("demo5").innerHTML = bin2dec(binInt);

//random button
var btn = ["btn1", "btn2", "btn3", "btn4"];
var correctAns = btn[rand(4)];


//answer button
document.getElementById(correctAns).innerHTML = bin2dec(binInt);
// document.getElementById("btn2").innerHTML = rand(16);
// document.getElementById("btn3").innerHTML = rand(16);
// document.getElementById("btn4").innerHTML = rand(16);

function bin2dec(bin){
	return parseInt(bin, 2).toString(10);
}

function rand(max) {
	return Math.floor(Math.random() * Math.floor(max));
}