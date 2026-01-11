let btn = document.querySelector("button");


btn.addEventListener("click", function(){
    let randomColor = randomColor();
    document.querySelector(".box").style.backgroundColor = "#" + randomColor;
    document.querySelector("input").value = "#" + randomColor;
})

function randomColor(){
    let r=Math.floor(Math.random()*256).toString(16).padStart(2,'0');
    let g=Math.floor(Math.random()*256).toString(16).padStart(2,'0');
    let b=Math.floor(Math.random()*256).toString(16).padStart(2,'0');
    return "rgb"+"("+"#" + r + " , " + g + " , " + b+" )";
}
