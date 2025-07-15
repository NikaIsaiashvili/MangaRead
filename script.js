"use strict";
const toggle = document.getElementById("toggle");

document.addEventListener("DOMContentLoaded", () => {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    toggle.textContent = isDark ? "☀️" : "🌙";
  });
});
