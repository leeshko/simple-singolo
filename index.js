const elem = document.querySelector('.burger-icon');
const opacityBackground = document.querySelector('main');
const clickLink = document.querySelectorAll('.navigation-links');
const leftArrow = document.querySelector('.left-arrow');
const mainScreen = document.querySelector('.main-screen');



elem.addEventListener( "click" , () => elem.classList.toggle('open'));

elem.addEventListener( "click" , () => opacityBackground.classList.toggle('opacityBackground'));

//clickLink.addEventListener.forEach( "click" , () => elem.classList.remove('open'));

//clickLink.addEventListener( "click" , () => opacityBackground.classList.remove('opacityBackground'));

leftArrow.addEventListener( "click" , () => mainScreen.classList.toggle('slide2'));




