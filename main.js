const next = document.getElementById("next");
const prev = document.getElementById("prev");
const ul = document.querySelector("ul");
const slides = ul.children;
let currentIndex = 0;

next.addEventListener('click',()=> {
    currentIndex++;
    const slidewidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1*slidewidth * currentIndex}px)`;
})

prev.addEventListener('click',()=> {
    currentIndex--;
    const slidewidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1*slidewidth * currentIndex}px)`;
})