const ES1 = document.getElementById('enemyOneShip'); 
const ES2 = document.getElementById('enemyTwoShip'); 
const ES3 = document.getElementById('enemyThreeShip'); 
const ES4 = document.getElementById('enemyFourShip');

const MS1 = document.getElementById('mShipImg'); 
const MS2 = document.getElementById('mShipImgTwo'); 
const MS3 = document.getElementById('mShipImgThree'); 
const MS4 = document.getElementById('mShipImgFour'); 
const MS5 = document.getElementById('mShipImgFive'); 
const mShip = document.getElementById('mShip'); 
const mShipFive = document.getElementById('mShipFive'); 


const platform = document.getElementById('platform'); 
const year = document.getElementById('year'); 
const genre = document.getElementById('genre'); 
const sold = document.getElementById('sold'); 
const gameName = document.getElementById('gameName'); 

const letsPlay = document.getElementById('letsPlay');
const howTo = document.getElementById('howTo');

const dialog = document.getElementById('dialog');         
const btn = document.getElementById('btn');

const Gnumber = document.getElementById('Gnumber');
const playAgain = document.getElementById('playAgain');
const winner = document.getElementById('winner');
const ammo = document.getElementById('ammo');
let ammoCount = 999;


let platformCell  ="";
let yearCell ="";   
let genreCell  ="";
let soldCell ="";   
let game = "";

let SES1  ="";
let SEHS1 ="";         
let MSD ="imgs/mShipOneDestroy.svg";         

let level = "";

let count = 0;
let shipOneHit = 0;
let shipTwoHit = 0;
let shipThreeHit = 0;
let shipFourHit = 0;
let shipFiveHit = 0;

let nextLevelHit = 0;

const QueryString = window.location.search; 
const urlParams = new URLSearchParams(QueryString); 
const urlData =  urlParams.get('id');


// id refereances
const G1 = document.getElementById('spaceShip');
const G2 = document.getElementById('mainShip'); 

const E1 = document.getElementById('enemyOne'); 
const E2 = document.getElementById('enemyTwo'); 
const E3 = document.getElementById('enemyThree'); 
const E4 = document.getElementById('enemyFour'); 


// click functions
G1.addEventListener('click', (event) => {  
    G1.src ="imgs/spaceShip-shoot.svg";
    setTimeout(function(){ G1.src ="imgs/spaceShip.svg"; }, 100); 
});     



// space ship controller
let pageX = "";
function updateDisplay(event) {  pageX = event.pageX;  pageXTotal = pageX -50;  G2.style.left = +pageXTotal+"px"; }        
addEventListener("mousemove", updateDisplay, false);
addEventListener("mouseenter", updateDisplay, false);
addEventListener("mouseleave", updateDisplay, false);



// movment of the spaceship enemy
setInterval(function(){
    let topNumOne = Math.floor(Math.random() * (90 - 1 + 1)) + 1;
    let rightNumOne = Math.floor(Math.random() * (90 - 1 + 1)) + 1;
    let leftNumOne = Math.floor(Math.random() * (90 - 1 + 1)) + 1;
    let bottomNumOne = Math.floor(Math.random() * (90 - 1 + 1)) + 1;

    let topNumTwo = Math.floor(Math.random() * (90 - 1 + 1)) + 1;
    let rightNumTwo = Math.floor(Math.random() * (90 - 1 + 1)) + 1;
    let leftNumTwo = Math.floor(Math.random() * (90 - 1 + 1)) + 1;
    let bottomNumTwo = Math.floor(Math.random() * (90 - 1 + 1)) + 1;

    let topNumThree = Math.floor(Math.random() * (90 - 1 + 1)) + 1;
    let rightNumThree = Math.floor(Math.random() * (90 - 1 + 1)) + 1;
    let leftNumThree = Math.floor(Math.random() * (90 - 1 + 1)) + 1;
    let bottomNumThree = Math.floor(Math.random() * (90 - 1 + 1)) + 1;

    let topNumFour = Math.floor(Math.random() * (90 - 1 + 1)) + 1;
    let rightNumFour = Math.floor(Math.random() * (90 - 1 + 1)) + 1;
    let leftNumFour = Math.floor(Math.random() * (90 - 1 + 1)) + 1;
    let bottomNumFour = Math.floor(Math.random() * (90 - 1 + 1)) + 1;
    
    E1.style.top = +topNumOne+'%';
    E1.style.right = +rightNumOne+'%';
    E1.style.bottom = +leftNumOne+'%';
    E1.style.left = +bottomNumOne+'%';
    
    E2.style.top = +topNumTwo+'%';
    E2.style.right = +rightNumTwo+'%';
    E2.style.bottom = +leftNumTwo+'%';
    E2.style.left = +bottomNumTwo+'%';

    E3.style.top = +topNumThree+'%';
    E3.style.right = +rightNumThree+'%';
    E3.style.bottom = +leftNumThree+'%';
    E3.style.left = +bottomNumThree+'%';

    E4.style.top = +topNumFour+'%';
    E4.style.right = +rightNumFour+'%';
    E4.style.bottom = +leftNumFour+'%';
    E4.style.left = +bottomNumFour+'%';

  
},1000);


