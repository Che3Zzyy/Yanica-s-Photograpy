document.addEventListener('DOMContentLoaded', () => {
  // Example main page JS — add more if you want
  // (e.g. dark mode toggle, animations, etc.)
  // ---

  // Gallery slider code — runs only if sliders are present
  const sliders = document.querySelectorAll('.slider');
  if (sliders.length > 0) {
    sliders.forEach(slider => {
      const slides = slider.querySelector('.slides');
      const images = slides.querySelectorAll('img');
      const btnNext = slider.querySelector('.next');
      const btnPrev = slider.querySelector('.prev');
      let currentIndex = 0;

      function updateSlider() {
        const slideWidth = slider.querySelector('.slides-container').clientWidth;
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
    });
  }
});
