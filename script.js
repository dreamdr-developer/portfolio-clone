// var tl= gsap.timeline();
// tl.to("#fs",{
//     height:0,
//     duration:2,
//     ease: Expo.easeInOut
// })
// .to("#bottom",{
//     height:"100%",
//     duration:2,
//     delay:-2,
//     ease: Expo.easeInOut
// })
// .to("#white",{
//     height:"100%",
//     duration:2,
//     delay:-1.6,
//     ease: Expo.easeInOut
// })

//text lo span (parent)tag tn 

// box span hai usme ek aur span chlid usme text hai, make the chlid down to box,to make invisible as box have property overflow hidden.

//span parent gets child nd child gets elem detail, 
//elem replaces its value with parent span

// document.querySelectorAll(".reveal")
// .forEach(function(elem){
//     let spanParent=document.createElement("span");
//     let spanChild= document.createElement("span");

//     spanParent.classList.add("parent");
//     spanChild.classList.add("child");

//     spanChild.textContent=elem.textContent;
//     spanParent.appendChild(spanChild);

//     elem.innerHTML="";
//     elem.appendChild(spanParent);
// })

function revealspan() {
    document.querySelectorAll(".reveal")
        .forEach(function (elem) {
            var parent = document.createElement("span");
            var child = document.createElement("span");
            //parent nd child both sets their respective classes
            parent.classList.add("parent");
            child.classList.add("child");
            /* <span class="parent"></span> */
            //span parent gets child nd child gets elem det
            child.innerHTML = elem.innerHTML;
            parent.appendChild(child); //parent lo pilla ni petinlu
            //in elem anim lo html lo emo undo adi(<h5 class="anim">Design porofolio</h5>)
            elem.innerHTML = "";
            elem.appendChild(parent);
 
        })
}
// gsap.to(".parent .child",{
//     y:"-100%",
//     duration:1,
// })

function gsapscroll(){
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
  }
function loader(){
    var tl = gsap.timeline();
    tl.from("#loader .child span", {
        x: 80,
        duration: 1,
        stagger: .2,
        ease: Power3.easeInOut,
    })
        .to("#loader .parent .child", {
            y: "-100%",
            duration: 1,
            ease: Circ.easeInOut,
        })
        .to("#loader", {
            height: 0,
            duration: 1,
            ease: Circ.easeInOut,
        })
        .to("#green", {
            height: "100%",
            top: 0,
            duration: 1,
            delay: -.8,
            ease: Circ.easeInOut,
        })
        .to("#green", {
            height: "0%",
            duration: 1,
            delay: -.5,
            ease: Circ.easeInOut,
            onComplete: function () {
                animatehome();
            }
        })
}
function valueseter() {
    gsap.set("#nav a", { y: "-100%, opacity:0" });
    gsap.set(".row span .child", { y: "100%" });
    gsap.set("#white .row img", { opacity: 0 })

    gsap.set("#imgright", { opacity: 0, })
    gsap.set("#imgleft", {
        opacity: 0,
    })

    document.querySelectorAll("#Visual>g").forEach(function (e){
        var character = e.childNodes[0].childNodes[0];

      character.style.strokeDasharray = character.getTotalLength()+'px';
      character.style.strokeDashoffset = character.getTotalLength()+'px';
     }) 
}
function animatehome() {
    var tl = gsap.timeline();
    tl.to("#nav a", {
        y: 0,
        opacity: 1,
        stagger: .05,
        ease: Expo.easeInOut,
    })
        .to(".row span .child", {
            y: 0,
            stagger: .1,
            duration: 1.5,
            ease: Expo.easeInOut
        })
        .to("#white .row img", {
            opacity: 1,
            delay: -8,
            ease: Expo.easeInOut,
            onComplete:function(){
                animatesvg();
            }
        })
        .to("#imgright", {
            opacity: 1,
            rotate: "-2deg",
        })
        .to("#imgleft", {
            opacity: 1,
        })
}

function animatesvg() {

    gsap.to("#Visual>g>g>path, #Visual>g>g>polyline", {
        strokeDashoffset: 0,
        duration: 2,
        ease: Expo.easeInOut,
        delay: 3
    })
}
function locomotive(){
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
}
function cursor(){
    document.querySelectorAll(".cnt")
    .forEach(function(cnt){
    cnt.addEventListener("mousemove", function(dets){
        // console.log(dets.target.dataset.index); //se 0/1 milgaya
    console.log(document.querySelector("#cursor").children)
    document.querySelector("#cursor").children[dets.target.dataset.index];
    })
    })
}  
// var showingImage;
// cnt.addEventListener("mousemove", function(dets){
//     console.log(document.querySelector("#cursor").children)[dets.target.dataset.index].style.opacity = 1;
//     showingImage = dets.target;
//      document.querySelector("#cursor").children[dets.target.dataset.index].style.transform = `translate(${dets.cilentX}px, ${dets.clientY}px)`;
//      showingImage.style.filter = "greyscale(1)";
//      })
//      cnt.addEventListener("mouseleave", function(dets){
//     document.querySelector("#cursor").children[showingImage.dataset.index].style.opacity = 0;
//     })
gsapscroll();
revealspan();
valueseter();
loader();
locomotive();
cursor();

// 16:27