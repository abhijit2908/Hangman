var usrinput;
var wins=0;
var words=['Cat','Dog','Horse','Camel','Elephant','Cow','Giraffe','Tiger','Lion'];
var Losses=0;
var guessesLeft=10;
var letterGuessed= [];
var computerGuess= words[Math.floor(Math.random() * words.length)].toLowerCase();
console.log(computerGuess);
var maskWord=computerGuess.replace(/./g,'-');
console.log(maskWord);
console.log(guessesLeft);
console.log(letterGuessed);
document.onkeyup = function(event){
	usrinput=event.key;
	usrinput=usrinput.toLowerCase();
	//console.log(usrinput);
if((maskWord !== computerGuess) && (guessesLeft !== 0)){
		//console.log(computerGuess.includes(usrinput));
		if (computerGuess.includes(usrinput)){
		for (var i = 0; i < computerGuess.length; i++) {
			console.log("in for loop");
			//console.log(computerGuess.substr(i,i+1));

			if(computerGuess.substr(i,1)==usrinput){
				//console.log(computerGuess.substr(i,1));
				maskWord=maskWord.substr(0,i)+usrinput+maskWord.substr(i+1,(maskWord.length)-i-1);
				console.log(maskWord);
					

		}
	}
}
else{
		if(!letterGuessed.includes(usrinput)){


		guessesLeft--;
		letterGuessed.push(usrinput);
	}
		console.log(guessesLeft);
		console.log(letterGuessed);
		if(guessesLeft === 0){
				Losses++;
				console.log("Losses:"+Losses);
				guessesLeft=10;
				letterGuessed=[];
				computerGuess= words[Math.floor(Math.random() * words.length)].toLowerCase();
				console.log(computerGuess);
				maskWord=computerGuess.replace(/./g,'-');
				console.log(maskWord);

			}
}
}

 if(maskWord===computerGuess){
	console.log(maskWord);
	wins++;
	console.log("Wins:"+wins);
	guessesLeft=10;
	letterGuessed=[];
	computerGuess= words[Math.floor(Math.random() * words.length)].toLowerCase();
	console.log(computerGuess);
	maskWord=computerGuess.replace(/./g,'-');
	console.log(maskWord);
}
		
	
			
	}




