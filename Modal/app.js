const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");
const button = document.querySelector("button");

button.addEventListener("click", function () {
  modal.classList.add("open-modal");
});

closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});
