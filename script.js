var tl = gsap.timeline()

tl  
    .from(["#navleft","#navright"],{
        opacity:0,
        duration:2,
    })
    .from("#icon",{
        opacity:0,
        duration:2,
        left:"0%",
        // stagger:0.5
    })
    .from(["#page1left>h1","#page1left>h3"],{
        opacity:0,
        duration:2,
        left:"0%"
    })
    .from("#page1left>h2",{
        opacity:0,
        duration:2,
        // left:"0%",
        onStart:function(){
            $('#page1left>h2').textillate({
                in:{
                    effect:'flash',
                  }})
                }
    })
    .to("#page1left button",{
        opacity:1,
        duration:2,
        left: "50%"
    })

gsap.from("#p2navleft h1",{
    opacity:0,
    duration:2,
    x:-80,
    onStart:function(){
        $('#p2navleft h1').textillate({
            in:{
                effect:'fadeIn',
              }})
            },
    scrollTrigger:{
        trigger:"#p2navleft h1",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:3,
    }
})

gsap.from(["#p2navright i","#p2navright h1","#p2navright button"],{
    opacity:0,
    duration:1,
    x:120,

    scrollTrigger:{
        trigger:"#p2navright i",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 40%",
        scrub:5,
    }
})

gsap.from(".card",{
    opacity:0,
    duration:2,

    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 60%",
        scrub:5,
    },
    stagger:0.5
})

gsap.from("#p2bottom",{
    opacity:0,
    duration:2,

    scrollTrigger:{
        trigger:"#p2bottom",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 70%",
        scrub:5,
    },
})

gsap.from("#div1",{
    opacity:0,
    duration:2,
    left:"-50%",
    scrollTrigger:{
        trigger:"#div1",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 40%",
        scrub:5,
    },
})

gsap.from("#div2",{
    opacity:0,
    duration:2,
    left:"100%",
    scrollTrigger:{
        trigger:"#div2",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 60%",
        scrub:5,
    },
})

gsap.from("#div3",{
    opacity:0,
    duration:2,
    left:"100%",
    scrollTrigger:{
        trigger:"#div3",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 40%",
        scrub:5,
    },
})

gsap.from(["#page3>h1","#page3>i"],{
    opacity:0,
    duration:2,
    left:"120%",
    scrollTrigger:{
        trigger:"#page3>h1",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 60%",
        scrub:5,
    },
})

gsap.from("#div4",{
    opacity:0,
    duration:2,
    // left:"-20%",
    scrollTrigger:{
        trigger:"#div4",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 55%",
        scrub:5,
    },
})

gsap.from("#p4div1",{
    opacity:0,
    duration:2,
    left:"-20%",
    scrollTrigger:{
        trigger:"#p4div1",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"top 90%",
        scrub:5,
    },
})

gsap.from("#p4div2",{
    opacity:0,
    duration:2,
    y:120,
    scrollTrigger:{
        trigger:"#p4div2",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 85%",
        scrub:5,
    },
})

gsap.from("#p4div3",{
    opacity:0,
    duration:2,
    left:"130%",
    scrollTrigger:{
        trigger:"#p4div1",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"top 90%",
        scrub:5,
    },
})