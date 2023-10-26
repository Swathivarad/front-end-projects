let btn=document.getElementById("btn")
console.log(btn);

btn.onclick=function(){
    //to share screen
    //  let b=window.navigator.mediaDevices.getDisplayMedia()
    // console.log(b);

    //to access sudio and video
    let video=document.getElementById("video")
    console.log(video);
    let a=window.navigator.mediaDevices.getUserMedia({
        audio:true,
        video:{height:300,width:300}
    }).then((stream)=>{
        video.srcObject=stream
        video.play()
    }).catch((error)=>{
        console.log(error);
    })
    console.log(a);
}








    