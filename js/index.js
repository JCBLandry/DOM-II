// Your code goes here
let busimg = document.getElementById("busimg");
console.log(busimg);

let logo = document.querySelector("logo-heading");

let navplane = document.querySelector("nav");

busimg.addEventListener('mouseover', function(e){
console.log('imghovered!');
busimg.style.minHeight= "500px";
});

document.addEventListener('scroll', function(e){
    console.log('scrolled!')
});

busimg.addEventListener('click', function(e){
console.log('clicked!');
busimg.style.minWidth= "1000px";
});

document.addEventListener('keydown', function(e){
    console.log('key pressed!')
    navplane.style.backgroundColor = "red";
});

document.addEventListener('keyup', function(e){
    console.log('key let go!')
    navplane.style.backgroundColor= "white";
});

document.addEventListener('cut', function(e){
    alert('Cut as you like! The Sacred Fun Bus is impervious to your strikes!')
});

document.addEventListener('copy', function(e){
    alert('Are you trying to steal the image of the Sacred Fun Bus?')
});

document.addEventListener('resize', function(e){
    alert('resized!')
});

document.addEventListener('resize', function(e){
    alert('fullscreen shift!')
    logo.style.backgroundColor = "purple";
});

document.addEventListener('paste', function(e){
    alert('Hey! Dont leave that here!')
});