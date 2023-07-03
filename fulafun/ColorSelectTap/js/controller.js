function getParameterByName(name, url) {
    if (!url) url = window.location.href;            
    name = name.replace(/[\[\]]/g, "\\$&");            
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);            
    if (!results) return null;            
    if (!results[2]) return '';            
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
 
var score = getParameterByName('score');
var count = 0;

$('#red, #blue, #orange, #yellow, #purple, #green').show();   
var shapeOrder = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

var delayOne =   1000;
var delayTwo =   1500;
var delayThree = 2000;
var delayFour =  2500;
var delayFive =  3000;
var delaySix =   3500; 
    
if (shapeOrder == 1){

   var red = delayOne;      
   var blue = delayTwo;     
   var orange = delayThree;   
   var yellow = delayFour;  
   var purple = delayFive;   
   var green = delaySix; 

   setTimeout(function(){ 
      $('#redWrong').hide();  $('#redCorrect').show();        
   }, 3000);

   //background: radial-gradient(#e66465, #000000);

   $('#red').css({'width':'0px','height':'0px','background': '#325d7f'});   
   $('#blue').css({'width':'0px','height':'0px','background': '#6d5c7e'});   
   $('#orange').css({'width':'0px','height':'0px','background': '#c06c86'});   
   $('#yellow').css({'width':'0px','height':'0px','background': '#f2727f'});   
   $('#purple').css({'width':'0px','height':'0px','background': '#f9b294'});   
   $('#green').css({'width':'0px','height':'0px','background': '#f9d994'});   

    $("#redCorrect").click(function(){ 
     count++;
      $('#red').css({'width':'0px','height':'0px','background-color': '#325d7f'});        
      $('#blueWrong').hide();  $('#blueCorrect').show();        
    });

    $("#blueCorrect").click(function(){ 
      count++;
      $('#blue').css({'width':'0px','height':'0px','background-color': '#6d5c7e'});    
      $('#orangeWrong').hide();  $('#orangeCorrect').show();        
    });    

    $("#orangeCorrect").click(function(){ 
      count++;
      $('#orange').css({'width':'0px','height':'0px','background-color': '#c06c86'});  
      $('#yellowWrong').hide();  $('#yellowCorrect').show();          
    });    

    $("#yellowCorrect").click(function(){ 
      count++;
      $('#yellow').css({'width':'0px','height':'0px','background-color': '#f2727f'});   
      $('#purpleWrong').hide();  $('#purpleCorrect').show();         
    }); 

    $("#purpleCorrect").click(function(){ 
      count++;
      $('#purple').css({'width':'0px','height':'0px','background-color': '#f9b294'});   
      $('#greenWrong').hide();  $('#greenCorrect').show();         
    }); 

    $("#greenCorrect").click(function(){ 
      count++;
      $('#green').css({'width':'0px','height':'0px','background-color': '#f9d994'});

      var scoreTab = Number(score) + Number(count);
      $('#top').show();        
      document.getElementById('play').innerHTML = "Next";
      document.getElementById('score').innerHTML = scoreTab; 
        $("#next").click(function(){ 
        window.location.href = "game.html?score="+scoreTab+"";        
      });   
    });

}else if(shapeOrder == 2){

   var blue = delayOne;   
   var orange = delayTwo;    
   var yellow = delayThree;   
   var purple = delayFour;     
   var green = delayFive;      
   var red = delaySix; 

   $('#red').css({'width':'0px','height':'0px','background-color': '#91b8c0'});   
   $('#blue').css({'width':'0px','height':'0px','background-color': '#98b998'});      
   $('#orange').css({'width':'0px','height':'0px','background-color': '#facfa9'});
   $('#yellow').css({'width':'0px','height':'0px','background-color': '#f1837d'});   
   $('#purple').css({'width':'0px','height':'0px','background-color': '#e84c62'});   
   $('#green').css({'width':'0px','height':'0px','background-color': '#9b1d2f'});


   setTimeout(function(){ 
    $('#blueWrong').hide();  $('#blueCorrect').show();  
   }, 3000);      
   
    $("#blueCorrect").click(function(){ 
      count++;
      $('#blue').css({'width':'0px','height':'0px'});    
      $('#orangeWrong').hide();  $('#orangeCorrect').show();        
    });    

    $("#orangeCorrect").click(function(){ 
      count++;
      $('#orange').css({'width':'0px','height':'0px'});  
      $('#yellowWrong').hide();  $('#yellowCorrect').show();          
    });    

    $("#yellowCorrect").click(function(){ 
      count++;
      $('#yellow').css({'width':'0px','height':'0px'});   
      $('#purpleWrong').hide();  $('#purpleCorrect').show();         
    }); 

    $("#purpleCorrect").click(function(){ 
      count++;
      $('#purple').css({'width':'0px','height':'0px'});   
      $('#greenWrong').hide();  $('#greenCorrect').show();         
    });

     $("#greenCorrect").click(function(){ 
      count++;
      $('#green').css({'width':'0px','height':'0px'});
      $('#redWrong').hide();  $('#redCorrect').show();         
    });

     $("#redCorrect").click(function(){ 
     count++;
      $('#red').css({'width':'0px','height':'0px'});        
      
      var scoreTab = Number(score) + Number(count);
      $('#top').show();        
      document.getElementById('play').innerHTML = "Next";
      document.getElementById('score').innerHTML = scoreTab; 
        $("#next").click(function(){ 
        window.location.href = "game.html?score="+scoreTab+"";        
      });   
    });
        

}else if(shapeOrder == 3){

   var orange = delayOne;      
   var yellow = delayTwo;     
   var purple = delayThree;   
   var green = delayFour;   
   var red = delayFive;   
   var blue = delaySix; 

   $('#red').css({'width':'0px','height':'0px','background-color': '#f7bbb7'});   
   $('#blue').css({'width':'0px','height':'0px','background-color': '#f7ddb7'});      
   $('#orange').css({'width':'0px','height':'0px','background-color': '#e4f0c1'});
   $('#yellow').css({'width':'0px','height':'0px','background-color': '#a1d5aa'});   
   $('#purple').css({'width':'0px','height':'0px','background-color': '#42ada7'});   
   $('#green').css({'width':'0px','height':'0px','background-color': '#577b82'});

   setTimeout(function(){ 
    $('#orangeWrong').hide();  $('#orangeCorrect').show();   
   }, 3000);           
   
    $("#orangeCorrect").click(function(){ 
      count++;
      $('#orange').css({'width':'0px','height':'0px'});  
      $('#yellowWrong').hide();  $('#yellowCorrect').show();          
    });    

    $("#yellowCorrect").click(function(){ 
      count++;
      $('#yellow').css({'width':'0px','height':'0px'});   
      $('#purpleWrong').hide();  $('#purpleCorrect').show();         
    }); 

    $("#purpleCorrect").click(function(){ 
      count++;
      $('#purple').css({'width':'0px','height':'0px'});   
      $('#greenWrong').hide();  $('#greenCorrect').show();         
    });

     $("#greenCorrect").click(function(){ 
      count++;
      $('#green').css({'width':'0px','height':'0px'});
      $('#redWrong').hide();  $('#redCorrect').show();         
    });

     $("#redCorrect").click(function(){ 
     count++;
      $('#red').css({'width':'0px','height':'0px'});        
      $('#blueWrong').hide();  $('#blueCorrect').show(); 
    });

      $("#blueCorrect").click(function(){ 
        count++;
        $('#blue').css({'width':'0px','height':'0px'});          
        var scoreTab = Number(score) + Number(count);
        $('#top').show();        
        document.getElementById('play').innerHTML = "Next";
        document.getElementById('score').innerHTML = scoreTab; 
        $("#next").click(function(){ 
           window.location.href = "game.html?score="+scoreTab+"";        
        });         
    });   

}else if(shapeOrder == 4){

   var yellow = delayOne;      
   var purple = delayTwo;     
   var green = delayThree;   
   var red = delayFour;   
   var blue = delayFive;   
   var orange = delaySix; 

   $('#red').css({'width':'0px','height':'0px','background-color': '#ec7748'});   
   $('#blue').css({'width':'0px','height':'0px','background-color': '#ec4868'});      
   $('#orange').css({'width':'0px','height':'0px','background-color': '#f49a99'});
   $('#yellow').css({'width':'0px','height':'0px','background-color': '#f9ceac'});   
   $('#purple').css({'width':'0px','height':'0px','background-color': '#c4c6a9'});   
   $('#green').css({'width':'0px','height':'0px','background-color': '#83ae9a'});

      

   setTimeout(function(){ 
      $('#yellowWrong').hide();  $('#yellowCorrect').show();    
   }, 3000);

    $("#yellowCorrect").click(function(){ 
      count++;
      $('#yellow').css({'width':'0px','height':'0px'});   
      $('#purpleWrong').hide();  $('#purpleCorrect').show();         
    }); 

    $("#purpleCorrect").click(function(){ 
      count++;
      $('#purple').css({'width':'0px','height':'0px'});   
      $('#greenWrong').hide();  $('#greenCorrect').show();         
    });

     $("#greenCorrect").click(function(){ 
      count++;
      $('#green').css({'width':'0px','height':'0px'});
      $('#redWrong').hide();  $('#redCorrect').show();         
    });

     $("#redCorrect").click(function(){ 
     count++;
      $('#red').css({'width':'0px','height':'0px'});        
      $('#blueWrong').hide();  $('#blueCorrect').show(); 
    });

      $("#blueCorrect").click(function(){ 
        count++;
        $('#blue').css({'width':'0px','height':'0px'});          
        $('#orangeWrong').hide();  $('#orangeCorrect').show();                  
    });   

    $("#orangeCorrect").click(function(){ 
      count++;
      $('#orange').css({'width':'0px','height':'0px'});        
      var scoreTab = Number(score) + Number(count);
        $('#top').show();        
        document.getElementById('play').innerHTML = "Next";
        document.getElementById('score').innerHTML = scoreTab; 
        $("#next").click(function(){ 
           window.location.href = "game.html?score="+scoreTab+"";        
        });   
    });    

}else if(shapeOrder == 5){

   var purple = delayOne;      
   var green = delayTwo;     
   var red = delayThree;   
   var blue = delayFour;   
   var orange = delayFive;   
   var yellow = delaySix; 

   $('#red').css({'width':'0px','height':'0px','background-color': '#bef2ca'});   
   $('#blue').css({'width':'0px','height':'0px','background-color': '#dfefc2'});      
   $('#orange').css({'width':'0px','height':'0px','background-color': '#e9e975'});
   $('#yellow').css({'width':'0px','height':'0px','background-color': '#f4d72b'});   
   $('#purple').css({'width':'0px','height':'0px','background-color': '#f39242'});   
   $('#green').css({'width':'0px','height':'0px','background-color': '#ed5257'});

    
   setTimeout(function(){ 
      $('#purpleWrong').hide();  $('#purpleCorrect').show();   
   }, 3000);

    $("#purpleCorrect").click(function(){ 
      count++;
      $('#purple').css({'width':'0px','height':'0px'});   
      $('#greenWrong').hide();  $('#greenCorrect').show();         
    });

     $("#greenCorrect").click(function(){ 
      count++;
      $('#green').css({'width':'0px','height':'0px'});
      $('#redWrong').hide();  $('#redCorrect').show();         
    });

     $("#redCorrect").click(function(){ 
     count++;
      $('#red').css({'width':'0px','height':'0px'});        
      $('#blueWrong').hide();  $('#blueCorrect').show(); 
    });

      $("#blueCorrect").click(function(){ 
        count++;
        $('#blue').css({'width':'0px','height':'0px'});          
        $('#orangeWrong').hide();  $('#orangeCorrect').show();                  
    });   

    $("#orangeCorrect").click(function(){ 
      count++;
      $('#orange').css({'width':'0px','height':'0px'});        
      $('#yellowWrong').hide();  $('#yellowCorrect').show();     
    });  

    $("#yellowCorrect").click(function(){ 
      count++;
      $('#yellow').css({'width':'0px','height':'0px'});   
       var scoreTab = Number(score) + Number(count);
        $('#top').show();        
        document.getElementById('play').innerHTML = "Next";
        document.getElementById('score').innerHTML = scoreTab; 
        $("#next").click(function(){ 
           window.location.href = "game.html?score="+scoreTab+"";        
        });      
    }); 

}else if(shapeOrder == 6){

   var green = delayOne;      
   var red = delayTwo;     
   var blue = delayThree;   
   var orange = delayFour;   
   var yellow = delayFive;   
   var purple = delaySix; 

   $('#red').css({'width':'0px','height':'0px','background-color': '#f2becc'});   
   $('#blue').css({'width':'0px','height':'0px','background-color': '#e8c2ef'});      
   $('#orange').css({'width':'0px','height':'0px','background-color': '#af75e9'});
   $('#yellow').css({'width':'0px','height':'0px','background-color': '#722bf4'});   
   $('#purple').css({'width':'0px','height':'0px','background-color': '#424af3'});   
   $('#green').css({'width':'0px','height':'0px','background-color': '#52a4ed'});

   setTimeout(function(){ 
     $('#greenWrong').hide();  $('#greenCorrect').show();  
   }, 3000); 

     $("#greenCorrect").click(function(){ 
      count++;
      $('#green').css({'width':'0px','height':'0px'});
      $('#redWrong').hide();  $('#redCorrect').show();         
    });

     $("#redCorrect").click(function(){ 
     count++;
      $('#red').css({'width':'0px','height':'0px'});        
      $('#blueWrong').hide();  $('#blueCorrect').show(); 
    });

      $("#blueCorrect").click(function(){ 
        count++;
        $('#blue').css({'width':'0px','height':'0px'});          
        $('#orangeWrong').hide();  $('#orangeCorrect').show();                  
    });   

    $("#orangeCorrect").click(function(){ 
      count++;
      $('#orange').css({'width':'0px','height':'0px'});        
      $('#yellowWrong').hide();  $('#yellowCorrect').show();     
    });  

    $("#yellowCorrect").click(function(){ 
      count++;
      $('#yellow').css({'width':'0px','height':'0px'});          
      $('#purpleWrong').hide();  $('#purpleCorrect').show();
    }); 

     $("#purpleCorrect").click(function(){ 
      count++;
      $('#purple').css({'width':'0px','height':'0px'});         
      var scoreTab = Number(score) + Number(count);
        $('#top').show();        
        document.getElementById('play').innerHTML = "Next";
        document.getElementById('score').innerHTML = scoreTab; 
        $("#next").click(function(){ 
           window.location.href = "game.html?score="+scoreTab+"";        
        });               
    });
}

  $("#redWrong, #blueWrong, #orangeWrong, #yellowWrong, #purpleWrong, #greenWrong").click(function(){ 
    $('#red, #blue, #orange, #yellow, #purple, #green').css({'width':'0px','height':'0px'});
      $('#top').show();   
       var scoreTab = Number(score) + Number(count);
        document.getElementById('play').innerHTML = "Next";
        document.getElementById('score').innerHTML = scoreTab; 
        $("#next").click(function(){ 
           window.location.href = "game.html?score="+scoreTab+"";        
        });              
  }); 

