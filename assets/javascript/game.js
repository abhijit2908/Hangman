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

/*function draw() {
        var canvas = document.getElementById('tutorial');
        if (canvas.getContext) {
          var ctx = canvas.getContext('2d');
          
          ctx.moveTo(175,350);
			ctx.lineTo(0,350);
			ctx.stroke();


	          ctx.lineTo(0,0);
	          ctx.stroke();

          ctx.lineTo(175,0);
          ctx.stroke();

          ctx.lineTo(175,25);
          ctx.stroke();

          ctx.moveTo(175,55);
          ctx.beginPath();
          ctx.arc(175,55, 30,0, Math.PI * 2);
          ctx.stroke();

          ctx.moveTo(175,85);
          ctx.lineTo(175,250);
          ctx.stroke();

          ctx.moveTo(175,110);
          ctx.lineTo(105,140);
          ctx.stroke();

          ctx.moveTo(175,110);
          ctx.lineTo(245,140);
          ctx.stroke();

          ctx.moveTo(175,250);
          ctx.lineTo(105,280);
          ctx.stroke();

           ctx.moveTo(175,250);
          ctx.lineTo(245,280);
          ctx.stroke();

        }
    }*/
  var animate = function (guessesLeft) {
   if(guessesLeft===9){
   	frame1();
   }
   else if (guessesLeft===8) {
   	frame2();
   }
   else if(guessesLeft === 7){
   	frame3();
   }
   else if(guessesLeft === 6){
    frame4();
   
   }
  else if(guessesLeft === 5){
      head();
  	
  }
  else if(guessesLeft === 4){
    torso();
  	
  }
  else if(guessesLeft === 3){
    rightArm();
  	
  }
  else if(guessesLeft === 2){
    leftArm();

  }
  else if(guessesLeft === 1){
    leftLeg();
  	
  }
  else if(guessesLeft === 0){
    rightLeg();
  }

}

  
   // Hangman
   redraw = function(){
   	var c = document.getElementById("tutorial");
  var ctx = c.getContext("2d");
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.beginPath();
   };

  canvas =  function(){

    myStickman = document.getElementById("tutorial");
    if (myStickman.getContext) {
    context = myStickman.getContext('2d');
    context.beginPath();
    context.strokeStyle = "#ddddd";
    context.lineWidth = 2;
}
  };
  
    
  draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
     myStickman = document.getElementById("tutorial");
      if (canvas.getContext) {
          var ctx = canvas.getContext('2d');
    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke(); }
}

   frame1 = function() {
     var canvas = document.getElementById('tutorial');
        if (canvas.getContext) {
          var ctx = canvas.getContext('2d');
          
          ctx.moveTo(175,350);
			ctx.lineTo(0,350);
			ctx.stroke();
		}
	}
   
   frame2 = function() {
   	var canvas = document.getElementById('tutorial');
        if (canvas.getContext) {
          var ctx = canvas.getContext('2d');
          
          ctx.lineTo(0,0);
	          ctx.stroke();
		}
   };
  
   frame3 = function() {
   	var canvas = document.getElementById('tutorial');
        if (canvas.getContext) {
          var ctx = canvas.getContext('2d');
      ctx.lineTo(175,0);
          ctx.stroke();
   };
};
  
   frame4 = function() {
   	var canvas = document.getElementById('tutorial');
        if (canvas.getContext) {
          var ctx = canvas.getContext('2d');
     ctx.lineTo(175,25);
          ctx.stroke();
   };
};
   head = function(){
   	var canvas = document.getElementById('tutorial');
        if (canvas.getContext) {
          var ctx = canvas.getContext('2d');
     ctx.moveTo(175,55);
          ctx.beginPath();
          ctx.arc(175,55, 30,0, Math.PI * 2);
          ctx.stroke();
    };
};
  
   torso = function() {
   	var canvas = document.getElementById('tutorial');
        if (canvas.getContext) {
          var ctx = canvas.getContext('2d');
      ctx.moveTo(175,85);
          ctx.lineTo(175,250);
          ctx.stroke();
   };
};
  
   rightArm = function() {
   	var canvas = document.getElementById('tutorial');
        if (canvas.getContext) {
          var ctx = canvas.getContext('2d');
     ctx.moveTo(175,110);
          ctx.lineTo(245,140);
          ctx.stroke();
   };
};
  
   leftArm = function() {
   	var canvas = document.getElementById('tutorial');
        if (canvas.getContext) {
          var ctx = canvas.getContext('2d');
    ctx.moveTo(175,110);
          ctx.lineTo(105,140);
          ctx.stroke();
   };
};
  
   rightLeg = function() {
   	var canvas = document.getElementById('tutorial');
        if (canvas.getContext) {
          var ctx = canvas.getContext('2d');
     ctx.moveTo(175,250);
          ctx.lineTo(245,280);
          ctx.stroke();
   };
  };
  
   leftLeg = function() {
   	var canvas = document.getElementById('tutorial');
        if (canvas.getContext) {
          var ctx = canvas.getContext('2d');
     ctx.moveTo(175,250);
          ctx.lineTo(105,280);
          ctx.stroke();
   };
  };

  reset= function(){
    guessesLeft=10;
        letterGuessed=[];
        computerGuess= words[Math.floor(Math.random() * words.length)].toLowerCase();
        console.log(computerGuess);
        maskWord=computerGuess.replace(/./g,'-');
        console.log(maskWord);
        redraw();

  };




document.onkeyup = function(event){
	usrinput=event.key;
	usrinput=usrinput.toLowerCase();
	//console.log(usrinput);
if((maskWord !== computerGuess) && (guessesLeft !== 0)){
		//console.log(computerGuess.includes(usrinput));
		if (computerGuess.includes(usrinput)){
		for (var i = 0; i < computerGuess.length; i++) {
			//console.log("in for loop");
			//console.log(computerGuess.substr(i,i+1));

			if(computerGuess.substr(i,1)==usrinput){
				//console.log(computerGuess.substr(i,1));
				maskWord=maskWord.substr(0,i)+usrinput+maskWord.substr(i+1,(maskWord.length)-i-1);
				//console.log(maskWord);
					

		}
	}
}
else{
		if(!letterGuessed.includes(usrinput)){


		guessesLeft--;
		letterGuessed.push(usrinput);

		animate(guessesLeft);
	}
		console.log(guessesLeft);
		console.log(letterGuessed);
		if(guessesLeft === 0){
      rightLeg();
    Losses++;

      alert("Game Over.Press Ok To Guess the next word.");
      
							console.log("Losses:"+Losses);
              reset();
				
				//animate(guessesLeft);

			}
}
}

 if(maskWord===computerGuess){
	//console.log(maskWord);
	wins++;
	//console.log("Wins:"+wins);
  //alert("You Guessed the Word.The word is "+computerGuess);
  reset();
}
	
var html=
"<h1>Hangman Game</h1>"+
"<p>Guess The Word</p>"+
"<p>Wins:"+wins+"</p>"+
"<p>Losses:"+Losses+"</p>"+
"<p>Word:"+maskWord+"</p>"+
"<p>Guessesleft:"+guessesLeft+"</p>"+
"<p>Guesss so far:"+letterGuessed+"</p>";
//"<button onclick="reset()">Reset</button>";
document.querySelector("#game").innerHTML = html;	
	
			}





