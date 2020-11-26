const burger = document.querySelector('.burger-icon');
const opacityBackground = document.querySelector('main');
const clickLink = document.querySelectorAll('.link');
const leftArrow = document.querySelector('.left-arrow');


burger.addEventListener( "click" , () => {
    burger.classList.toggle('open');
    opacityBackground.classList.toggle('opacityBackground');
});

clickLink.forEach(link => { 
    link.addEventListener("click",function (e) {
        burger.classList.remove('open');
        opacityBackground.classList.remove('opacityBackground');
        activeLink(e.target.innerHTML); //difficulties
    });
});

opacityBackground.addEventListener('click' , () => {
    burger.classList.remove('open');
    opacityBackground.classList.remove('opacityBackground');
});


