// Used .getBoundingClientRect() to add dynamic height to the NavMenu

const navToggler = document.querySelector(".nav-toggle");
const nav = document.querySelector("#nav");
const scrollTop = document.querySelector(".top-link");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
const date = document.getElementById("date");
const navLinks = document.querySelectorAll(".scroll-link");

date.textContent = new Date().getFullYear();

navToggler.addEventListener("click", function () {
  //   linksContainer.classList.toggle("show-links"); -- Not for Dynamic Heights
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linkHeight = links.getBoundingClientRect().height;
  console.log(linkHeight);
  console.log(containerHeight);
  if (containerHeight === 0) linksContainer.style.height = `${linkHeight}px`;
  else linksContainer.style.height = 0;
});

window.addEventListener("scroll", function () {
  const navHeight = nav.getBoundingClientRect().height;
  const scrollHeight = window.pageYOffset;
  //   console.log(scrollHeight);
  //   console.log(navHeight);
  if (scrollHeight > navHeight) {
    nav.classList.add("fixed-nav");
  } else {
    nav.classList.remove("fixed-nav");
  }

  if (scrollHeight > 500) scrollTop.classList.add("show-link");
  else scrollTop.classList.remove("show-link");
});

scrollTop.addEventListener("click", function () {
  window.scroll({
    top: 0,
    left: 0,
  });
});

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    linksContainer.style.height = 0;
    const id = e.currentTarget.getAttribute("href").slice(1);
    console.log(id);
    const element = document.getElementById(id);
    const navHeight = nav.getBoundingClientRect().height;
    const fixedNav = nav.classList.contains("fixed-nav");
    const containerHeight = links.getBoundingClientRect().height;
    console.log(element.offsetTop);
    console.log(navHeight);
    let position = element.offsetTop - navHeight;
    if (!fixedNav) {
      position = position - navHeight;
    }

    // For mobile display
    if (navHeight > 82) {
      position = position + containerHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});
