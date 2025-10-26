// header
let icon = document.getElementById("icon");
let nav = document.getElementById("nav");
let main = document.getElementById("main");
let title = document.getElementById("title");
let list = document.querySelector(".list");
let header = document.querySelector(".header");
let links = document.querySelectorAll("#nav a");
let footer = document.getElementById("footer");
icon.addEventListener("click", (x) => {
  nav.classList.toggle("hidden");
  title.classList.toggle("invisible");
  nav.classList.toggle("flex");
  main.classList.toggle("blur-md");
  header.classList.toggle("shadow-none");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.add("hidden");
    main.classList.remove("blur-md");
    title.classList.remove("invisible");
  });

  window.addEventListener("scroll", () => {
    let footerTop = footer.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;
    if (footerTop < windowHeight) {
      header.classList.add("!bg-green-950");
      console.log(footerTop, windowHeight);
    } else {
      header.classList.remove("!bg-green-950");
    }
  });
});
// btn scroll to top
let btn = document.querySelector(".btn");
window.onscroll = function () {
  if (window.scrollY >= 500) {
    btn.classList.remove("hidden");
    btn.classList.add("fixed");
  } else {
    btn.classList.remove("fixed");
    btn.classList.add("hidden");
  }
};
btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
