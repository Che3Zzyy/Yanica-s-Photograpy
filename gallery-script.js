document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll('.slider');

  sliders.forEach(slider => {
    const slides = slider.querySelector('.slides');
    const images = slides.querySelectorAll('img');
    const btnNext = slider.querySelector('.next');
    const btnPrev = slider.querySelector('.prev');
    let currentIndex = 0;

    function updateSlider() {
      const slideWidth = images[0].clientWidth + 15; 
      // Added 15px gap to account for space between images (if gap is in CSS)
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
});
