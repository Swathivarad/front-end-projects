let btn=document.getElementById("btn")
console.log(btn);


btn.onclick=function(){
    let img=document.getElementById("img")
    console.log(img);
    let demo=img.classList.toggle("block")
    if(demo){
        img.style.display="none";
    }
    else{
        img.style.display="block"
    }
    }

    