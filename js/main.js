/* gsap.to(".logo", 
{
    duration: 2, 
    x: 300, 
    backgroundColor: "#456789",
    borderRadius: "20%",
    border: "5px solid #ffffff",
    ease: "back"
}); */

/* gsap.set(".logo", {transformOrigin: "50% 50%"});
gsap.to(".logo", {duration: 5, rotation: 360});

let myObject = {
    rotation: 0
};

gsap.to(myObject, {duration: 5, rotation: 360, onUpdate: function() {
    console.log(myObject.rotation);
}}) */

/* gsap.from(".logo", 
{
    duration: 1.5, 
    opacity: 0,
    scale: 0.3,
    ease: "back",
}); */

/* gsap.from(".circle", 
{
    duration: 1, 
    opacity: 0,
    y: 150,
    stagger: 0.25,
}); */

/* gsap.from(".circle", 
{
    duration: 1, 
    opacity: 0,
    y: "random(-200, 200)",
    stagger: 0.25,
}); */

/* gsap.from(".circle", 
{
    duration: 1, 
    opacity: 0,
    delay: 1.5,
    y: "random(-200, 200)",
    stagger: 0.25,
}); */

// GSAP Timeline - no need to use delay

let tl = gsap.timeline();

tl.from(".logo", 
{
    duration: 1.5, 
    opacity: 0,
    scale: 0.3,
    ease: "back",
});

/* tl.from(".circle", 
{
    duration: 1, 
    opacity: 0,
    y: "random(-200, 200)",
    stagger: 0.25,
}); */

/* tl.from(".circle", 
{
    duration: 1, 
    opacity: 0,
    y: "random(-200, 200)",
    stagger: 0.25,
}, "+=1"); */

// Using labels

tl.from(".circle", 
{
    duration: 1, 
    opacity: 0,
    y: 150,
    stagger: 0.25,
});

/* tl.addLabel("logoOutro", "+=1")

tl.to(".circle", 
{
    duration: 0.5, 
    opacity: 0,
    x: 300,
    ease: "out",
}, "logoOutro"); */