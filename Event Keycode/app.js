const key = document.getElementById('key');
const keyCode = document.getElementById('keyCode');
const code = document.getElementById('code');
const result = document.querySelector('.result');
const message = document.querySelector('#message');
window.addEventListener('keydown', (event)=>{
    message.style.display = "none";
    result.style.display = "flex";
    key.innerHTML = event.key===' '?'space':event.key;
    keyCode.innerHTML = event.keyCode;
    code.innerHTML = event.code;
});