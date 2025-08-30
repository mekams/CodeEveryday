// let a = document.querySelector("h2")
// a.innerText += " from youtube"

let a = document.querySelectorAll(".box");
// a[0].innerText = "Hello from JS";
// a[1].innerText = "Hello from JS 2nd box";
// a.lastChild.innerText = "Hello from JS 3rd box";

let idx = 1;
for(let i=0; i<a.length; i++){
    a[i].innerText = `Box Number :${idx}`;
    idx++
}