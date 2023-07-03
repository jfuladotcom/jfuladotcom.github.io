	
	var bkgrdMusic = document.getElementById("bkgrdMusic"); 
	bkgrdMusic.play(); 
  var bulb = document.getElementById("bulb"); 
  var monster = document.getElementById("monster"); 

	$("#middle").click(function(){   
		
		var number = Math.floor(Math.random() * (5 - 1 + 1)) + 1; 
	 	 if(number == 4 || number == 1 || number == 2 || number == 5 || number == 5){
      bulb.play();  
      $("#blocker").show();    
			document.getElementById("middle").src = "imgs/002.png"; 				
			$("#middle").addClass('swing');
			setTimeout(function(){ $("#middle").removeClass('swing'); }, 2000);
			setTimeout(function(){ document.getElementById("middle").src = "imgs/002.png"; }, 2500);     
    	setTimeout(function(){ document.getElementById("middle").src = "imgs/001.png"; }, 2600);     
    	setTimeout(function(){ document.getElementById("middle").src = "imgs/002.png"; }, 2700);     
    	setTimeout(function(){ document.getElementById("middle").src = "imgs/001.png"; }, 2900); 			
      setTimeout(function(){ $("#blocker").hide();   }, 3000);      
                  
		}else if(number == 3){
      monster.play();  
			$("#middle").hide(); $("#kerato").show();
		    $("#shake, #bkgrdOne, #bkgrdTwo").addClass("shake");
			setTimeout(function(){ 
				$("#middle").show(); $("#kerato").hide();
        $("#shake, #bkgrdOne, #bkgrdTwo").removeClass("shake");
			}, 2300);
		}    
    });   
