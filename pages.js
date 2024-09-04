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

Array.prototype.forEach.call(left, function(element) {
    element.addEventListener("click", function() {
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
    });
});


var right = document.getElementsByClassName("right");

Array.prototype.forEach.call(right, function(element) {
    element.addEventListener("click", function() {
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
    });
});

var click = 0;

window.ontouchmove = function()
{
    click++;
    if(click%2!=0)
        document.getElementById("logo").style.display = "none";
    else
        document.getElementById("logo").style.display = "block";
}