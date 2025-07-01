document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll('.slider');

  sliders.forEach((slider) => {
    let currentSlide = 0;
    const slidesContainer = slider.querySelector('.slides');
    const slideImages = slidesContainer.querySelectorAll('img');
    const nextBtn = slider.querySelector('.next');
    const prevBtn = slider.querySelector('.prev');
    const totalSlides = slideImages.length;

    let slideWidth = 0;

    function updateSlideWidth() {
      slideWidth = slideImages[0].getBoundingClientRect().width;
    }

    function updateSlidePosition() {
      updateSlideWidth();
      slidesContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateSlidePosition();
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      updateSlidePosition();
    }

    // Navigation buttons
    if (nextBtn && prevBtn) {
      nextBtn.addEventListener('click', nextSlide);
      prevBtn.addEventListener('click', prevSlide);
    }

    // Handle resize
    window.addEventListener('resize', updateSlidePosition);
    window.addEventListener('load', updateSlidePosition);
    updateSlidePosition();

    // ✅ Optional: Mobile swipe support
    let startX = 0;
    let isDragging = false;

    slidesContainer.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
    });

    slidesContainer.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      const moveX = e.touches[0].clientX;
      const diff = startX - moveX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) nextSlide(); else prevSlide();
        isDragging = false;
      }
    });

    slidesContainer.addEventListener('touchend', () => {
      isDragging = false;
    });
  });
});
