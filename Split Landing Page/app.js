const left = document.getElementById('left');
const right = document.getElementById('right');

left.addEventListener('mouseenter', ()=>{
    left.style.width = "75vw";
    right.style.width = "25vw";
});

left.addEventListener('mouseleave', ()=>{
    left.style.width = "50vw";
    right.style.width = "50vw";
});

right.addEventListener('mouseenter', ()=>{
    left.style.width = "25vw";
    right.style.width = "75vw";
});

right.addEventListener('mouseleave', ()=>{
    left.style.width = "50vw";
    right.style.width = "50vw";
});

