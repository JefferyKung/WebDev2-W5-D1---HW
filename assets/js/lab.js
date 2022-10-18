const TimeLine = gsap.timeline()

TimeLine
.from('.logo', { autoAlpha: 0, duration: 1, y: -50})
.from('.menu-links li',  {
    duration: 0.5,
    autoAlpha: 0,
    stagger: 0.2, 
    // x: "random(-100, 100, 10)"
    y: "random([20,50,-60,-100, 100])"
}) 
.from('.title', { autoAlpha: 0, duration: 1, y: -50})
.from('.tagline', { autoAlpha: 0, duration: 1, y: -50},)  
.from('p', { autoAlpha: 0, duration: 1, y: -50},"<")