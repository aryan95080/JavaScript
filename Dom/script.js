// // Qs1. 
// // Create a new input and button element on the page using JavaScript only. Set the text of button to “Click me”;
// let btn=document.createElement("button");
// btn.innerHTML="Click Me";
// btn.style.padding="10px";
// btn.style.fontSize="16px";
// document.body.appendChild(btn);

// // Qs2.
// btn.setAttribute("id","btn");
// btn.setAttribute("placeholder","UserName");

// // Qs3.
// // Access the btn using the querySelector and button id. Change the button background color to blue and text color to white
// btn.classList.add("my-button");
// document.querySelector("#btn").style.backgroundColor="blue";
// document.querySelector("#btn").style.color="white";

// // Qs4.Create an h1 element on the page and set its text to "DOMPractice" underlined. Change its color to purple
// let h1=document.createElement("h1");
// h1.innerText="DOM Practice";
// h1.style.textDecoration="underline";
// h1.style.color="purple";
// document.body.appendChild(h1);

// // Qs5.Create a p tag on the page and set its text to "ApnaCollegeDeltaPractice", where Delta is bold

// let p=document.createElement("p");
// p.innerHTML="ApnaCollege <b>Delta</b> Practice";
// document.body.appendChild(p);


let btns=document.querySelectorAll("button");


let click=function(){
    // alert("Button Clicked");
    console.log("Button Clicked");
}
let hover=function(){
    alert("Button Hovered");
}

function hello(){
    console.log("Hello World");
}
// function click(){
//     alert("Button Clicked");
// }
for(let btn of btns){

    // btn.onclick=click; // here we add two events to a single element but only last one will work
    // btn.onclick=hello;

    // btn.addEventListener("click",click); // here we can add multiple events to a single element
    // btn.addEventListener("click",hello);

    btn.addEventListener("dblclick",function(){
        console.log("Button Double Clicked");
    })

    //btn.onmouseenter=hover;
}

// EVENT LISTENER: why use event listener instead of onclick/onhover/onwhatever etc beacause with event listener we can add multiple events to a single element but with onclick/onhover we can add only one event to a single element


