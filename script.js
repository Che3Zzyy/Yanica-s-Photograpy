document.addEventListener('DOMContentLoaded', () => {
  let currentSlide = 0;
  const slides = document.querySelector('.slides');
  const slideImages = document.querySelectorAll('.slides img');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');
  const totalSlides = slideImages.length;

  function updateSlidePosition() {
    const slideWidth = slideImages[0].clientWidth;
    slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  }

  if (nextBtn && prevBtn && slides && totalSlides > 0) {
    nextBtn.addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateSlidePosition();
    });

    prevBtn.addEventListener('click', () => {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      updateSlidePosition();
    });

    window.addEventListener('resize', updateSlidePosition);
  }

  // Ensure images are loaded before calculating width
  window.addEventListener('load', () => {
    updateSlidePosition();
  });
});