const cards = document.querySelectorAll('.card');
console.log(cards);
cards.forEach(i => {
    i.addEventListener("click",()=>{
        removeClass();
        i.classList.add('active');
    });
});

function removeClass() {
    cards.forEach(card => {
        card.classList.remove('active')
    })
}
