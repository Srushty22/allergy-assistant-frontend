// main.js

// Responsive mobile menu toggle (if you add a hamburger icon later)
const nav = document.querySelector('nav');
const header = document.querySelector('header');

// Example: toggle nav on small screens (you'll need a hamburger button in HTML)
const hamburgerBtn = document.createElement('button');
hamburgerBtn.textContent = '☰';
hamburgerBtn.classList.add('hamburger-btn');
hamburgerBtn.style.fontSize = '1.5rem';
hamburgerBtn.style.background = 'none';
hamburgerBtn.style.border = 'none';
hamburgerBtn.style.color = 'white';
hamburgerBtn.style.cursor = 'pointer';
hamburgerBtn.style.display = 'none'; // hidden by default

header.insertBefore(hamburgerBtn, nav);

function toggleNav() {
  if (nav.style.display === 'flex') {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
    nav.style.alignItems = 'center';
  }
}

hamburgerBtn.addEventListener('click', toggleNav);

// Show hamburger on small screens
function checkScreenSize() {
  if (window.innerWidth <= 768) {
    hamburgerBtn.style.display = 'block';
    nav.style.display = 'none';
  } else {
    hamburgerBtn.style.display = 'none';
    nav.style.display = 'flex';
    nav.style.flexDirection = 'row';
  }
}

window.addEventListener('resize', checkScreenSize);
window.addEventListener('load', checkScreenSize);


// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');

    // For anchor links within page, smooth scroll
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});
