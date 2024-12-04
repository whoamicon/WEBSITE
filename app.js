/* Created by Tivotal */

let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

let themeToggler = document.querySelector(".theme-toggler");
let toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.onclick = () => {
  themeToggler.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
  themeToggler.classList.remove("active");
};

document.querySelectorAll(".theme-toggler .theme-btn").forEach((btn) => {
  btn.onclick = () => {
    let color = btn.style.background;
    document.querySelector(":root").style.setProperty("--theme-color", color);
  };
});

var swiper = new Swiper(".home-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

// let currentIndex = 0;

// function slideMembers() {
//   const slider = document.querySelector('.slider');
//   const totalMembers = document.querySelectorAll('.member').length;
  
//   currentIndex++;
//   if (currentIndex >= totalMembers) {
//     currentIndex = 0;
//   }
  
//   slider.style.transform = `translateX(-${currentIndex * 330}px)`;
// }

// setInterval(slideMembers, 3000); // Change slide every 3 seconds

let currentIndex = 0;
const members = document.querySelectorAll('.team-member');
const totalMembers = members.length;

function showNextMember() {
  currentIndex = (currentIndex + 1) % totalMembers;
  const slider = document.querySelector('.team-slider');
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// setInterval(showNextMember, 5000);  // Slide every 3 seconds

document.querySelectorAll('.icons .icon').forEach(icon => {
  icon.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default link behavior
    this.style.color = this.dataset.color; // Apply the color from the `data-color` attribute
    this.classList.toggle('active'); // Optional: toggle a class if needed
  });
});