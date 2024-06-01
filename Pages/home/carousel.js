// Class to handle carousel functionality
class Carousel {
    // Constructor function to initialize the carousel
    constructor(carouselId) {
        // Assigning carousel ID and initial index
        this.carouselId = carouselId;
        this.currentIndex = 0;

        // Getting carousel element and its slides
        this.carousel = document.getElementById(carouselId);
        this.slides = this.carousel.querySelectorAll('.carousel-card');
        this.totalSlides = this.slides.length;

        // Getting previous and next buttons
        this.prevButton = this.carousel.querySelector('.prev');
        this.nextButton = this.carousel.querySelector('.next');

        // Updating number of cards to show based on window size
        this.updateCardsToShow();
        window.addEventListener('resize', () => this.updateCardsToShow());

        // Adding event listeners for previous and next buttons
        this.prevButton.addEventListener('click', () => {
            this.prevSlide();
        });

        this.nextButton.addEventListener('click', () => {
            this.nextSlide();
        });

        // Showing initial slide
        this.showSlide(this.currentIndex);
    }

    // Function to update number of cards to show based on window size
    updateCardsToShow() {
        if (window.innerWidth <= 480) {
            this.cardsToShow = 1;
        } else if (window.innerWidth <= 768) {
            this.cardsToShow = 2;
        } else {
            this.cardsToShow = 3;
        }
        this.maxIndex = this.totalSlides - this.cardsToShow;
        this.showSlide(this.currentIndex); // Ensure the current view is updated
    }

    // Function to show a specific slide
    showSlide(index) {
        // Handling index out of bounds
        if (index > this.maxIndex) {
            this.currentIndex = 0;
        } else if (index < 0) {
            this.currentIndex = this.maxIndex;
        } else {
            this.currentIndex = index;
        }

        // Calculating transform value for slide animation
        const newTransformValue = -this.currentIndex * (100 / this.cardsToShow);
        this.carousel.querySelector('.carousel-track').style.transform = `translateX(${newTransformValue}%)`;

        // Hiding or showing previous and next buttons based on current index
        if (this.currentIndex === 0) {
            this.prevButton.style.display = 'none';
        } else {
            this.prevButton.style.display = 'block';
        }

        if (this.currentIndex === this.maxIndex) {
            this.nextButton.style.display = 'none';
        } else {
            this.nextButton.style.display = 'block';
        }
    }

    // Function to show next slide
    nextSlide() {
        this.showSlide(this.currentIndex + 1);
    }

    // Function to show previous slide
    prevSlide() {
        this.showSlide(this.currentIndex - 1);
    }
}

// Initializing carousels when DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    const carousel1 = new Carousel('carousel1');
    const carousel2 = new Carousel('carousel2');
});



// We used GPT for this code because we ran out of time.
// prompt -> 
// jeg skal lave en carrusel med 5 billeder, den på gerne kunne køre hele vejen rundt, samt køre automatisk hvert 3 sekund, og så skal den have en bredde på cirka 80% af skærmens bredde, samt være kodet i html, css og javascript
// prompt ->
let gptCurrentIndex = 0;
const gptCarousel = document.querySelector('.gpt-carousel');
const gptItems = document.querySelectorAll('.gpt-carousel-item');
const gptTotalItems = gptItems.length;
let gptItemsPerView = gptGetItemsPerView();

function gptGetItemsPerView() {
    if (window.innerWidth >= 1024) {
        return 3;
    } else if (window.innerWidth >= 768) {
        return 2;
    } else {
        return 1;
    }
}

function gptShowNextItem() {
    gptCurrentIndex = (gptCurrentIndex + 1) % gptTotalItems;
    const gptNewTransformValue = -gptCurrentIndex * (100 / gptItemsPerView);
    gptCarousel.style.transform = `translateX(${gptNewTransformValue}%)`;
}

window.addEventListener('resize', () => {
    gptItemsPerView = gptGetItemsPerView();
    // Adjust the transform to match the current index and new itemsPerView
    const gptNewTransformValue = -gptCurrentIndex * (100 / gptItemsPerView);
    gptCarousel.style.transform = `translateX(${gptNewTransformValue}%)`;
});

setInterval(gptShowNextItem, 3000);

