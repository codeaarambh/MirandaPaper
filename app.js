
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});

function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
function landing() {
  let time = gsap.timeline();
  
  time.to(".page1", {
      y: "-29vh",
      scale: 0.5,
      duration: 0
  });
  
  time.to(".page1", {
      y: "30vh",
      duration: 1,
      delay: 1
  });
  
  time.to(".page1", {
      y: "0vh",
      rotate: 360,
      scale: 1,
      duration: 0.8
  });
  

  
  time.from(".page2", {
      opacity: 0,
      duration: 2
  });
}

landing();

// function landing() {
//   let time = gsap.timeline();
  
//   time.to(".page1", {
//       y: "120vh",
//       scale: 0.5,
//       duration: 0
//   })
//   .to(".page1", {
//       y: "30vh",
//       duration: 1,
//       delay: 1
//   })
//   .to(".page1", {
//       y: "0vh",
//       rotate: 360,
//       scale: 1,
//       duration: 0.8
//   })
//   .to(".page1", {
//       y: "0vh",
//       scale: 1,
//       duration: 1
//   })
//   .from(".page2", {
//       opacity: 0,
//       duration: 2
//   });
// }

// landing();


// function landing(){
//     let time=gsap.timeline()
//     time.to(".page1",{
//         y:"120vh",
//         scale:0.5,
//         duration:0
//     })
//     time.to(".page1",{
//         y:"30vh",
//         duration:1,
//         delay:1
//     })
//     time.to(".page1",{
//         y:"0vh",
//        rotate:360,
//        scale:1,
//        duration:0.8
//     })
//     time.to(".page1",{
//       y:"0vh",
    
//      scale:1,
//     duration:1
//   })
//     time.from(".page2",{
//         opacity:0,
//         duration:2

//     })
// }

// landing();
// // document.addEventListener('DOMContentLoaded', function() {
//     scroll.update();
//     });
