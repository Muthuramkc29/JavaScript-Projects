const decrease = document.querySelector(".decrease");
const increase = document.querySelector(".increase");
const reset = document.querySelector(".reset");
const count = document.getElementById("value");

let value = 0;

const increaseFn = () => {
  value = value + 1;
  if (value === 0) {
    count.style.color = "#222";
    count.textContent = value;
    return;
  }
  if (value > 0) count.style.color = "green";
  count.textContent = value;
};

const decreaseFn = () => {
  value = value - 1;
  if (value === 0) {
    count.style.color = "#222";
    count.textContent = value;
    return;
  }
  if (value < 0) count.style.color = "red";
  count.textContent = value;
};

const resetFn = () => {
  value = 0;
  count.style.color = "#222";
  count.textContent = value;
};

increase.addEventListener("click", increaseFn);
decrease.addEventListener("click", decreaseFn);
reset.addEventListener("click", resetFn);
