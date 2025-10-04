console.log('Hello World!');

// Nav bar toggle

let navBtn = document.getElementById('menu-btn');

navBtn.addEventListener('click', () => {
    let menu = document.getElementById('menu-bar-links').querySelector('ul');
    menu.classList.toggle('navOpen');
});




// Nav button scroll 

// Selecting Nav links, nav aside links and sections
let links = document.getElementsByClassName('nav-links');
let sections = document.getElementsByClassName('sections');
let aside_links = document.getElementsByClassName('aside-links');

// Scroll effect for nav bar
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', () => {
    sections[i].scrollIntoView({ behavior: "smooth" });
  });
};


// Scroll effect for nav side bar
for (let i = 0; i < aside_links.length; i++) {
 aside_links[i].addEventListener('click', () => {
    sections[i].scrollIntoView({ behavior: "smooth" });
  });
};




// Animation
let aniLefts = document.querySelectorAll('.aniLeft');
let aniRights = document.querySelectorAll('.aniRight');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains("aniLeft")) {
        entry.target.classList.add("animation-from-left");
      }
      if (entry.target.classList.contains("aniRight")) {
        entry.target.classList.add("animation-from-right");
      }
    }
  });
});


aniLefts.forEach(el => observer.observe(el));
aniRights.forEach(el => observer.observe(el));