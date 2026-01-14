let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    let rdmColor = randomColor();
    document.querySelector(".box").style.backgroundColor =rdmColor;
    document.querySelector("input").value = rdmColor;
})

function randomColor(){
    let r=("000"+Math.floor(Math.random()*256).toString()).slice(-3);
    let g=("000"+Math.floor(Math.random()*256).toString()).slice(-3);
    let b=("000"+Math.floor(Math.random()*256).toString()).slice(-3);

    return "rgb"+"("+r+","+g+","+b+")";
}
