var bucket = [];
var binToDec = 0;
var btn = ["btn1", "btn2", "btn3", "btn4"];
var correctAns = btn[rand(4)];

//random number
function randomQuestion(){
	bucket = [];
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
	var decResultString = wToString.concat(xToString, yToString, zToString);
	document.getElementById("demo5").innerHTML = decResultString;

	// convert to integer

	var binInt = parseInt(decResultString);

	// calaulate bin to dec
	binToDec = bin2dec(binInt);
	document.getElementById("demo5").innerHTML = binToDec;

	

	for (var i=0;i<=15;i++) {
		if (i!=binToDec) {
			bucket.push(i);
		}
	}
	
	for (i=0; i<=4; i++){	
		document.getElementById(correctAns).innerHTML = bin2dec(binInt);
		if(btn[i] != btn[correctAns]){
			document.getElementById(btn[i]).innerHTML = getRandomFromBucket();
		}
	}
}



function checkAnswer(){
	// var ansOnBtn = document.getElementById().value;
	// if (bin2dec(binInt) == ansOnBtn) {
	// 	randomQuestion();
	// }
	document.getElementById('btn1').onclick = function() {
		if (document.getElementById('btn1').value == binToDec) {
			randomQuestion();
		}
	};
	document.getElementById('btn2').onclick = function() {
		if (document.getElementById('btn2').value == binToDec) {
			randomQuestion();
		}
	};
	document.getElementById('btn3').onclick = function() {
		if (document.getElementById('btn3').value == binToDec) {
			randomQuestion();
		}
	};
	document.getElementById('btn4').onclick = function() {
		if (document.getElementById('btn4').value == binToDec) {
			randomQuestion();
		}
	};

}

// function checkClick(){
// 	document.getElementById("btn1").addEventListener("click", checkAnswer);
// 	document.getElementById("btn2").addEventListener("click", checkAnswer);
// 	document.getElementById("btn3").addEventListener("click", checkAnswer);
// 	document.getElementById("btn4").addEventListener("click", checkAnswer);
// }


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