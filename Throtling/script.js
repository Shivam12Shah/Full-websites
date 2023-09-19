const btn=document.querySelector("#throttle");
const throttleFunction=(func, delay)=>{
let prev = 0;
return (...args) => {
    let now = new Date().getTime();
    console.log(now-prev, delay);
    if(now - prev> delay){
    prev = now;
    return func(...args); 
    }
}
}

var imges = [
    "https://rblln.fr/brands-logo/rebellion-logo-0.svg",
    "https://rblln.fr/brands-logo/rebellion-logo-1.svg",
    "https://rblln.fr/brands-logo/rebellion-logo-2.svg",
    "https://rblln.fr/brands-logo/rebellion-logo-3.svg",
    "https://rblln.fr/brands-logo/rebellion-logo-4.svg",
    "https://rblln.fr/brands-logo/rebellion-logo-5.svg",
    "https://rblln.fr/brands-logo/rebellion-logo-6.svg",
    "https://rblln.fr/brands-logo/rebellion-logo-7.svg",
    "https://rblln.fr/brands-logo/rebellion-logo-8.svg",
    "https://rblln.fr/brands-logo/rebellion-logo-9.svg",
    "https://rblln.fr/brands-logo/rebellion-logo-10.svg",
    "https://rblln.fr/brands-logo/rebellion-logo-11.svg",
    "https://rblln.fr/brands-logo/rebellion-logo-12.svg",
    "https://rblln.fr/brands-logo/rebellion-logo-13.svg",
    "https://rblln.fr/brands-logo/rebellion-logo-14.svg",
    "https://rblln.fr/brands-logo/rebellion-logo-15.svg",
    "https://rblln.fr/brands-logo/rebellion-logo-16.svg"
]
var divs = document.querySelectorAll(".imgesdiv")
document.querySelector("#page1").addEventListener("mousemove", throttleFunction((dets)=>{
    var div = document.createElement("div");
    div.classList.add('imagediv');

    div.style.left =dets.clientX+'px'
    div.style.top =dets.clientY+'px';
    div.style.opacity = 1;
    

    var img = document.createElement("img");
    var baby = imges[(Math.floor(Math.random() * imges.length))];
    img.setAttribute("src", baby)
    div.appendChild(img)
    document.querySelector("#page1").appendChild(div)




    setTimeout(function(){
        gsap.to(".imagediv",{
            opacity:0,
            duration:0.4,
            top:`100%`,
        })
    }, 500)
    
}, 50)
);


