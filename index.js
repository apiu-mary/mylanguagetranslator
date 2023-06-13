const hamburgerMenu = document.querySelector('.hamburger-menu');
const navbarLinks = document.querySelector('.navbar-links');

hamburgerMenu.addEventListener('click', function() {
  navbarLinks.classList.toggle('active');
});

// Close the navbar when a link is clicked
const navLinks = document.querySelectorAll('.navbar-links li a');
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navbarLinks.classList.remove('active');
  });
});
