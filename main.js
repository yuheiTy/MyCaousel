const next = document.getElementById("next");
const prev = document.getElementById("prev");
const ul = document.querySelector("ul");
const slides = ul.children;
const dots = [];
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

function moveSlides(){
    const slidewidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1*slidewidth * currentIndex}px)`;
}

function setupButtons(){
    for(let i = 0; i < slides.length; i++){
        const button = document.createElement('button');
        button.addEventListener('click', ()=> {
            currentIndex = i;
            updeteDots();
            updeteButtns();
            moveSlides();
        });
        dots.push(button);
        document.querySelector('nav').appendChild(button);
    }
    dots[0].classList.add('current');
}

function updeteDots(){
    dots.forEach(dot => {
        dot.classList.remove('current');
    });
    dots[currentIndex].classList.add('current');
}

updeteButtns();
setupButtons();
next.addEventListener('click',()=> {
    currentIndex++;
    updeteButtns();
    updeteDots();
    moveSlides();
});

prev.addEventListener('click',()=> {
    currentIndex--;
    updeteButtns();
    moveSlides();
});

window.addEventListener('resize',()=>{
    moveSlides();
});