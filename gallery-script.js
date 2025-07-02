// gallery-script.js - Slider functionality for gallery page

document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll('.slider');

  sliders.forEach(slider => {
    const slides = slider.querySelector('.slides');
    const images = slides.querySelectorAll('img');
    const btnNext = slider.querySelector('.next');
    const btnPrev = slider.querySelector('.prev');
    let currentIndex = 0;

    function updateSlider() {
      const slideWidth = images[0].clientWidth + 15; // +15 accounts for gap between slides
      slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    btnNext.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateSlider();
    });

    btnPrev.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateSlider();
    });

    // Keep slider position consistent on window resize
    window.addEventListener('resize', updateSlider);

    updateSlider();
  });
});