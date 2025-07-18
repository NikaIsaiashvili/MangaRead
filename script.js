"use strict";
const toggle = document.getElementById("toggle");
const searchButton = document.getElementById("search-button");
const carouselList = document.querySelector(".rec-manga-list");

document.addEventListener("DOMContentLoaded", () => {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    toggle.textContent = isDark ? "☀️" : "🌙";
  });

  searchButton.addEventListener("click", () => {
    const searchBox = document.getElementById("search-box");
    searchBox.classList.toggle("search-box-hide");
  });

  carouselList.addEventListener("mouseenter", () => {
    carouselList.style.animationPlayState = "paused";
  });
  carouselList.addEventListener("mouseleave", () => {
    carouselList.style.animationPlayState = "running";
  });
});
