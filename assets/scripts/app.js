const carouselDomElement = document.querySelector('#pandaCarousel');
console.log(carouselDomElement);

const carousel = new bootstrap.Carousel(carouselDomElement, {
      interval: 5000,
      slide: false,
      wrap: true
})


function goToPrevSlide() {
    carousel.prev();
}

function goToNextSlide() {
    carousel.next();
}