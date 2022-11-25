const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".content");
console.log(tabs);

tabs.forEach((tab) => {
  tab.addEventListener("click", function (e) {
    tabs.forEach((tab) => tab.classList.remove("active"));
    contents.forEach((content) => content.classList.remove("active"));
    const target = e.currentTarget;
    target.classList.add("active");
    const element = document.getElementById(target.getAttribute("data-id"));
    // console.log(element);
    element.classList.add("active");
  });
});
