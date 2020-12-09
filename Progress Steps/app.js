const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

var currentActive = 1;
console.log(circles.length)
prev.addEventListener('click', ()=>{
    currentActive--;
    if(currentActive < 1) {
        currentActive = 1;
    }
    update();
    console.log(currentActive);
});
next.addEventListener('click', ()=>{
    currentActive++;
    if(currentActive > circles.length){
        currentActive = circles.length
    }
    console.log(currentActive);
    update();
});

function update(){
    circles.forEach((circle, i)=>{
        if(i<currentActive){
            circle.classList.add('active');
        }else{
            circle.classList.remove('active');
        }
    });
    progress.style.width = (currentActive - 1) / (circles.length - 1) * 82 + '%';

    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}