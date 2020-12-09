const btns = document.querySelectorAll('.btn');

btns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        stop();
        document.getElementById(btn.innerHTML).play();
    });
});

function stop(){
    btns.forEach(btn=>{
        const song = document.getElementById(btn.innerHTML);
        song.pause();
        song.currentTime = 0;
    });
}