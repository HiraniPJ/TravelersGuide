document.addEventListener('DOMContentLoaded', function() {
    
    //hamburger Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });


    // Slideshow functionality
    let slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
        showSlides += n;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        if (slideIndex < 1) {
            slideIndex = slides.length;
        }
        showSlides(slideIndex);
    }

    // Thumbnail image controls
    function currentSlide(n) {
        showSlides = n;
        showSlides(slideIndex);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("slide");
        let thumbnails = document.getElementsByClassName("demo");

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }

        for (i = 0; i < thumbnails.length; i++) {
            thumbnails[i].className = thumbnails[i].className.replace(" active", "");
        }

        slides[slideIndex-1].style.display = "block";  
        thumbnails[slideIndex-1].className += " active";
    }

 // Event listeners for next/previous buttons
 const prevButton = document.querySelector('.prev');
 const nextButton = document.querySelector('.next');

 if (prevButton) {
     prevButton.addEventListener('click', function() {
         plusSlides(-1);
     });
 }

 if (nextButton) {
     nextButton.addEventListener('click', function() {
         plusSlides(1);
     });
 }

    // Event listeners for thumbnail controls
    let dots = document.querySelectorAll('.demo');
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentSlide(index + 1);
        });
    });

});