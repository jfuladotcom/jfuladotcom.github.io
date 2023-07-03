document.getElementById("bank").innerHTML = 250;
var blocker = document.getElementById("blocker");

function genNum() {  return Math.floor(Math.random() * (8 - 1 + 1)) + 1;  }

var slotOne = document.getElementById("slotOneImg");  
var slotTwo = document.getElementById("slotTwoImg");  
var slotThree = document.getElementById("slotThreeImg");  

function getSlotOne(){  	return slotOne.src = "imgs/"+genNum()+".svg";    }
function getSlotTwo(){  	return slotTwo.src = "imgs/"+genNum()+".svg";    }
function getSlotThree(){  	return slotThree.src = "imgs/"+genNum()+".svg";  }

var betLine = document.getElementById("bet");
var bankPrint = document.getElementById("bank");
var results = document.getElementById("results");

//function bankThis(){ return bankId.innerHTML = ""+bank+""; }
function bankThis(){ 
	 var bankId = bankPrint.innerHTML;
	 if(betLine.innerHTML == 1){  		var betNum = 10; 
	 }else if(betLine.innerHTML == 2){  var betNum = 20;
	 }else if(betLine.innerHTML == 3){  var betNum = 30;
	 }else{ var betNum = 0; }
	 var userBets = ""+parseInt(bankId) - parseInt(betNum)+"";
	 return bankPrint.innerHTML = parseInt(userBets);
 }

 function betThis(){
	var betId = betLine.innerHTML;
	if(betLine.innerHTML < 3){
		return betLine.innerHTML = parseInt(betId) + 1; 
	}	
}
 function betThisDown(){
	var betId = betLine.innerHTML;
	if(betLine.innerHTML > 1){
		return betLine.innerHTML = parseInt(betId) - 1; 
	}	
}

function getResults(){
	var resultsOne = getSlotOne().charAt(5);
	var resultsTwo = getSlotTwo().charAt(5);
	var resultsThree = getSlotThree().charAt(5);
	results.innerHTML = parseInt(resultsOne) + parseInt(resultsTwo) + parseInt(resultsThree);
	var allResults = parseInt(resultsOne) + parseInt(resultsTwo) + parseInt(resultsThree);

	var addBank = bankPrint.innerHTML; 
	
	if(allResults  == 3){  
		bankPrint.innerHTML = parseInt(addBank) + 13 * parseInt(betLine.innerHTML); 
	}else if(allResults == 6){ 
		bankPrint.innerHTML = parseInt(addBank) + 16 * parseInt(betLine.innerHTML); 
	}else if(allResults == 9){ 
		bankPrint.innerHTML = parseInt(addBank) + 19 * parseInt(betLine.innerHTML); 
	}else if(allResults == 12){ 
		bankPrint.innerHTML = parseInt(addBank) + 22 * parseInt(betLine.innerHTML); 
	}else if(allResults == 15){ 
		bankPrint.innerHTML = parseInt(addBank) + 25 * parseInt(betLine.innerHTML); 
	}else if(allResults == 18){ 
		bankPrint.innerHTML = parseInt(addBank) + 28 * parseInt(betLine.innerHTML); 
	}else if(allResults == 21){ 
		bankPrint.innerHTML = parseInt(addBank) + 31 * parseInt(betLine.innerHTML); 
	}else if(allResults == 24){ 
		bankPrint.innerHTML = parseInt(addBank) + 34 * parseInt(betLine.innerHTML); 
	}else{
		bankPrint.innerHTML = addBank;
	}
}

document.getElementById("slotBtn").addEventListener('click', function(){
	blocker.style.display = "block";
	var i = 0;
    var interval = setInterval(function(){ 
        if (i == 8) clearInterval(interval);
        getSlotOne();  getSlotTwo();   getSlotThree(); 
        i++;
        
    }, 500);

    if(bankPrint.innerHTML <= 0){
		document.getElementById("gameOver").style.display = "block";    
		document.getElementById("gameOverBoard").style.display = "none";    	
		document.getElementById("gameOverBtns").style.display = "none";    	
		document.getElementById("gameOverScore").style.display = "none";    	
    }else{
    	setTimeout(function(){	
    		blocker.style.display = "none";
    		getResults();  
    	},5000);	
    	
    	bankThis();	
    }   
});


document.getElementById("betBtn").addEventListener('click', function(){
	 betThis(); 
});
document.getElementById("betDownBtn").addEventListener('click', function(){
	 betThisDown(); 
});
document.getElementById("gameOver").addEventListener('click', function(){
	 window.location.reload(true); 
});


  

