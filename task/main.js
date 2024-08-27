// mouse position
let divMos = document.querySelector("div");
divMos.addEventListener("mousemove",(e)=>{
    divMos.innerHTML = `the value of ${e.screenX} and The Value Of Y ${e.screenY}`
})