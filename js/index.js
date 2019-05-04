// Your code goes here
let busimg = document.getElementById("busimg");
console.log(busimg);

let logo = document.querySelector("h1");

let navplane = document.querySelector("nav");

let content = document.querySelector("p");

busimg.addEventListener('mouseover', function(e){
console.log('imghovered!');
busimg.style.minHeight= "500px";
});

document.addEventListener('scroll', function(e){
    console.log('scrolled!')
    content.style.color = 'pink';
    content.style.backgroundColor = 'black';

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

document.addEventListener('contextmenu', function(e){
    alert('Dont right click on things! It spreads the Dreaded Blue Plague!');
    event.target.style.backgroundColor = "blue";
});

document.addEventListener('drag', function(e){
    console.log('Are you trying to take our picture, you fiend?! Put it back!!')
});

document.addEventListener('paste', function(e){
    alert('Hey! Dont leave that here!')
});