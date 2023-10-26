// window.fetch("https://api.github.com/users")
// .then((data)=> data.json())
// .then((x)=>{
//     console.log(x);
//     console.log(x[0]);
//     // for(let ele of x){
//     //     console.log(ele);
//     // }
//     //iterate using map method
//     x.map((data1)=>{
//         console.log(data1);
//         let table=document.getElementById("table")
//         console.log(table);
//         let demo=`
//          <tr>
//           <td>${data1.login}</td>
//           <td>${data1.id}</td>
//           <td><img src=${data1.avatar_url}/></td>
//          </tr>
//         `
//         table.innerHTML+=demo
//     })
// })

//async and await
async function get_data()
{
    let response =await window.fetch("https://api.github.com/users")
    console.log(response);
    let data=await response.json()
    console.log(data);
    data.map((x)=>{
        console.log(x);
        let table=document.getElementById("table")
        console.log(table);
        let demo=`
          <tr>
          <td>${x.login}</td>
         <td>${x.id}</td>
         <td><img src=${x.avatar_url}/></td>
         </tr>
         `
         table.innerHTML+=demo
        
    })
}
get_data()