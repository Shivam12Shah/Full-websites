gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

gsap.to("#page1-content",{
  y:-100,
  scrollTrigger:{
    trigger:"#page1",
    scroller:"#main",
    start:"top -2%",
    end:"top -90%",
    // markers:true,
    scrub:2
  }
})
var tl = gsap.timeline({
  scrollTrigger:{
    trigger:"#page2",
    scroller:"#main",
    start:"top 50%",
    end:"top -50%",
    // markers:true,
    scrub:2,
    stagger:2,
  }
})
tl.to("#page2 img",{
  scale:2,
},"anim2")

// tl.to("#page2 h1" ,{
//   y:-100
// },"anim2")
tl.to("#text-box h2",{
  x:100,
  stagger:0.1
},"anim2")


var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page4",
        scroller:"#main",
        start:"top 50%",
        bottom:"top 30%",
        // markers:true,
        scrub:2,
        // stagger:2
    }
})
tl2.to("#page4 img", {
    y:-200,
    width:"40%",
    
},"anim")

gsap.to("#be h1",{
  x:100,
  stagger:0.1,
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",
    start:"top 50%",
    bottom:"top 40%",
    // markers:true,
    scrub:2,
    // stagger:2
}

})   


gsap.to("#page3 img",{
  y:-200,
  width:"40%",
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#main",
    start:"top 50%",
    bottom:"top 30%",
    // markers:true,
    scrub:2,
    // stagger:2
}
})
