 // Mobile Menu Toggle
 const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
 const navMenu = document.querySelector('nav ul');
 const overlay = document.querySelector('.overlay');
 
 mobileMenuBtn.addEventListener('click', () => {
     navMenu.classList.toggle('active');
     overlay.classList.toggle('active');
 });
 
 overlay.addEventListener('click', () => {
     navMenu.classList.remove('active');
     overlay.classList.remove('active');
 });
 
 // Close mobile menu when clicking navigation items
 const navItems = document.querySelectorAll('nav ul li a');
 navItems.forEach(item => {
     item.addEventListener('click', () => {
         navMenu.classList.remove('active');
         overlay.classList.remove('active');
     });
 });