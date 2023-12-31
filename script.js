var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
// basically query selector hmare kisi bhi html element ko move kar deta hai document ka mtlb hota hai pura html ka document to 
// yaha pe pure html me event listener lag jayega mouse move naam ka to jab bhi mouse move hoga hame pata chalega
document.addEventListener("mousemove",function(dets){
  // yaha par dets ka mtlb hai jab hamara mouse move mar raha to uske sath jo ghatna ho rahi ya jo jo wo face kar raha wo hame 
  // show karta hai console par
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x-250 +"px"
    blur.style.top = dets.y-250 +"px"
})
gsap. to("#nav",{
    backgroundColor :"#000",
    height: "100px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})
gsap.to("#main",{
    backgroundColor : "#000",
    // yaha pe hum apne second page ko scroller ke base pe black karege jaise hum scroll karke niche aayege waise waise 
    // ye black karta jayega hmare website ke background ko
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        markers: true,
        start: "top -35%",
        end: "top -100%",
        scrub: 2
        // scrub se hota kya hai aaram se aaram se color change hone start ho jata hai
    }
})
gsap.from("#about-us img,#about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#about-us",
      scroller: "body",
      // markers:true,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });
  gsap.from(".card", {
    scale: 0.8,
    // opacity:0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".card",
      scroller: "body",
      // markers:false,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });
  gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
  gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
  gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "body",
      // markers:true,
      start: "top 75%",
      end: "top 70%",
      scrub: 3,
    },
  });
