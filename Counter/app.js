const buttons = document.querySelectorAll(".btn");
const count = document.getElementById("value");

console.log(buttons);

let value = 0;

buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const target = e.currentTarget.classList;
    if (target.contains("decrease")) value--;
    else if (target.contains("increase")) value++;
    else value = 0;
    if (value > 0) count.style.color = "green";
    if (value < 0) count.style.color = "red";
    if (value === 0) count.style.color = "#222";
    count.textContent = value;
  });
});
