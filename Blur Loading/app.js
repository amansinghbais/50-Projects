let text = document.getElementById("text");
let bg = document.getElementById("main");
var count = 1 ;
var blur = setInterval(blurLoading, 30);

function blurLoading(){
    count++;
    let temp = 100-count;
    if(count>99){
        text.style.opacity = `0`;
        clearInterval(blur);
    }else{
        text.innerText = `${count}%`;
        text.style.opacity = `0.${temp}`;
        bg.style.filter = `blur(${(100-count)/10}px)`;
    }
}