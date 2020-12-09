let input = document.getElementById('input');
console.log(input);
const btn = document.getElementById('btn');
btn.addEventListener('click', ()=>{
    if(input.style.width == "0rem"){
        input.style.width = "20rem";
        input.style.padding = "1rem";
        input.focus();
    }
    else{
        input.style.width = "0rem";
        input.style.padding = "1rem 0";
    }
})
