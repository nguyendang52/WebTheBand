const slides = document.querySelectorAll(".myslide");
let currentSlide = 0;
function carousel() {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  if (currentSlide == slides.length) {
    currentSlide = 0;
  }
  slides[currentSlide].style.display = "block";
  currentSlide++;
  setTimeout(carousel, 4000);
}
carousel();
