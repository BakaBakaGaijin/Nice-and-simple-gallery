const slides = document.querySelectorAll('.slide');

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses(slide);
            slide.classList.toggle('active');
    })
}

function clearActiveClasses(currentSlide) {
    slides.forEach((slide) => {
        if (slide !== currentSlide) {
            slide.classList.remove('active');
        }       
    })
}