setTimeout(function(){   $('#red').css({'width':'50px','height':'50px'});     }, red);
setTimeout(function(){   $('#blue').css({'width':'50px','height':'50px'});    }, blue);
setTimeout(function(){   $('#orange').css({'width':'50px','height':'50px'});  }, orange);
setTimeout(function(){   $('#yellow').css({'width':'50px','height':'50px'});  }, yellow);
setTimeout(function(){   $('#purple').css({'width':'50px','height':'50px'});  }, purple);
setTimeout(function(){   $('#green').css({'width':'50px','height':'50px'});   }, green);

// Duplicate of random
var topNumRed = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
var rightNumRed = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
var leftNumRed = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
var bottomNumRed = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
$('#red').css({'top': ''+topNumRed+'%', 'right': ''+rightNumRed+'%', 'bottom': ''+leftNumRed+'%', 'left': ''+bottomNumRed+'%'});           

var topNumOrange = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
var rightNumOrange = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
var leftNumOrange = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
var bottomNumOrange = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
$('#orange').css({'top': ''+topNumOrange+'%', 'right': ''+rightNumOrange+'%', 'bottom': ''+leftNumOrange+'%', 'left': ''+bottomNumOrange+'%'});           

var topNumYellow = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
var rightNumYellow = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
var leftNumYellow = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
var bottomNumYellow = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
$('#yellow').css({'top': ''+topNumYellow+'%', 'right': ''+rightNumYellow+'%', 'bottom': ''+leftNumYellow+'%', 'left': ''+bottomNumYellow+'%'});           

