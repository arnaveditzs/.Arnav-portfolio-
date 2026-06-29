// 3D card movement effect

const boxes = document.querySelectorAll(".box");


boxes.forEach(box => {


box.addEventListener("mousemove", (e)=>{


let x =
(e.offsetX / box.offsetWidth - 0.5) * 20;


let y =
(e.offsetY / box.offsetHeight - 0.5) * 20;



box.style.transform =

`perspective(900px)
rotateY(${x}deg)
rotateX(${-y}deg)
translateY(-10px)`;


});



box.addEventListener("mouseleave",()=>{


box.style.transform="";


});


});





// Smooth reveal animation


const observer = new IntersectionObserver(entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}


});


});



document.querySelectorAll(".box")
.forEach(box=>{


box.style.opacity="0";

box.style.transform="translateY(80px)";


box.style.transition="1s";


observer.observe(box);


});





// Button action


document.querySelector("button")
.onclick=()=>{


document.querySelector("#work")
.scrollIntoView({

behavior:"smooth"

});


};
