const BackGround = document.getElementById("all");


logo.addEventListener("mouseover",(event)=>{
    BackGround.style.backgroundSize="130%";
    BackGround.style.backgroundPositionY="10%";
    BackGround.style.backgroundPositionX="20%";
    links.style.opacity=.3;
});
l1.addEventListener("mouseover",(event)=>{
    BackGround.style.backgroundSize="120%";
    BackGround.style.backgroundPositionY="25%";
});
l2.addEventListener("mouseover",(event)=>{
    BackGround.style.backgroundSize="120%";
    BackGround.style.backgroundPositionY="50%";
});
l3.addEventListener("mouseover",(event)=>{
    BackGround.style.backgroundSize="120%";
    BackGround.style.backgroundPositionY="75%";
});

logo.addEventListener("mouseout",(event)=>{
    BackGround.style.backgroundSize="100%";
    BackGround.style.backgroundPosition="center";
    links.style.opacity=1;
});
l1.addEventListener("mouseout",(event)=>{
    BackGround.style.backgroundSize="100%";
    BackGround.style.backgroundPosition="center";
});
l2.addEventListener("mouseout",(event)=>{
    BackGround.style.backgroundSize="100%";
    BackGround.style.backgroundPosition="center";
});
l3.addEventListener("mouseout",(event)=>{
    BackGround.style.backgroundSize="100%";
    BackGround.style.backgroundPosition="center";
});
