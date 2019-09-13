var bucket = [];
var binToDec = 0;
var btn = ["btn1", "btn2", "btn3", "btn4"];
var score = 0;

function startGame(){
	score = 0;
	header.innerText = "Binary to Decimal";
	clearHome();
	setGame();
	timeCount();	
	randomQuestion();
	document.getElementById("score").innerHTML = "score: " + score;
}

function hexGame(){
	score = 0;
	header.innerText = "Hexadecimal to decimal";
	timeCount();
	clearHome();
	setGame();
	randomQuestion_hex();
	document.getElementById("score").innerHTML = "score: " + score;
}

function randomQuestion(){
	var correctAns = btn[rand(4)];
	bucket = [];	
	var w = rand(2);
	var x = rand(2);
	var y = rand(2);
	var z = rand(2);
	num1.innerText = w;
	num2.innerText = x;
	num3.innerText = y;
	num4.innerText = z;

	// convert to string
	var wToString = w.toString();
	var xToString = x.toString();
	var yToString = y.toString();
	var zToString = z.toString();
	var decResultString = wToString.concat(xToString, yToString, zToString);

	// convert to integer

	var binInt = parseInt(decResultString);

	// calaulate bin to dec
	binToDec = bin2dec(binInt);
	num5.innerText = binToDec;

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

function timeCount(){
	for (let i = 10; i >= 0; i--) {
		if (i == 0) {
			setTimeout(function(){
				setGameEnd();
			}, 1000*(10-i));
			
		}
		setTimeout(function(){
			time.innerText = "Time: " + i;
		}, 1000*(10-i));
		
	}
	
}

function checkAnswer(){
	document.getElementById('btn1').onclick = function() {
		if (parseInt(document.getElementById('btn1').innerHTML) == binToDec) {
			score++;
			document.getElementById("score").innerHTML = "score:" + score;
			randomQuestion();
		}
		else if (parseInt(document.getElementById('btn1').innerHTML) == hexToDec) {
			score++;
			document.getElementById("score").innerHTML = "score:" + score;
			randomQuestion_hex();
		}
	};
	document.getElementById('btn2').onclick = function() {
		if (parseInt(document.getElementById('btn2').innerHTML) == binToDec) {
			score++;
			document.getElementById("score").innerHTML = "score:" + score;
			randomQuestion();
		}
		else if (parseInt(document.getElementById('btn2').innerHTML) == hexToDec) {
			score++;
			document.getElementById("score").innerHTML = "score:" + score;
			randomQuestion_hex();
		}
	};
	document.getElementById('btn3').onclick = function() {
		if (parseInt(document.getElementById('btn3').innerHTML) == binToDec) {
			score++;
			document.getElementById("score").innerHTML = "score:" + score;
			randomQuestion();
		}
		else if (parseInt(document.getElementById('btn3').innerHTML) == hexToDec) {
			score++;
			document.getElementById("score").innerHTML = "score:" + score;
			randomQuestion_hex();
		}
	};
	document.getElementById('btn4').onclick = function() {
		if (parseInt(document.getElementById('btn4').innerHTML) == binToDec) {
			score++;
			document.getElementById("score").innerHTML = "score:" + score;
			randomQuestion();
		}
		else if (parseInt(document.getElementById('btn4').innerHTML) == hexToDec) {
			score++;
			document.getElementById("score").innerHTML = "score:" + score;
			randomQuestion_hex();
		}
	};


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

/////////////ฐานสิบหกไปฐานสิบ
function hex2dec(hex){
	return parseInt(hex, 16);
}




function randomQuestion_hex(){
	var correctAns = btn[rand(4)];
	bucket = [];
	var items = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
	

	var x = items[rand(items.length)];
	var y = items[rand(items.length)];
	num2.innerText = x;
	num3.innerText = y;
	// convert to string
	var xToString = x.toString();
	var yToString = y.toString();
	var hexResultString = xToString.concat(yToString);

	// calaulate hex to dec
	hexToDec = hex2dec(hexResultString);
	document.getElementById("num5").innerHTML = hexToDec;

	for (var i=0;i<=255;i++) {
		if (i!=hexToDec) {
			bucket.push(i);
		}
	}
	
	for (i=0; i<=4; i++){	
		document.getElementById(correctAns).innerHTML = hexToDec;
		if(btn[i] != btn[correctAns]){
			document.getElementById(btn[i]).innerHTML = getRandomFromBucket();
		}
	}

}

function menu(){
	endGame.style.opacity = 0;
	endGame.style.zIndex = -2;
	gameArea.style.opacity = 0;
	gameArea.style.zIndex = -1;
	home.style.opacity = 1;
	home.style.zIndex = 3;
}

function setGame(){
	gameArea.style.opacity = 1;
	gameArea.style.zIndex = 2;
}

function clearHome(){
	home.style.opacity = 0;
	home.style.zIndex = -2;
}

function setGameEnd(){	
	endGame.style.opacity = 1;
	endGame.style.zIndex = 2;
	showScore.innerText = score;
}

function clearGameEnd(){
	endGame.style.opacity = 0;
	endGame.style.zIndex = -2;
	timeCount();
	score = 0;
	document.getElementById("score").innerHTML = "score: " + score;
}

