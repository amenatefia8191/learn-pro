'use strict';

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('visible', window.scrollY > 80)
});

const navMenu = document.querySelector('#menu');
const navList = document.querySelector('.navList');

navMenu.onclick = () => {
    navMenu.classList.toggle('bx-x');
    navList.classList.toggle('Open');
}
window.onscroll = () => {
    navMenu.classList.remove('bx-x')
    navList.classList.remove('Open')
}


