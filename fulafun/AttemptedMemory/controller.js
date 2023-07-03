
function getParameterByName(name, url) {
    if (!url) url = window.location.href;            
    name = name.replace(/[\[\]]/g, "\\$&");            
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);            
    if (!results) return null;            
    if (!results[2]) return '';            
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
  
  var tryRecord = getParameterByName('tryRecord');

 //var rand = ['one','two','three','four','five','six','seven','eight','nine'];
 
 var rand = ['1','2','3','4','5','6','7','8','9'];
     rand.sort(function(x,y) {
    return 0.5 - Math.random()
 });

 document.getElementById('a').innerHTML = rand[0];
 document.getElementById('b').innerHTML = rand[1];
 document.getElementById('c').innerHTML = rand[2];
 document.getElementById('d').innerHTML = rand[3];
 document.getElementById('e').innerHTML = rand[4];
 document.getElementById('f').innerHTML = rand[5];
 document.getElementById('g').innerHTML = rand[6];
 document.getElementById('h').innerHTML = rand[7];
 document.getElementById('i').innerHTML = rand[8];

  let one = document.querySelector("#aClick");
   one.classList.add(rand[0]);
  let two = document.querySelector("#bClick");
   two.classList.add(rand[1]);
  let three = document.querySelector("#cClick");
   three.classList.add(rand[2]);
  let four = document.querySelector("#dClick");
   four.classList.add(rand[3]);
  let five = document.querySelector("#eClick");
   five.classList.add(rand[4]);
  let six = document.querySelector("#fClick");
   six.classList.add(rand[5]);  
  let seven = document.querySelector("#gClick");
   seven.classList.add(rand[6]);  
  let eight = document.querySelector("#hClick");
   eight.classList.add(rand[7]);   
  let nine = document.querySelector("#iClick");
   nine.classList.add(rand[8]);   

  let onea = document.querySelector("#a");
   onea.classList.add(rand[0]+'a');
  let twoa = document.querySelector("#b");
   twoa.classList.add(rand[1]+'a');
  let threea = document.querySelector("#c");
   threea.classList.add(rand[2]+'a');
  let foura = document.querySelector("#d");
   foura.classList.add(rand[3]+'a');
  let fivea = document.querySelector("#e");
   fivea.classList.add(rand[4]+'a');
  let sixa = document.querySelector("#f");
   sixa.classList.add(rand[5]+'a');  
  let sevena = document.querySelector("#g");
   sevena.classList.add(rand[6]+'a');  
  let eighta = document.querySelector("#h");
   eighta.classList.add(rand[7]+'a');   
  let ninea = document.querySelector("#i");
   ninea.classList.add(rand[8]+'a');   

  var count = 0;
  
  $('.1').click(function(){       
    if(count == 0){ 
      $('.1').css({"background-color":"#282c3d"});
      $('.1a').css({"opacity":"1"}); count++;
    } else{ return killSwitch();  }
  });
  $('.2').click(function(){   
    if(count == 1){ 
      $('.2').css({"background-color":"#282c3d"});
      $('.2a').css({"opacity":"1"}); count++;
    } else{ return killSwitch();  }
  });
  $('.3').click(function(){  
    if(count == 2){ 
      $('.3').css({"background-color":"#282c3d"});
      $('.3a').css({"opacity":"1"}); count++;
    } else{ return killSwitch();  }
  });
  $('.4').click(function(){   
    if(count == 3){ 
      $('.4').css({"background-color":"#282c3d"});
      $('.4a').css({"opacity":"1"}); count++;
    } else{ return killSwitch();  }
  });
  $('.5').click(function(){   
    if(count == 4){ 
      $('.5').css({"background-color":"#282c3d"});
      $('.5a').css({"opacity":"1"}); count++;
    } else{ return killSwitch();  }
  });
  $('.6').click(function(){    
    if(count == 5){ 
      $('.6').css({"background-color":"#282c3d"});
      $('.6a').css({"opacity":"1"}); count++;
    } else{ return killSwitch();  }
  });
   $('.7').click(function(){  
    if(count == 6){ 
      $('.7').css({"background-color":"#282c3d"});
      $('.7a').css({"opacity":"1"}); count++;
    } else{ return killSwitch();  }
  });
    $('.8').click(function(){ 
    if(count == 7){ 
      $('.8').css({"background-color":"#282c3d"});
      $('.8a').css({"opacity":"1"}); count++;
    } else{ return killSwitch();  }
  });
     $('.9').click(function(){  
    if(count == 8){ 
      $('.9').css({"background-color":"#282c3d"});
      $('.9a').css({"opacity":"1"}); 
    return killSwitch();
    } else{ return killSwitch();  }
  });

var tryCount = Number(tryRecord) + 1;
var tryCountReset = Number(tryCount) + 1;
$('#reset').click(function(){    window.location.href = 'attempt.html?tryRecord='+tryCount+'';  });
$('#restart').click(function(){  window.location.href = 'attempt.html';  });

function killSwitch(){  
   $(".container").hide();
   $(".results").show();
    if(count < 8){
       document.getElementById('brain').src ="sad.svg"; 
       document.getElementById('count').innerHTML = '<h3>That is the wrong number. <br> Try attempt number ' +tryCountReset+ ' ?</h3>';
       $(".reset").show();
    }else {
      document.getElementById('brain').src ="happy.svg"; 
       document.getElementById('count').innerHTML = '<h3>Hey, you got it on ' +tryCount+ ' Attempts!</h3>';
       $(".restart").show();
   }
   if (tryCount == 1 && count == 8) { 
    document.getElementById('brain').src ="happy.svg"; 
    document.getElementById('count').innerHTML = '<h3>- WOW -<br> First attempt, great memory!</h3>';
    $(".restart").show();  
  }
}

document.getElementById('try').innerHTML = tryCount;
  
setTimeout(function(){  
  $(".fadeMe").css({"opacity":"0"});
  $(".blocky").css({"background-color":"#363e5a"});
  $(".blocker").hide();

}, 3000);
 