// Ship hit enemy

ES1.addEventListener('click', (event) => {  
    shipOneHit++;
    if(shipOneHit == 1){
        E1.style.opacity = 0;
        nextLevelHit++;
        platform.innerHTML = platformCell;
    }
    ES1.src = SEHS1;
    setTimeout(function(){ ES1.src = SES1; }, 50); 

});   

ES2.addEventListener('click', (event) => {  
    shipTwoHit++;
    if(shipTwoHit == 1){
        E2.style.opacity = 0;
        nextLevelHit++;
        year.innerHTML = yearCell;
    }
    ES2.src = SEHS1;
    setTimeout(function(){ ES2.src = SES1; }, 50); 
   
});   

ES3.addEventListener('click', (event) => {  
    shipThreeHit++;
    if(shipThreeHit == 1){
        E3.style.opacity = 0;
        nextLevelHit++;
        genre.innerHTML = genreCell;
    }
    ES3.src = SEHS1;
    setTimeout(function(){ ES3.src = SES1; }, 50); 

});   


ES4.addEventListener('click', (event) => {  
    shipFourHit++;
    if(shipFourHit == 1){
        E4.style.opacity = 0;
        nextLevelHit++;
        sold.innerHTML = soldCell;
    }
    ES4.src = SEHS1;
    setTimeout(function(){ ES4.src = SES1; }, 50); 

});   

MS5.addEventListener('click', (event) => {  
    shipFiveHit++;
    if(shipFiveHit == 25){        
        window.location.href = 'index.html?id=win'; 

    }else if (shipFiveHit == 5){
            platform.innerHTML = platformCell;
    }else if (shipFiveHit == 10){
        year.innerHTML = yearCell;
    }else if (shipFiveHit == 15){        
        genre.innerHTML = genreCell;
    }else if (shipFiveHit == 20){
        sold.innerHTML = soldCell;
    }
    MS5.src = "imgs/mShipFiveHit.svg";
    setTimeout(function(){ MS5.src = "imgs/mShipFive.svg"; }, 50); 

});   


playAgain.addEventListener('click', (event) => {  
        window.location.href = 'index.html'; 
});   

letsPlay.addEventListener('click', (event) => {  
    howTo.style.display = 'none'; 
});       
    



// Level controller

