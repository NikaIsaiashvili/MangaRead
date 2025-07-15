"use strict";
const toggle = document.getElementById("toggle");
const searchButton = document.getElementById("search-button");

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
});
