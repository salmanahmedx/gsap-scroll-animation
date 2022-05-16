gsap.from(".b2 h2", {
    duration: 1,
    autoAlpha: 0,
    y: 100,
    scale: 0.5,
    // scroll trigger
    scrollTrigger: {
        trigger: ".b2 h2",
        // markers: true,

        //** trigger scroller **//
        // start: "top 80%",
        // end: "top 10%",

        //actions
        toggleActions: "play pause reverse reset",
        //methods
        onEnter: () => console.log("enter"),
        onLeave: () => console.log("leave"),
        onEnterBack: () => console.log("enter back"),
        onLeaveBack: () => console.log("leave back"),
        //animation follow scroll
        scrub: true, //the animation will run based on our scrolling
        // scrub: 1 --> even if we stop scrolling the animation will run for 1s before scrolling
    }
})

//we are using two separate scroll trigger at the same time
ScrollTrigger.create({
    trigger: ".b2",
    pin: true, //makes the element display: fixed;
    markers: true,
    //modify pin trigger scroller
    end: "bottom 50%",
})