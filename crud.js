let btn=document.getElementById("btn")
console.log("btn");

btn.onclick=function(){
    // e.preventDefault()
    let Id=document.getElementById("Id").value
    console.log(Id);
    let NAME=document.getElementById("NAME").value
    console.log(NAME);
    let DESIGNATION=document.getElementById("DESIGNATION").value
    console.log(DESIGNATION);
    let demo=document.getElementById("demo")
    console.log(demo);
    let demo1=`
    <tr>
     <td>${Id}</td>
     <td>${NAME}</td>
     <td>${DESIGNATION}</td>
    </tr>
    `
    demo.innerHTML+=demo1
}





