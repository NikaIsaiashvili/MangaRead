"use strict";
const toggle = document.getElementById("toggle");
const searchButton = document.getElementById("search-button");
const carouselList = document.querySelector(".rec-manga-list");
const carouselWrapper = document.querySelector(".rec-manga-list");
const mangaContainer = document.querySelector(".rec-manga-list");
const isDark = document.body.classList.contains("dark");
const searchBox = document.getElementById("search-box");

const recMangaArray = [
  {
    name: "Solo Leveling",
    image: "/carousel-img/carousel-img-1.webp",
    info: "manga-1-info",
  },
  {
    name: "Naruto",
    image: "/carousel-img/carousel-img-2.webp",
    info: "manga-2-info",
  },
  {
    name: "Bleach",
    image: "/carousel-img/carousel-img-3.jpg",
    info: "manga-3-info",
  },
  {
    name: "One Piece",
    image: "/carousel-img/carousel-img-4.jpg",
    info: "manga-4-info",
  },
  {
    name: "Hunter X Hunter",
    image: "/carousel-img/carousel-img-5.jpg",
    info: "manga-5-info",
  },
  {
    name: "Attack On Titans",
    image: "/carousel-img/carousel-img-6.jpg",
    info: "manga-6-info",
  },
  {
    name: "Berserk",
    image: "/carousel-img/carousel-img-7.webp",
    info: "manga-7-info",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggle.textContent = isDark ? "☀️" : "🌙";
  });

  searchButton.addEventListener("click", () => {
    searchBox.classList.toggle("search-box-hide");
  });

  for (let i = 0; i < recMangaArray.length; i++) {
    const manga = recMangaArray[i];
    const mangaList = document.createElement("div");
    mangaList.classList.add("manga-list", `manga-${i + 1}`);

    mangaList.innerHTML = `
      <div class="manga-name">${manga.name}</div>
      <img class="manga-${i + 1}-img" src="${manga.image}" alt="${manga.name}">
      <div class="manga-info manga-info-${i + 1}">${manga.info}</div>
    `;
    mangaContainer.appendChild(mangaList);
  }

  carouselList.addEventListener("mouseenter", () => {
    carouselList.style.animationPlayState = "paused";
  });
  carouselList.addEventListener("mouseleave", () => {
    carouselList.style.animationPlayState = "running";
  });

  carouselWrapper.innerHTML += carouselWrapper.innerHTML;
});
