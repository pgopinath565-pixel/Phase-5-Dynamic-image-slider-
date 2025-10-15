const slides = document.querySelectorAll('.slide');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

let index = 0;

function showSlide(i) {
    if (i >= slides.length) index = 0;
    else if (i < 0) index = slides.length - 1;
    else index = i;
    const offset = -index * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

// Automatic sliding
let slideInterval = setInterval(() => {
    showSlide(index + 1);
}, 3000); // Change slide every 3 seconds

// Manual controls
next.addEventListener('click', () => {
    showSlide(index + 1);
    resetInterval();
});

prev.addEventListener('click', () => {
    showSlide(index - 1);
    resetInterval();
});

function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
        showSlide(index + 1);
    }, 3000);
}
