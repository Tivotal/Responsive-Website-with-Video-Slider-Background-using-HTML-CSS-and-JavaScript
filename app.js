/* Created by Tivotal */

let menuBtn = document.querySelector(".menu-btn");
let header = document.querySelector(".header");
let btns = document.querySelectorAll(".nav-item");
let videos = document.querySelectorAll("video");

menuBtn.addEventListener("click", () => {
  header.classList.toggle("active");
});

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    btns.forEach((item) => {
      item.classList.remove("active");
    });

    videos.forEach((video) => {
      video.classList.remove("active");
    });

    videos[i].classList.add("active");
    btn.classList.add("active");
  });
});
