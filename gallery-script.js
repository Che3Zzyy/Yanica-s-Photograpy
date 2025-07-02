document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll('.slider');

  sliders.forEach(slider => {
    const slides = slider.querySelector('.slides');
    const images = slides.querySelectorAll('img');
    const btnNext = slider.querySelector('.next');
    const btnPrev = slider.querySelector('.prev');
    let currentIndex = 0;

    function updateSlider() {
      const slideWidth = images[0].clientWidth + 15; // Adjust if gap differs
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

    window.addEventListener('resize', updateSlider);
    updateSlider();

    // === Touch support for mobile ===
    let startX = 0;
    let endX = 0;

    slides.addEventListener('touchstart', e => {
      startX = e.touches[0].clientX;
    });

    slides.addEventListener('touchend', e => {
      endX = e.changedTouches[0].clientX;
      handleSwipe();
    });

    function handleSwipe() {
      const swipeDistance = endX - startX;
      if (swipeDistance > 50) {
        // Swipe right
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlider();
      } else if (swipeDistance < -50) {
        // Swipe left
        currentIndex = (currentIndex + 1) % images.length;
        updateSlider();
      }
    }
  });
});
