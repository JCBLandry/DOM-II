// Your code goes here
let busimg = document.getElementById("busimg");
console.log(busimg);

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

let navplane = document.querySelector("nav");

document.addEventListener('keydown', function(e){
    console.log('key pressed!')
    navplane.style.backgroundColor = "red";
});

document.addEventListener('keyup', function(e){
    console.log('key let go!')
    navplane.style.backgroundColor= "white";
});

document.addEventListener('cut', function(e){
    alert('whatcha cuttin on?')
});

document.addEventListener('copy', function(e){
    alert('whatcha stealin??')
});

document.addEventListener('resize', function(e){
    alert('resized!')
});

document.addEventListener('funnscreenchange', function(e){
    alert('fullscreen shift!')
});

document.addEventListener('paste', function(e){
    alert('dont leave that here!')
});