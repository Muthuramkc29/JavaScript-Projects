const buttons = document.querySelectorAll(".btn");
const count = document.getElementById("value");

console.log(buttons);

let value = 0;

buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (e.currentTarget.classList.contains("decrease")) {
      value--;
      if (checkCount(value)) return;
      if (value < 0) count.style.color = "red";
      count.textContent = value;
    } else if (e.currentTarget.classList.contains("increase")) {
      value++;
      if (checkCount(value)) return;
      if (value > 0) count.style.color = "green";
      count.textContent = value;
    } else {
      count.textContent = 0;
      count.style.color = "#222";
      value = 0;
    }
  });
});

const checkCount = (val) => {
  if (val === 0) {
    count.style.color = "#222";
    count.textContent = val;
    return true;
  }
  return false;
};
