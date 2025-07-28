"use strict";

// toggle dark white mode
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("toggle");
  const mangaName = document.querySelector(".manga-name");

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");

    toggle.textContent = isDark ? "☀️" : "🌙";
    if (mangaName) {
      mangaName.style.color = isDark ? "#b2bec3" : "#2d3436";
    }
  });
});
