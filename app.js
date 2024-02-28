const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true,
    smoothMobile: true // Is line ko add kiya hai
});

function landing(){
    let time=gsap.timeline()
    time.to(".page1",{
        y:"120vh",
        scale:0.5,
        duration:0
    })
    time.to(".page1",{
        y:"30vh",
        duration:1,
        delay:1
    })
    time.to(".page1",{
        y:"0vh",
       rotate:360,
       scale:1,
       duration:0.8
    })
    time.from(".page2",{
        opacity:0,
        duration:2

    })
}

landing();
document.addEventListener('DOMContentLoaded', function() {
    scroll.update();
    });