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

function bin2dec(bin){
	return parseInt(bin, 2).toString(10);
}

function rand(max) {
	return Math.floor(Math.random() * Math.floor(max));
}