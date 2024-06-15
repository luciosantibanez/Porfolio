document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const navbarLinks = document.querySelectorAll('.navbar a');
    const sections = document.querySelectorAll('section');
  
    const changeNavStyleOnScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
  
    const highlightCurrentSection = () => {
      let currentSection = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3 && window.scrollY < sectionTop + sectionHeight - sectionHeight / 3) {
          currentSection = section.getAttribute('id');
        }
      });
  
      navbarLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
          link.classList.add('active');
        }
      });
    };
  
    window.addEventListener('scroll', () => {
      changeNavStyleOnScroll();
      highlightCurrentSection();
    });
  
    changeNavStyleOnScroll();
    highlightCurrentSection();
  });
  

  // script.js

document.addEventListener('DOMContentLoaded', (event) => {
  const toggleButton = document.getElementById('mode-toggle');
  const body = document.body;

  toggleButton.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      body.classList.toggle('light-mode');

      if (body.classList.contains('dark-mode')) {
          toggleButton.textContent = 'Cambiar a Modo Claro';
      } else {
          toggleButton.textContent = 'Cambiar a Modo Oscuro';
      }
  });
});
