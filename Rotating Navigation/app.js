const openTab = document.getElementById('open');
const closeTab = document.getElementById('close');
const main = document.getElementById('main');
const rot = document.getElementById('rot');
const navi = document.getElementById('navi');

openTab.addEventListener('click', ()=>{
    main.style.transform = "rotate(-20deg)";
    rot.style.transform = "rotate(-45deg)";
    navi.style.transform = "translateX(0)"
});
closeTab.addEventListener('click', ()=>{
    main.style.transform = "rotate(0deg)"
    rot.style.transform = "rotate(30deg)"
    navi.style.transform = "translateX(-20rem)"
});