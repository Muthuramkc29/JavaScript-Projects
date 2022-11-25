const btn = document.querySelector(".main__btn");
const span = document.querySelector("span");

console.log(span);

console.log(btn);

const changeColor = () => {
  const randomColor =
    "#" + Math.random().toString(16).slice(2, 8).toUpperCase();
  console.log(randomColor);
  document.body.style.backgroundColor = randomColor;
  span.textContent = randomColor;
};

btn.addEventListener("click", changeColor);
