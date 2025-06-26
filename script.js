// Dark mode toggle
document.getElementById("toggleDarkMode").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  this.textContent = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// Slider
let slideIndex = 0;
const slides = document.querySelector(".slides");
const totalSlides = slides.children.length;

function showSlide(index) {
  const slideWidth = slides.children[0].clientWidth;
  slides.style.transform = `translateX(-${index * slideWidth}px)`;
}

document.querySelector(".next").addEventListener("click", () => {
  slideIndex = (slideIndex + 1) % totalSlides;
  showSlide(slideIndex);
});

document.querySelector()

let currentSlide = 0;
const slides = document.querySelector('.slides');
const slideImages = document.querySelectorAll('.slides img');
const totalSlides = slideImages.length;

document.querySelector('.next').addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlidePosition();
});

document.querySelector('.prev').addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlidePosition();
});

function updateSlidePosition() {
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}
