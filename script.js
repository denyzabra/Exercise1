let slideIndex = 1;

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
}

function changeSlide(n) {
    showSlide((slideIndex += n));
}

showSlide(slideIndex);
