

// scroll reveals 
ScrollReveal().reveal('.col1', { delay: 500, origin: 'left', distance: '10px' });
ScrollReveal().reveal('.profilePic', { delay: 500, origin: 'right', distance: '10px' });
ScrollReveal().reveal('.name1', {delay:500, origin: 'left', distance: '50px'});
ScrollReveal().reveal('.name2', {delay:1500, origin: 'center', distance: 0});
ScrollReveal().reveal('.name3', {delay: 2500, origin: 'right', distance: '50px'}); 
ScrollReveal().reveal('.projectCard', {delay: 500, origin: 'bottom', distance: '100px'});


// GSAP
var tl = gsap.timeline({repeat: 10, 
    yoyo: true});

    tl.to(".circle1", {duration: 10, x:-300,y:"-100vh",rotation:360},"all")
    .to(".circle2", {duration: 7, x:-20,y:"-100vh",rotation:360},"all")
    .to(".circle3", {duration: 5, x:-100,y:"-100vh",rotation:360},"all")
    .to(".circle4", {duration: 7, x:-400,y:"-100vh",rotation:360},"all")
    .to(".circle5", {duration: 8, x:-200,y:"-100vh",rotation:360},"all")
    .to(".circle6", {duration: 8, x:400,y:"-100vh",rotation:360},"all")
    .to(".circle7", {duration: 6, x:100,y:"-100vh",rotation:360},"all")
    .to(".circle8", {duration: 4, x:0,y:"-100vh",rotation:360},"all")
    
    tl.play();
    

