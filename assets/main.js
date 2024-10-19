document.addEventListener('DOMContentLoaded', function() {
    const switchSlide = (container, interval) => {
        let slides = container.querySelectorAll('img');
        let currentSlide = 0;
        let slideInterval = setInterval(() => {
            slides[currentSlide].style.opacity = 0;
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].style.opacity = 1;
        }, interval);

        container.addEventListener('mouseenter', () => clearInterval(slideInterval));
        container.addEventListener('mouseleave', () => {
            slideInterval = setInterval(() => {
                slides[currentSlide].style.opacity = 0;
                currentSlide = (currentSlide + 1) % slides.length;
                slides[currentSlide].style.opacity = 1;
            }, interval);
        });
    };

    //initialize carousels
    const imageCarousel = document.querySelector('.image-carousel');
    if (imageCarousel) {
        switchSlide(imageCarousel, 2000);
    }

    //hamburger Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });

        
    // Close Menu on Outside Click
    document.addEventListener('click', function(event) {
        if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.classList.remove('active');
        }
    });

});