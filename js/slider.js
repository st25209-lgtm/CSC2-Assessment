let showSlide = 1;
showSlides(showSlide)

function proceedSlide(y) {
    showSlides(showSlide += y);
}

function current(y) {
    showSlides(showSlide = y)
}

function showSlides(y) {
    let slides = document.getElementsByClassName("slide-items");
    if (y > slides.length) {showSlide = 1}
    if (y < 1) {showSlide = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[showSlide-1].style.display = "block";
}

/* credits: https://www.w3schools.com/howto/howto_js_slideshow.asp */