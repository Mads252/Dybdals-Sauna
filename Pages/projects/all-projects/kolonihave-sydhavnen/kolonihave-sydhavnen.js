// Initializing currentIndex to keep track of the current slide index
let currentIndex = 0;

// Function to determine the number of cards to show based on window width
function getCardsToShow() {
    const width = window.innerWidth;
    if (width < 768) {
        return 1; // her vælger vi kun at vise et billede ad gangen på de mindre skærme :)
    } else {
        return 1.5; // Show 1.5 cards at a time on larger screens
    }
}

// Function to show a specific slide
function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-card');
    const totalSlides = slides.length;
    const cardsToShow = getCardsToShow();
    const maxIndex = totalSlides - Math.ceil(cardsToShow);

    // Handling index out of bounds
    if (index > maxIndex) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = maxIndex;
    } else {
        currentIndex = index;
    }

    // Calculating transform value for slide animation
    const newTransformValue = -currentIndex * (100 / cardsToShow);
    document.querySelector('.carousel-track').style.transform = `translateX(${newTransformValue}%)`;
}

// next slide knap
function nextSlide() {
    showSlide(currentIndex + 1);
}

// Function to show the previous slide
function prevSlide() {
    showSlide(currentIndex - 1);
}

// Event listener to update slide display on window resize
window.addEventListener('resize', () => {
    showSlide(currentIndex);
});

// Event listener to initialize slide display when DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});
