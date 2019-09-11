//random number
function randomQuestion(){
	var w = rand(2);
	var x = rand(2);
	var y = rand(2);
	var z = rand(2);
	document.getElementById("demo1").innerHTML = w;
	document.getElementById("demo2").innerHTML = x;
	document.getElementById("demo3").innerHTML = y;
	document.getElementById("demo4").innerHTML = z;
}

function checkAnswer(){
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
}



//random button
function randomAnswer(){
	var bucket = [];

	for (var i=0;i<=15;i++) {
		if (i!=bin2dec(binInt)) {
			bucket.push(i);
		}
	}

	var btn = ["btn1", "btn2", "btn3", "btn4"];
	var correctAns = btn[rand(4)];
	for (i=0; i<=4; i++){	
		document.getElementById(correctAns).innerHTML = bin2dec(binInt);
		if(btn[i] != btn[correctAns]){
			document.getElementById(btn[i]).innerHTML = getRandomFromBucket();
		}
	}
}


function getRandomFromBucket() {
	var randomIndex = Math.floor(Math.random()*bucket.length);
	return bucket.splice(randomIndex, 1)[0];
}




function bin2dec(bin){
	return parseInt(bin, 2).toString(10);
}

function rand(max) {
	return Math.floor(Math.random() * Math.floor(max));
}