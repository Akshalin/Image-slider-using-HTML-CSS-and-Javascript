const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let index = 0;

prevButton.addEventListener('click', () => {
  index--;
  if (index < 0) index = slides.length - 1;
  updateSlides();
});

nextButton.addEventListener('click', () => {
  index++;
  if (index >= slides.length) index = 0;
  updateSlides();
});

function updateSlides() {
  const translateX = -index * 600;
  document.querySelector('.slides').style.transform = `translateX(${translateX}px)`;
}