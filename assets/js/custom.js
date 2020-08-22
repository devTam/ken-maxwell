// Implementing loader
const loader = document.getElementById('loader');

window.addEventListener('load', () => loader.classList.add('hide'));

const burger = document.querySelector('.hamburger');

const toggleNav = () => {
    const nav = document.querySelector('.nav-links')
    const navLinks = document.querySelectorAll('.nav-links li');

    nav.classList.toggle('nav-active');
        
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            }else {
                link.style.animation = `fade 0.5s ease forwards ${index / 7 + .5}s`;
            }
        });
        // Burger animation
        burger.classList.toggle('toggle');

}

// Navigation
const navSlide = () => {

    burger.addEventListener('click', () => {
        toggleNav();
    });
}

navSlide();

// close navlinks on click of navlink
const navClose = () => {
    const navLink = document.querySelectorAll('.nav-links a');
    
    navLink.forEach(link => {
        
        link.addEventListener('click', () => {
            const nav = document.querySelector('.nav-links')
            const navLinks = document.querySelectorAll('.nav-links li');

            nav.classList.toggle('nav-active');
        
            navLinks.forEach((link, index) => {
             link.style.opacity = 1;
            });
        // Burger animation
        burger.classList.toggle('toggle');
        });
           
    })

}

navClose();

// Implementing scrollspy
document.addEventListener('DOMContentLoaded', function(){ 
  
    // grab the sections (targets) and menu_links (triggers)
    // for menu items to apply active link styles to
    const sections = document.querySelectorAll(".section");
    const menu_links = document.querySelectorAll(".nav-links a");
    
    // functions to add and remove the active class from links as appropriate
    const makeActive = (link) => menu_links[link].classList.add("active");
    const removeActive = (link) => menu_links[link].classList.remove("active");
    const removeAllActive = () => [...Array(sections.length).keys()].forEach((link) => removeActive(link));
    
    // change the active link a bit above the actual section
    // this way it will change as you're approaching the section rather
    // than waiting until the section has passed the top of the screen
    const sectionMargin = 200;
    
    // keep track of the currently active link
    // use this so as not to change the active link over and over
    // as the user scrolls but rather only change when it becomes
    // necessary because the user is in a new section of the page
    let currentActive = 0;
  
    // listen for scroll events
    window.addEventListener("scroll", () => {
      
      // check in reverse order so we find the last section
      // that's present - checking in non-reverse order would
      // report true for all sections up to and including
      // the section currently in view
      //
      // Data in play:
      // window.scrollY    - is the current vertical position of the window
      // sections          - is a list of the dom nodes of the sections of the page
      //                     [...sections] turns this into an array so we can
      //                     use array options like reverse() and findIndex()
      // section.offsetTop - is the vertical offset of the section from the top of the page
      // 
      // basically this lets us compare each section (by offsetTop) against the
      // viewport's current position (by window.scrollY) to figure out what section
      // the user is currently viewing
      const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin ) - 1
  
      // only if the section has changed
      // remove active class from all menu links
      // and then apply it to the link for the current section
      if (current !== currentActive) {
        removeAllActive();
        currentActive = current;
        makeActive(current);
      }
    });
  }, false);


// Swiper
var swiper = new Swiper('.swiper-container', {
    effect: 'flip',
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });