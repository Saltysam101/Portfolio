const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const body = document.querySelector(".body");
const btnOne = document.getElementById('btnOne');
const btnTwo = document.getElementById('btnTwo');
const btnThree = document.getElementById('btnThree');
const btnFour = document.getElementById('btnFour');
const btnFive = document.getElementById('btnFive');
const btnSix = document.getElementById('btnSix');
const cta = document.getElementById('cta');


hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    body.classList.toggle('open');
})

cta.addEventListener('click', () => {
    window.location.href = 'contact.html';
})

btnOne.addEventListener('click', () => {
    window.open('', '_blank')
})
btnTwo.addEventListener('click', () => {
    window.open('', '_blank')
})
btnThree.addEventListener('click', () => {
    window.open('', '_blank')
})
btnFour.addEventListener('click', () => {
    window.open('', '_blank')
})
btnFive.addEventListener('click', () => {
    window.open('', '_blank')
})
btnSix.addEventListener('click', () => {
    window.open('', '_blank')
})