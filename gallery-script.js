document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll('.slider');

  sliders.forEach(slider => {
    const slides = slider.querySelector('.slides');
    const images = slides.querySelectorAll('img');
    const btnNext = slider.querySelector('.next');
    const btnPrev = slider.querySelector('.prev');
    let currentIndex = 0;

    function updateSlider(animate = true) {
      const slideWidth = images[0].clientWidth + 15;
      slides.style.transition = animate ? 'transform 0.3s ease' : 'none';
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

    // Fluent touch support
    let startX = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let dragging = false;

    slider.addEventListener('touchstart', e => {
      startX = e.touches[0].clientX;
      dragging = true;
      slides.style.transition = 'none';
    });

    slider.addEventListener('touchmove', e => {
      if (!dragging) return;
      const currentX = e.touches[0].clientX;
      const deltaX = currentX - startX;
      const slideWidth = images[0].clientWidth + 15;
      currentTranslate = -currentIndex * slideWidth + deltaX;
      slides.style.transform = `translateX(${currentTranslate}px)`;
    });

    slider.addEventListener('touchend', e => {
      dragging = false;
      const slideWidth = images[0].clientWidth + 15;
      const movedBy = e.changedTouches[0].clientX - startX;

      if (movedBy < -50) {
        currentIndex = (currentIndex + 1) % images.length;
      } else if (movedBy > 50) {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
      }

      updateSlider();
    });
  });
});
