const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

let index = 0;
console.log(slides);

if (index <= 0) {
  prevBtn.style.display = "none";
}

slides.forEach((slide, idx) => {
  slide.style.left = `${idx * 100}%`;
});

nextBtn.addEventListener("click", function () {
  index++;
  getCarousel();
  if (index >= slides.length - 1) {
    this.style.display = "none";
  } else {
    nextBtn.style.display = "block";
    prevBtn.style.display = "block";
  }
});

prevBtn.addEventListener("click", function () {
  index--;
  getCarousel();
  if (index <= 0) {
    this.style.display = "none";
  } else {
    nextBtn.style.display = "block";
    prevBtn.style.display = "block";
  }
});

function getCarousel() {
  slides.forEach((slide) => {
    console.log(index * 100);
    slide.style.transform = `translateX(-${index * 100}%)`;
  });
}