var topNumGreen = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
var rightNumGreen = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
var leftNumGreen = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
var bottomNumGreen = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
$('#green').css({'top': ''+topNumGreen+'%', 'right': ''+rightNumGreen+'%', 'bottom': ''+leftNumGreen+'%', 'left': ''+bottomNumGreen+'%'});           

var topNumBlue = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
var rightNumBlue = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
var leftNumBlue = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
var bottomNumBlue = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
$('#blue').css({'top': ''+topNumBlue+'%', 'right': ''+rightNumBlue+'%', 'bottom': ''+leftNumBlue+'%', 'left': ''+bottomNumBlue+'%'});           

var topNumPurple = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
var rightNumPurple = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
var leftNumPurple = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
var bottomNumPurple = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
$('#purple').css({'top': ''+topNumPurple+'%', 'right': ''+rightNumPurple+'%', 'bottom': ''+leftNumPurple+'%', 'left': ''+bottomNumPurple+'%'});           

setTimeout(function(){  
    setInterval(function(){

        var topNumRed = Math.floor(Math.random() * (90 - 1 + 1)) + 1;
        var rightNumRed = Math.floor(Math.random() * (90 - 1 + 1)) + 1;
        var leftNumRed = Math.floor(Math.random() * (90 - 1 + 1)) + 1;
        var bottomNumRed = Math.floor(Math.random() * (90 - 1 + 1)) + 1;
        $('#red').css({'top': ''+topNumRed+'%', 'right': ''+rightNumRed+'%', 'bottom': ''+leftNumRed+'%', 'left': ''+bottomNumRed+'%'});           

        var topNumOrange = Math.floor(Math.random() * (90 - 1 + 1)) + 1;
        var rightNumOrange = Math.floor(Math.random() * (90 - 1 + 1)) + 1;
        var leftNumOrange = Math.floor(Math.random() * (90 - 1 + 1)) + 1;
        var bottomNumOrange = Math.floor(Math.random() * (90 - 1 + 1)) + 1;
        $('#orange').css({'top': ''+topNumOrange+'%', 'right': ''+rightNumOrange+'%', 'bottom': ''+leftNumOrange+'%', 'left': ''+bottomNumOrange+'%'});           

        var topNumYellow = Math.floor(Math.random() * (90 - 1 + 1)) + 1;
        var rightNumYellow = Math.floor(Math.random() * (90 - 1 + 1)) + 1;
        var leftNumYellow = Math.floor(Math.random() * (90 - 1 + 1)) + 1;
        var bottomNumYellow = Math.floor(Math.random() * (90 - 1 + 1)) + 1;
        $('#yellow').css({'top': ''+topNumYellow+'%', 'right': ''+rightNumYellow+'%', 'bottom': ''+leftNumYellow+'%', 'left': ''+bottomNumYellow+'%'});           

        var topNumGreen = Math.floor(Math.random() * (90 - 1 + 1)) + 1;
        var rightNumGreen = Math.floor(Math.random() * (90 - 1 + 1)) + 1;
        var leftNumGreen = Math.floor(Math.random() * (90 - 1 + 1)) + 1;
        var bottomNumGreen = Math.floor(Math.random() * (90 - 1 + 1)) + 1;
        $('#green').css({'top': ''+topNumGreen+'%', 'right': ''+rightNumGreen+'%', 'bottom': ''+leftNumGreen+'%', 'left': ''+bottomNumGreen+'%'});           

        var topNumBlue = Math.floor(Math.random() * (90 - 1 + 1)) + 1;
        var rightNumBlue = Math.floor(Math.random() * (90 - 1 + 1)) + 1;
        var leftNumBlue = Math.floor(Math.random() * (90 - 1 + 1)) + 1;
        var bottomNumBlue = Math.floor(Math.random() * (90 - 1 + 1)) + 1;
        $('#blue').css({'top': ''+topNumBlue+'%', 'right': ''+rightNumBlue+'%', 'bottom': ''+leftNumBlue+'%', 'left': ''+bottomNumBlue+'%'});           

        var topNumPurple = Math.floor(Math.random() * (90 - 1 + 1)) + 1;
        var rightNumPurple = Math.floor(Math.random() * (90 - 1 + 1)) + 1;
        var leftNumPurple = Math.floor(Math.random() * (90 - 1 + 1)) + 1;
        var bottomNumPurple = Math.floor(Math.random() * (90 - 1 + 1)) + 1;
        $('#purple').css({'top': ''+topNumPurple+'%', 'right': ''+rightNumPurple+'%', 'bottom': ''+leftNumPurple+'%', 'left': ''+bottomNumPurple+'%'});           
     
    },1000);
}, 3000);