if( urlData == "2"){
    MS1.src ="imgs/mShipTwo.svg";
    MS2.src ="imgs/mShipThree.svg";
    MS3.src ="imgs/mShipFour.svg";
    MS4.style.display = "none";           

    SES1 = "imgs/enemy-02.svg";
    SEHS1 ="imgs/enemy-02-hit.svg";  
    
    ES1.src = "imgs/enemy-02.svg"; 
    ES2.src = "imgs/enemy-02.svg";
    ES3.src = "imgs/enemy-02.svg";
    ES4.src = "imgs/enemy-02.svg";
    
    MSD ="imgs/mShipTwoDestroy.svg";

    platformCell  ="Wii";
    yearCell ="2009";   
    genreCell  ="Sports";
    soldCell ="33 Mill";  
    gameName.innerHTML = "Wii Sports Resort";
    Gnumber.innerHTML = "Number 4"
    level = "3";

}else if( urlData == "3"){
    MS1.src ="imgs/mShipThree.svg";
    MS2.src ="imgs/mShipFour.svg";
    MS3.style.display ="none";
    MS4.style.display = "none";           

    SES1 ="imgs/enemy-03.svg";
    SEHS1 ="imgs/enemy-03-hit.svg";    

    ES1.src = "imgs/enemy-03.svg"; 
    ES2.src = "imgs/enemy-03.svg";
    ES3.src = "imgs/enemy-03.svg";
    ES4.src = "imgs/enemy-03.svg";
    
    MSD ="imgs/mShipThreeDestroy.svg";

    platformCell  ="Wii";
    yearCell ="2008";   
    genreCell  ="Racing";
    soldCell ="35.82 Mill";  
    gameName.innerHTML = "Mario Kart Wii";
    Gnumber.innerHTML = "Number 3"
    level = "4";
    

}else if( urlData == "4"){
    MS1.src ="imgs/mShipFour.svg";
    MS2.style.display ="none";
    MS3.style.display ="none";
    MS4.style.display = "none";           

    SES1 ="imgs/enemy-04.svg";
    SEHS1 ="imgs/enemy-04-hit.svg";   
    
    ES1.src = "imgs/enemy-04.svg"; 
    ES2.src = "imgs/enemy-04.svg";
    ES3.src = "imgs/enemy-04.svg";
    ES4.src = "imgs/enemy-04.svg";
    
    MSD ="imgs/mShipFourDestroy.svg";  
    
    platformCell  ="NES";
    yearCell ="1985";   
    genreCell  ="Platform";
    soldCell ="40.24 Mill";  
    gameName.innerHTML = "Super Mario Bros.";
    Gnumber.innerHTML = "Number 2";
    level = "5";

}else if( urlData == "5"){

    MS1.src ="none";
    MS2.style.display ="none";
    MS3.style.display ="none";
    MS4.style.display = "none";   
    mShip.style.display = "none";
    //Wii Sports
    platformCell  ="Wii";
    yearCell ="2006";   
    genreCell  ="Sports";
    soldCell ="82.74 Mill";  
    mShipFive.style.animationName = "galaxy"; 

}else if( urlData == "win"){

    MS1.src ="none";
    MS2.style.display ="none";
    MS3.style.display ="none";
    MS4.style.display = "none";   
    mShip.style.display = "none";
    mShipFive.style.display = "none";
    dialog.style.display = "none";
    winner.style.display = "block";
    //Wii Sports
    
}else{
    MS1.src ="imgs/mShipOne.svg";
    MS2.src ="imgs/mShipTwo.svg";
    MS3.src ="imgs/mShipThree.svg";
    MS4.src = "imgs/mShipFour.svg";           

    SES1 ="imgs/enemy-01.svg";
    SEHS1 ="imgs/enemy-01-hit.svg";  
    
    ES1.src = "imgs/enemy-01.svg"; 
    ES2.src = "imgs/enemy-01.svg";
    ES3.src = "imgs/enemy-01.svg";
    ES4.src = "imgs/enemy-01.svg";

    platformCell  ="Game Boy";
    yearCell ="1996";   
    genreCell  ="Role-Playing";
    soldCell ="31.37 Mill";  

    level = "2";
    Gnumber.innerHTML = "Number 5"
    howTo.style.display = 'block'; 
}

btn.addEventListener("click", function () {       
    window.location.href = 'index.html?id='+level+''; 
}, false);


const bodyTrack = document.getElementById("bodyTrack");
bodyTrack.addEventListener("click", function () { 
    ammoCount--;
    ammo.innerHTML = ammoCount;
    G1.src ="imgs/spaceShip-shoot.svg";
    setTimeout(function(){ G1.src ="imgs/spaceShip.svg"; }, 100); 

    if(nextLevelHit == 4){
        MS1.src = "imgs/kaboom.svg";
        setTimeout(function(){ MS1.src = MSD; }, 100); 
        setTimeout(function(){ MS1.src ="imgs/kaboom.svg"; }, 200); 
        setTimeout(function(){ MS1.src = MSD; }, 300); 
        setTimeout(function(){ MS1.src ="imgs/kaboom.svg"; }, 400); 
        setTimeout(function(){ MS1.src = MSD; }, 500); 
        dialog.style.top = "30px";
    }
  
}, false);

// setTimeout(function(){  }, 500); 