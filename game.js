var bucket = [];
var binToDec = 0;
var btn = ["btn1", "btn2", "btn3", "btn4"];
var score = 0;

function startGame(){
	score = 0;
	// timeCount();	
	randomQuestion();
	document.getElementById("score").innerHTML = "score:" + score;
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
	document.getElementById("num5").innerHTML = decResultString;

	// convert to integer

	var binInt = parseInt(decResultString);

	// calaulate bin to dec
	binToDec = bin2dec(binInt);
	document.getElementById("num5").innerHTML = binToDec;

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

function setGameEnd(){
	let btn = document.createElement("BUTTON");
	btn.setAttribute("id","tryA");
	endGame.appendChild(btn);
	tryA.innerText = "Try Again";
	endGame.style.opacity = 1;
	endGame.style.zIndex = 1;
	showScore.innerText = score;
	document.getElementById("tryA").onclick = clearGameEnd;
}

function clearGameEnd(){
	endGame.style.opacity = 0;
	endGame.style.zIndex = -1;
	tryA.outerHTML = "";
	startGame();
}

function checkAnswer(){
	document.getElementById('btn1').onclick = function() {
		if (parseInt(document.getElementById('btn1').innerHTML) == binToDec) {
			score++;
			document.getElementById("score").innerHTML = "score:" + score;
			randomQuestion();
		}
	};
	document.getElementById('btn2').onclick = function() {
		if (parseInt(document.getElementById('btn2').innerHTML) == binToDec) {
			score++;
			document.getElementById("score").innerHTML = "score:" + score;
			randomQuestion();
		}
	};
	document.getElementById('btn3').onclick = function() {
		if (parseInt(document.getElementById('btn3').innerHTML) == binToDec) {
			score++;
			document.getElementById("score").innerHTML = "score:" + score;
			randomQuestion();
		}
	};
	document.getElementById('btn4').onclick = function() {
		if (parseInt(document.getElementById('btn4').innerHTML) == binToDec) {
			score++;
			document.getElementById("score").innerHTML = "score:" + score;
			randomQuestion();
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
function hex2dec(bin){
	return parseInt(bin, 16).toString(10);
}


function hexGame(){
	score = 0;
	// timeCount();
	randomQuestion_hex();
	
	document.getElementById("score").innerHTML = "score:" + score;
}

function randomQuestion_hex(){
	var correctAns = btn[rand(4)];
	bucket = [];
	var items = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
	

	var w = items[Math.floor(Math.random()*16)];
	var x = items[Math.floor(Math.random()*16)];
	var y = items[Math.floor(Math.random()*16)];
	var z = items[Math.floor(Math.random()*16)];
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
	document.getElementById("num5").innerHTML = decResultString;

	// convert to integer

	var binInt = parseInt(decResultString);

	// calaulate hex to dec
	hexToDec = hex2dec(binInt);
	document.getElementById("num5").innerHTML = hexToDec;

	for (var i=0;i<=15;i++) {
		if (i!=hexToDec) {
			bucket.push(i);
		}
	}
	
	for (i=0; i<=4; i++){	
		document.getElementById(correctAns).innerHTML = hexToDec(binInt);
		if(btn[i] != btn[correctAns]){
			document.getElementById(btn[i]).innerHTML = getRandomFromBucket();
		}
	}

}

///////////////////