let head=document.getElementById("header");
let info=document.getElementById("info");
let box=document.getElementById("box");
window.addEventListener("load",()=>{


    gsap.fromTo(head,{y:"50", duration:2 ,ease:"power1.out ",opacity:"0"},{y:0,opacity:100 , ease:"power1.out ",duration:1,color:"blue",repeat:-1,yoyo:true} )

    gsap.fromTo(info,{x:"200",duration:3,ease:"power1.out ",opacity:0,},{x:0,ease:"power1.out",duration:1,opacity:100})

    gsap.fromTo(box,{x:"-200",duration:2,ease:"power1.out",opacity:0},{x:0,duration:1,opacity:100})
})