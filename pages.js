var left = document.getElementsByClassName("left");
var pgNum = 0;

var count=document.getElementById("pageCount");

var url = window.location.href;
let endOfUrl = url.slice(url.lastIndexOf("/"),url.length);
var chNum = parseInt(endOfUrl.replace(/[^0-9]/g, ""));

var page = document.getElementsByClassName("page");
    Array.prototype.forEach.call(page, function(element) {
    element.style.backgroundImage = "url(pages/ch"+chNum+"/ch0"+chNum+"0"+pgNum+".gif)";
});

const numOfPages = [23, 3];

count.innerHTML=pgNum+"/"+numOfPages[chNum-1];

function pgDown()
{
    var page = document.getElementsByClassName("page");
    Array.prototype.forEach.call(page, function(element) {
        if(pgNum>0)
        {   
            pgNum--;
            if(pgNum<10)
                element.style.backgroundImage = "url(pages/ch"+chNum+"/ch0"+chNum+"0"+pgNum+".gif)";
            else
                element.style.backgroundImage = "url(pages/ch"+chNum+"/ch0"+chNum+pgNum+".gif)";
            count.innerHTML=pgNum+"/"+numOfPages[chNum-1];
        }
    });
    
}

function pgUp()
{
    var page = document.getElementsByClassName("page");
    Array.prototype.forEach.call(page, function(element) {
        if(pgNum<numOfPages[chNum-1])
        {
            pgNum++;
            if(pgNum<10)
                element.style.backgroundImage = "url(pages/ch"+chNum+"/ch0"+chNum+"0"+pgNum+".gif)";
            else
                element.style.backgroundImage = "url(pages/ch"+chNum+"/ch0"+chNum+pgNum+".gif)";
            count.innerHTML=pgNum+"/"+numOfPages[chNum-1];    
        }
    });

}

Array.prototype.forEach.call(left, function(element) {
    element.addEventListener("click", function() {
        pgDown();
    });
});


var right = document.getElementsByClassName("right");

Array.prototype.forEach.call(right, function(element) {
    element.addEventListener("click", function() {
        pgUp();
    });
});


function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                
            
document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}    

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
                                                                         
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* right swipe */ 
            pgUp();
        } else {
            /* left swipe */
            pgDown();
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* down swipe */
            document.getElementById("logo").style.opacity = "1";
        } else { 
            /* up swipe */
            document.getElementById("logo").style.opacity = "0";
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};