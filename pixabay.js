let btn=document.getElementById("btn")
console.log(btn);
btn.addEventListener("click",()=>{
    let search=document.getElementById("search").value
    console.log(search);
    let per_page=10
    window.fetch(`https://pixabay.com/api/?key=39155109-463514b196198cceec0bf0453&q=${search}&image_type=photo&pre_page=${per_page}`)
    .then((data)=>data.json())
    .then((data1)=>{
        console.log(data1);
        console.log(data1.hits);
        for( let ele of data1.hits){
            console.log(ele.largeImageURL);

            let img = `<img src=${ele.largeImageURL} />`
            console.log(img);
            let demo = document.getElementById("demo")
            demo.innerHTML += img
        }
    })
})