const toggleBtn = document.querySelector("button");
const aside = document.querySelector("aside");
const close = document.querySelector(".close-btn");

toggleBtn.addEventListener("click", function () {
  aside.classList.toggle("show-sidebar");
});

close.addEventListener("click", function () {
  aside.classList.remove("show-sidebar");
});
