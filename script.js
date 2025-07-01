document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll('.slider');

  sliders.forEach((slider) => {
    let currentSlide = 0;
    const slidesContainer = slider.querySelector('.slides');
    const slideImages = slidesContainer.querySelectorAll('img');
    const nextBtn = slider.querySelector('.next');
    const prevBtn = slider.querySelector('.prev');
    const totalSlides = slideImages.length;

    function updateSlidePosition() {
      const slideWidth = slideImages[0].clientWidth;
      slidesContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }

    if (nextBtn && prevBtn && slidesContainer && totalSlides > 0) {
      nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlidePosition();
      });

      prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlidePosition();
      });

      window.addEventListener('resize', updateSlidePosition);
      window.addEventListener('load', updateSlidePosition);
    }
  });
});
