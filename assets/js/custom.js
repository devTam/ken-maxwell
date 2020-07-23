// Implementing loader
const loader = document.getElementById('loader');

window.addEventListener('load', () => loader.classList.add('hide'));

// Animated hamburger Menu
const menuContainer = document.querySelector('.nav-toggle');
const menuSpan1 = document.querySelector('.nav-toggle-icon:nth-child(1)');
const menuSpan2 = document.querySelector('.nav-toggle-icon:nth-child(2)');
const menuSpan3 = document.querySelector('.nav-toggle-icon:nth-child(3)');

menuContainer.addEventListener('click', () => {
    !menuSpan1.classList.contains('nav-toggle-icon-1') ? menuSpan1.classList.add('nav-toggle-icon-1') : menuSpan1.classList.remove('nav-toggle-icon-1');
    !menuSpan2.classList.contains('nav-toggle-icon-2') ? menuSpan2.classList.add('nav-toggle-icon-2') : menuSpan2.classList.remove('nav-toggle-icon-2');
    !menuSpan3.classList.contains('nav-toggle-icon-3') ? menuSpan3.classList.add('nav-toggle-icon-3') : menuSpan3.classList.remove('nav-toggle-icon-3');
    
})
