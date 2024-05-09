document.addEventListener('DOMContentLoaded', function() {
    const switchSlide = (container, interval) => {
        let slides = container.querySelectorAll('img');
        if (slides.length === 0) return;
        let currentSlide = 0;
        setInterval(() => {
            slides[currentSlide].style.opacity = 0;
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].style.opacity = 1;
        }, interval);
    };

    const imageCarousel = document.querySelector('.image-carousel');
    const teamSlideshow = document.querySelector('.team-slideshow');

    if (imageCarousel) {
        switchSlide(imageCarousel, 2000);
    }

    if (teamSlideshow) {
        switchSlide(teamSlideshow, 3000);
    }

});