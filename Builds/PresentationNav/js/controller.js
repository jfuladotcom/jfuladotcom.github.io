
    var iconText = '{"portfolio":[' +
                    '{"contentText":"icons"  },' +
                    '{"contentText":"One" },' +
                    '{"contentText":"Two" },' + 
                    '{"contentText":"Three" },' + 
                    '{"contentText":"Four" },' + 
                    '{"contentText":".png" }]}';
		var designText = '{"portfolio":[' +
                    '{"contentText":"design"  },' +
                    '{"contentText":"One" },' +
                    '{"contentText":"Two" },' + 
                    '{"contentText":"Three" },' + 
                    '{"contentText":"Four" },' + 
                    '{"contentText":".jpg" }]}'; 
		var webText = '{"portfolio":[' +
                    '{"contentText":"web"  },' +
                    '{"contentText":"One" },' +
                    '{"contentText":"Two" },' + 
                    '{"contentText":"Three" },' + 
                    '{"contentText":"Four" },' + 
                    '{"contentText":".jpg" }]}';                     
    var uiText = '{"portfolio":[' +
                    '{"contentText":"ui"  },' +
                    '{"contentText":"One" },' +
                    '{"contentText":"Two" },' + 
                    '{"contentText":"Three" },' + 
                    '{"contentText":"Four" },' + 
                    '{"contentText":".jpg" }]}'; 
		var appText = '{"portfolio":[' +
                    '{"contentText":"apps"  },' +
                    '{"contentText":"<div>Header</div><div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div><div> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div><div> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div></br><div> <a href=linkhere.html target=_blank>Launch App</a> </div>" },' +
                    '{"contentText":"<div>Header</div><div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div><div> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div><div> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div></br><div> <a href=linkhere.html target=_blank>Launch App</a> </div>" },' + 
                    '{"contentText":"<div>Header</div><div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div><div> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div><div> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div></br><div> <a href=linkhere.html target=_blank>Launch App</a> </div>" },' + 
                    '{"contentText":"<div>Header</div><div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div><div> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div><div> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div></br><div> <a href=linkhere.html target=_blank>Launch App</a> </div>" },' + 
                    '{"contentText":".png" }]}';     
        


        var letsBegin = document.getElementById("letsBegin");
        var welcomeText = document.getElementById("welcomeText");        
        var homeNav = document.getElementById("homeNav");

        setTimeout(function(){  
            welcomeText.style.top = "30%";   
            welcomeText.style.opacity = "1";                
        }, 1000);              
        setTimeout(function(){  
            letsBegin.style.opacity = "1";      
        }, 1500);                      
        
        document.getElementById("letsBegin").addEventListener("click", function(){   
            letsBegin.style.opacity = "0";      
            welcomeText.style.top = "-100px"; 
            setTimeout(function(){   letsBegin.style.display = "none";  }, 1000);  
            setTimeout(function(){   
                homeNav.style.opacity = "1";  
                homeNav.style.bottom = "39px";  
                
            }, 1500);    
        }, false);  
                    
        x = 1;        
        var clickSelect = iconText;
        var contentID = "iconContent";
        var holder = document.getElementById("iconHolder");
        var homeIcon = document.getElementById("homeIcon");
        // var aboutMe = document.getElementById("aboutMe");
        var element = "iconImg";   
        var navLeft = document.getElementById("navLeft");                      
        var navRight = document.getElementById("navRight");       
        var downloadH = document.getElementById("download");
        var downloadIcon = document.getElementById("downloadIcon");
        var downloadImg = document.getElementById("downloadImg");
        var prototypeIcon = document.getElementById("prototypeIcon");

        var focusIcon = document.getElementById("focusIcon");
        var focusDesign = document.getElementById("focusDesign");
        var focusWeb = document.getElementById("focusWeb");
        var focusUI = document.getElementById("focusUI");
        var focusApp = document.getElementById("focusApp");

        var prototype  = document.getElementById("prototype");
        var prototypeImg = document.getElementById("prototypeImg");

        // var homeImgWrap = document.getElementById("homeImgWrap");

        var topToolTip = document.getElementById("topToolTip");
        var bottomToolTip = document.getElementById("navToolTip");

        var helperClick = true;
        function helper(){
            if(helperClick == true){
            helperClick = false;
            topToolTip.style.display = "block";
            setTimeout(function(){  topToolTip.style.opacity = "1";  }, 2500);              
            setTimeout(function(){  topToolTip.style.top = "200px";  }, 3500);                          
            setTimeout(function(){  topToolTip.style.top = "28px";  }, 4500);
            setTimeout(function(){  topToolTip.style.opacity = "0";  }, 6500);                          
            setTimeout(function(){  topToolTip.style.display = "none";  }, 7000);      
            
            bottomToolTip.style.display = "block";
            setTimeout(function(){  bottomToolTip.style.opacity = "1";  }, 7500);              
            setTimeout(function(){  bottomToolTip.style.opacity = "0";  }, 9500);                          
            setTimeout(function(){  bottomToolTip.style.display = "none";  }, 10000);      
            }else{}

        }

  
        
        document.getElementById("homeIcon").addEventListener("click", function(){    
             homeIcon.style.display = "none";  
            //  aboutMe.style.display = "block";
             navLeft.style.display = "none";   navRight.style.display = "none";           
             topToolTip.style.display = "none"; bottomToolTip.style.display = "none";
             downloadIcon.style.display = "none"; 
             prototypeIcon.style.display = "none";                           
             focusIcon.classList.remove("activeNavColor");  
             focusDesign.classList.remove("activeNavColor");  
             focusWeb.classList.remove("activeNavColor");  
             focusUI.classList.remove("activeNavColor");  
             focusApp.classList.remove("activeNavColor");  
             homeCount = 1;
            //  document.getElementById('home').style.backgroundImage = 'url(imgs/home/1.jpg)'; 
            //  document.getElementById('home').style.backgroundColor = '#000406';
            //  document.getElementById('iframe').style.display = 'none';  
            //  document.getElementById('linkedin').style.display = "block";    
             document.getElementById('homeImg').src = "imgs/home/2.png";                  
            //  homeID.style.display = "block";
            //  homeImgWrap.style.display = "block";
             
           }, false);  

        document.getElementById("clickIcon").addEventListener("click", function(){    
             x = 1;
             document.getElementById("iconImg").src = "imgs/icons/1.png";                 
             clickSelect = iconText; contentID = "iconContent"; element = "iconImg";
        	 holder = document.getElementById("iconHolder");
             homeIcon.style.display = "block";  
            //  aboutMe.style.display = "none";
             navLeft.style.display = "block";   navRight.style.display = "block"; 
             prototypeIcon.style.display = "none";                       
             focusIcon.classList.add("activeNavColor");  
             focusDesign.classList.remove("activeNavColor");  
             focusWeb.classList.remove("activeNavColor");  
             focusUI.classList.remove("activeNavColor");  
             focusApp.classList.remove("activeNavColor");  
             downloadIcon.style.display = "none";
     
           }, false);  

        document.getElementById("clickDesign").addEventListener("click", function(){
             x = 1;
             document.getElementById("designImg").src = "imgs/design/1.jpg";    
             clickSelect = designText; contentID = "designContent"; element = "designImg";
          	 holder = document.getElementById("designHolder");
             homeIcon.style.display = "block"; 
             navLeft.style.display = "block";   navRight.style.display = "block"; 
             prototypeIcon.style.display = "none";                       
            
             downloadIcon.style.display = "block";
             downloadImg.src = "imgs/download-design.svg";
             downloadH.href = "download/index.html";  
             
             prototypeIcon.style.display = "block"; 
             prototype.href = "download/index.html";
             prototypeImg.src = "imgs/download-foodie.svg";

             focusIcon.classList.remove("activeNavColor");  
             focusDesign.classList.add("activeNavColor");  
             focusWeb.classList.remove("activeNavColor");  
             focusUI.classList.remove("activeNavColor");  
             focusApp.classList.remove("activeNavColor");  
            //  homeImgWrap.style.display = "none";
           }, false);  

        document.getElementById("clickWeb").addEventListener("click", function(){
            x = 1;          
            document.getElementById("webImg").src = "imgs/web/1.jpg";               
            clickSelect = webText; contentID = "webContent"; element = "webImg";		     
            holder = document.getElementById("webHolder");
            homeIcon.style.display = "block";    
            navLeft.style.display = "block";   navRight.style.display = "block"; 
            downloadIcon.style.display = "block";
            prototypeIcon.style.display = "none";                       
            downloadH.href = "download/index.html";   
            downloadImg.src = "imgs/download-web.svg";
            focusIcon.classList.remove("activeNavColor");  
             focusDesign.classList.remove("activeNavColor");  
             focusWeb.classList.add("activeNavColor");  
             focusUI.classList.remove("activeNavColor");  
             focusApp.classList.remove("activeNavColor");  
            //  homeImgWrap.style.display = "none";             
          }, false);  
       
        document.getElementById("clickUi").addEventListener("click", function(){
            x = 1;                       
            document.getElementById("uiImg").src = "imgs/ui/1.jpg";         
            clickSelect = uiText; contentID = "uiContent";  element = "uiImg";
            holder = document.getElementById("uiHolder");
            homeIcon.style.display = "block";  navLeft.style.display = "block";           
            navRight.style.display = "block"; 
            prototypeIcon.style.display = "block"; 
            prototype.href = "download/index.html";
            prototypeImg.src = "imgs/prototype.svg";
            downloadIcon.style.display = "block";
            downloadH.href = "download/index.html";         
            downloadImg.src = "imgs/download-ui.svg";
            focusIcon.classList.remove("activeNavColor");  
             focusDesign.classList.remove("activeNavColor");  
             focusWeb.classList.remove("activeNavColor");  
             focusUI.classList.add("activeNavColor");  
             focusApp.classList.remove("activeNavColor");  
            //  homeImgWrap.style.display = "none";          
            }, false);  

        document.getElementById("clickApp").addEventListener("click", function(){
            x = 1;         
            //document.getElementById("appImg").src = "imgs/apps/1.png";      
            clickSelect = appText;  contentID = "appContent"; element = "appImg";  	
            holder = document.getElementById("appHolder");
            homeIcon.style.display = "block";  navLeft.style.display = "block";           
            navRight.style.display = "block";  
            downloadIcon.style.display = "none";   
            prototypeIcon.style.display = "none";                       
            focusIcon.classList.remove("activeNavColor");  
             focusDesign.classList.remove("activeNavColor");  
             focusWeb.classList.remove("activeNavColor");  
             focusUI.classList.remove("activeNavColor");  
             focusApp.classList.add("activeNavColor");  
            //  homeImgWrap.style.display = "none";
           }, false);  

        
                
        document.getElementById("navRight").addEventListener("click", function(){ 
            x++;
            obj = JSON.parse(clickSelect);
            var pullImg = obj.portfolio[0].contentText;            
            if(x==5){ x = 1;}  
            holder.style.opacity = "0";             
            holder.style.left = "0";             
            var pullEnd = obj.portfolio[5].contentText;              
            setTimeout(function(){  holder.style.left = "-1500px";   }, 500);         
            setTimeout(function(){  holder.style.left = "1500px";  }, 1000);                     
            setTimeout(function(){ 
                holder.style.left = "0";                                         
                holder.style.opacity = "1";
                document.getElementById(element).src = 'imgs/'+pullImg+'/'+x+''+pullEnd+''; 
                document.getElementById(contentID).innerHTML = obj.portfolio[x].contentText;
            }, 1500);   
            setTimeout(function(){  holder.style.left = "inherit";  }, 2500);              

        }, false);  
        
        document.getElementById("navLeft").addEventListener("click", function(){ 
            x--;            
            obj = JSON.parse(clickSelect);            
            var pullImg = obj.portfolio[0].contentText;            
            if(x==0){ x = 4; }                        
            holder.style.opacity = "0";                        
            holder.style.right = "0 ";               
            var pullEnd = obj.portfolio[5].contentText;            
            setTimeout(function(){   holder.style.right = "-1500px";  }, 500);         
            setTimeout(function(){   holder.style.right = "1500px"; }, 1000);                     
            setTimeout(function(){ 
                holder.style.right = "0";                                         
                holder.style.opacity = "1";   
                document.getElementById(element).src = 'imgs/'+pullImg+'/'+x+''+pullEnd+'';
                document.getElementById(contentID).innerHTML = obj.portfolio[x].contentText;
                element.src = 'imgs/0'+x+'.png'; 
            }, 1500);   
            setTimeout(function(){   holder.style.right = "inherit"; }, 2500);              

        }, false);

   