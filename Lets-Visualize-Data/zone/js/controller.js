



document.getElementById("bugTable").addEventListener("click", function(){
    document.getElementById("mapImg").src = "imgs/Asset-36.svg";     
    document.getElementById("timelineImg").src = "imgs/Asset-37.svg";     
    document.getElementById("bkgrdContainer").style.backgroundImage  = "url('imgs/Asset-34.svg')"; 
    
    document.getElementById("SaversBar").style.width  = "50%";
    document.getElementById("SaversWarning").style.width  = "60%";
    document.getElementById("SaversBug").style.width  = "30%";

    document.getElementById("metOne").innerHTML  = "456";
    document.getElementById("metTwo").innerHTML  = "35";
    document.getElementById("metThree").innerHTML  = ".65";
    document.getElementById("metFour").innerHTML  = "90<sup>o</sup>";

    document.getElementById("metFive").innerHTML  = "3551";
    document.getElementById("metSix").innerHTML  = "1682";
    document.getElementById("metSeven").innerHTML  = "5.489";
    document.getElementById("metEight").innerHTML  = "964";

}, false);  
document.getElementById("warningTable").addEventListener("click", function(){
    document.getElementById("mapImg").src = "imgs/Asset-41.svg"; 
    document.getElementById("timelineImg").src = "imgs/Asset-49.svg";                
    document.getElementById("bkgrdContainer").style.backgroundImage  = "url('imgs/Asset-48.svg')"; 

    document.getElementById("SaversBar").style.width  = "40%";
    document.getElementById("SaversWarning").style.width  = "35%";
    document.getElementById("SaversBug").style.width  = "50%";

    document.getElementById("metOne").innerHTML  = "856";
    document.getElementById("metTwo").innerHTML  = "68";
    document.getElementById("metThree").innerHTML  = ".34";
    document.getElementById("metFour").innerHTML  = "35<sup>o</sup>";

    document.getElementById("metFive").innerHTML  = "6682";
    document.getElementById("metSix").innerHTML  = "6859";
    document.getElementById("metSeven").innerHTML  = "6.893";
    document.getElementById("metEight").innerHTML  = "348";
}, false);  
document.getElementById("saversTable").addEventListener("click", function(){
    document.getElementById("mapImg").src = "imgs/Asset-44.svg";    
    document.getElementById("timelineImg").src = "imgs/Asset-50.svg";             
    document.getElementById("bkgrdContainer").style.backgroundImage  = "url('imgs/Asset-45.svg')"; 

    document.getElementById("SaversBar").style.width  = "25%";
    document.getElementById("SaversWarning").style.width  = "40%";
    document.getElementById("SaversBug").style.width  = "35%";

    document.getElementById("metOne").innerHTML  = "987";
    document.getElementById("metTwo").innerHTML  = "36";
    document.getElementById("metThree").innerHTML  = ".15";
    document.getElementById("metFour").innerHTML  = "89<sup>o</sup>";

    document.getElementById("metFive").innerHTML  = "3477";
    document.getElementById("metSix").innerHTML  = "9634";
    document.getElementById("metSeven").innerHTML  = "1.348";
    document.getElementById("metEight").innerHTML  = "135";
}, false);  
document.getElementById("shieldTable").addEventListener("click", function(){
    document.getElementById("mapImg").src = "imgs/Asset-43.svg";            
    document.getElementById("timelineImg").src = "imgs/Asset-51.svg";     
    document.getElementById("bkgrdContainer").style.backgroundImage  = "url('imgs/Asset-46.svg')"; 

    document.getElementById("SaversBar").style.width  = "10%";
    document.getElementById("SaversWarning").style.width  = "20%";
    document.getElementById("SaversBug").style.width  = "55%";

    document.getElementById("metOne").innerHTML  = "789";
    document.getElementById("metTwo").innerHTML  = "57";
    document.getElementById("metThree").innerHTML  = ".15";
    document.getElementById("metFour").innerHTML  = "38<sup>o</sup>";

    document.getElementById("metFive").innerHTML  = "3478";
    document.getElementById("metSix").innerHTML  = "4567";
    document.getElementById("metSeven").innerHTML  = "8.683";
    document.getElementById("metEight").innerHTML  = "854";
}, false);  
document.getElementById("lockedTable").addEventListener("click", function(){
    document.getElementById("mapImg").src = "imgs/Asset-42.svg";            
    document.getElementById("timelineImg").src = "imgs/Asset-52.svg";     
    document.getElementById("bkgrdContainer").style.backgroundImage  = "url('imgs/Asset-47.svg')"; 

    document.getElementById("SaversBar").style.width  = "30%";
    document.getElementById("SaversWarning").style.width  = "40%";
    document.getElementById("SaversBug").style.width  = "10%";

    document.getElementById("metOne").innerHTML  = "458";
    document.getElementById("metTwo").innerHTML  = "98";
    document.getElementById("metThree").innerHTML  = ".68";
    document.getElementById("metFour").innerHTML  = "98<sup>o</sup>";

    document.getElementById("metFive").innerHTML  = "7582";
    document.getElementById("metSix").innerHTML  = "1254";
    document.getElementById("metSeven").innerHTML  = "1.384";
    document.getElementById("metEight").innerHTML  = "468";
}, false);  


//clock 
var timeHours = new Date().getHours();  
var timeMins = new Date().getMinutes();      
setInterval(function(){
  var timeMins = new Date().getMinutes();  
  var timeSeconds = new Date().getSeconds();    
  if(timeMins < 10){ var zeroMin = 0; }else{ var zeroMin = ""; }
  if(timeSeconds < 10){ var zero = 0; }else{ var zero = ""; }
  if(timeHours > 12){ var timeAmPm = Number(timeHours) - 12; }else{ var timeAmPm = timeHours;  }
var timeStamp = timeAmPm + ":" + zeroMin + "" + timeMins + ":" + zero + "" + timeSeconds;
document.getElementById("clock").innerHTML = timeStamp;
}, 0);



	var date = new Date();	
	var months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sept', 'Oct',	'Nov', 'Dec'];        
    document.getElementById("dateTime").innerHTML = months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();


