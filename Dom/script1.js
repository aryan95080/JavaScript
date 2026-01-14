let div=document.querySelector("div");
let ul=document.querySelector("ul");
let lis=document.querySelectorAll("li");

div.addEventListener("click", (eve)=>{
    console.log(" Div clicked");
})

ul.addEventListener("click", (eve)=>{
    eve.stopPropagation();
    console.log(" Ul clicked");
})

for(let li of lis){
    li.addEventListener("click", (eve)=>{
        eve.stopPropagation();
        console.log(" Li clicked");

    })  
} 