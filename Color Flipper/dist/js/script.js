const colors = ["red", "green", "rgba(132,122,200", "#f15025"];
const btn = document.querySelector(".main__btn");
const span = document.querySelector("span");

console.log(span);

console.log(btn);

const changeColor = () => {
  const randamColor = getRandomNumber();

  document.body.style.backgroundColor = colors[randamColor];
  span.textContent = colors[randamColor];
};

btn.addEventListener("click", changeColor);

const getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};

const getRandomRgb = () => {
  return (
    "rgb(" +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    ")"
  );
};
