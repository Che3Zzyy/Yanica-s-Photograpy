document.addEventListener('DOMContentLoaded', () => {
  // Dark mode toggle
  const darkModeToggle = document.getElementById("toggleDarkMode");
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
      this.textContent = document.body.classList.contains("dark-mode")
        ? "☀️ Light Mode"
        : "🌙 Dark Mode";
    });
  }

  // Slider logic
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
      console.log('Prev button clicked'); // Debug log to confirm click
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      updateSlidePosition();
    });

    window.addEventListener('resize', updateSlidePosition);
    updateSlidePosition();
  }
});
