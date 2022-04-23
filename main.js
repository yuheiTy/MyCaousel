const next = document.getElementById("next");
const prev = document.getElementById("prev");
const ul = document.querySelector("ul");
const slides = ul.children;
let currentIndex = 0;

function updeteButtns(){
    prev.classList.remove('hidden');
    next.classList.remove('hidden');
    if(currentIndex === 0){
        prev.classList.add('hidden');
    }
    // if(currentIndex === 2){
    if(currentIndex === slides.length -1){
        next.classList.add('hidden');
    }
}

updeteButtns();
next.addEventListener('click',()=> {
    currentIndex++;
    updeteButtns();
    const slidewidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1*slidewidth * currentIndex}px)`;
})

prev.addEventListener('click',()=> {
    currentIndex--;
    updeteButtns();
    const slidewidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1*slidewidth * currentIndex}px)`;
})