"use strict";

const toggle = document.getElementById("toggle");
const searchButton = document.getElementById("search-button");
const carousel = document.querySelector(".rec-manga-list");
const searchBox = document.getElementById("search-box");

const recMangaArray = [
  {
    name: "Solo Leveling",
    image: "/carousel-img/carousel-img-1.webp",
    info: "In this world where Hunters with various magical powers battle monsters from invading the defenceless humanity, Sung Jin-Woo was the weakest of all the Hunters, barely able to make a living.However, a mysterious System grants him the power of the ‘Player’, setting him on a course for an incredible and often times perilous Journey.Follow Sung Jin-Woo as he embarks on an adventure to become an unparalleled existence through his “Level-Up” system - the only one in the entire world!",
  },
  {
    name: "Naruto",
    image: "/carousel-img/carousel-img-2.webp",
    info: "Naruto is a ninja-in-training whose wild antics amuse his teammates. But he's completely serious about one thing: becoming the world's greatest ninja! As the battle against the Tailed Beast-targeting Akatsuki rages on, the heroic sibling battle between Sasuke and Itachi eventually concludes.",
  },
  {
    name: "Bleach",
    image: "/carousel-img/carousel-img-3.jpg",
    info: "Ichigo Kurosaki is a teenager from Karakura Town who possesses the rare ability to perceive spirits. This gift leads him to encounter Rukia Kuchiki, a warrior from another world who is hunting a Hollow—a monstrous lost soul that preys on both the living and the dead.",
  },
  {
    name: "One Piece",
    image: "/carousel-img/carousel-img-4.jpg",
    info: "One Piece (stylized in all caps) is a Japanese manga series written and illustrated by Eiichiro Oda. It follows the adventures of Monkey D. Luffy and his crew, the Straw Hat Pirates, as he explores the Grand Line in search of the mythical treasure known as the 'One Piece' to become the next King of the Pirates.",
  },
  {
    name: "Hunter X Hunter",
    image: "/carousel-img/carousel-img-5.jpg",
    info: "The story focuses on a young boy named Gon Freecss who discovers that his father, who left him at a young age, is actually a world-renowned Hunter, a licensed professional who specializes in fantastical pursuits such as locating rare or unidentified animal species, treasure hunting, surveying unexplored enclaves, or ...",
  },
  {
    name: "Attack On Titans",
    image: "/carousel-img/carousel-img-6.jpg",
    info: "A Japanese manga series written and illustrated by Hajime Isayama, Attack on Titan is set in a world where humanity lives inside cities surrounded by enormous walls that protect them from gigantic man-eating humanoids called Titans.",
  },
  {
    name: "Berserk",
    image: "/carousel-img/carousel-img-7.webp",
    info: "'Berserk' is a dark fantasy manga series created by Kentaro Miura, first published in 1988. The story follows Guts, a tragic antihero known as the Black Swordsman, who battles his way through a brutal and unforgiving world filled with demons, knights, and moral complexities.",
  },
];
// toggle dark white mode
document.addEventListener("DOMContentLoaded", () => {
  carousel.style.animationPlayState = "running";
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    toggle.textContent = isDark ? "☀️" : "🌙";
    carousel.style.backgroundColor = isDark ? "#2d3436" : "#f0f0f0";
  });
  // search button onclick
  searchButton.addEventListener("click", () => {
    searchBox.classList.toggle("search-box-hide");
  });
  // makes array lenght divs for rec manga
  for (let i = 0; i < recMangaArray.length; i++) {
    const manga = recMangaArray[i];
    const mangaList = document.createElement("div");
    mangaList.classList.add("manga-list", `manga-${i + 1}`);

    mangaList.innerHTML = `
      <div class="manga-name">${manga.name}</div>
      <img class="manga-${i + 1}-img" src="${manga.image}" alt="${manga.name}">
      <div class="manga-info manga-info-${i + 1}">${manga.info}</div>
    `;
    carousel.appendChild(mangaList);
  }
  // on mouse hover stops carousel
  carousel.addEventListener("mouseenter", () => {
    carousel.style.animationPlayState = "paused";
  });
  carousel.addEventListener("mouseleave", () => {
    carousel.style.animationPlayState = "running";
  });
  carousel.innerHTML += carousel.innerHTML;
});
