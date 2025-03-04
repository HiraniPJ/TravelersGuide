document.addEventListener('DOMContentLoaded', function() {
    
    //hamburger Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            if (navLinks.style.display === 'block') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'block';
            }
        });
    }


    // Slideshow functionality
    let slideIndex = 1;
    showSlides(slideIndex);
    
    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    
    // Thumbnail image controls
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("slide");
        let thumbnails = document.getElementsByClassName("demo");
    
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        
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