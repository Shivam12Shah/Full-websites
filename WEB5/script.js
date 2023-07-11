

var main = document.querySelector("#main");
var h1 = document.querySelector("h1");
var box = document.querySelector("#box");

main.addEventListener("mousemove", function (dets) {

    box.style.left = `${0+dets.x}px`
    box.style.top = `${0+dets.y}px`


})

h1.addEventListener("mouseenter", function(){
    box.style.width = "300px";
    box.style.height = "300px";
})
h1.addEventListener("mouseleave", function(){
    box.style.width = "20px";
    box.style.height = "20px";
})