// links navigation

const clickLinks = document.querySelectorAll('.link');

// behavior of burger menu in mobile mode
const burger = document.querySelector('.burger-icon');
const opacityBackground = document.querySelector('main');
const leftArrow = document.querySelector('.left-arrow');

burger.addEventListener("click", () => {
    burger.classList.toggle('open');
    opacityBackground.classList.toggle('opacityBackground');
});

clickLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        burger.classList.remove('open');
        opacityBackground.classList.remove('opacityBackground');
    });
});

opacityBackground.addEventListener('click', () => {
    burger.classList.remove('open');
    opacityBackground.classList.remove('opacityBackground');
});

// active link on scroll
window.addEventListener('scroll', function () {
    const servicesTillTop = document.getElementById('services').getBoundingClientRect().top;
    const portfolioTillTop = document.getElementById('portfolio').getBoundingClientRect().top;

    if (servicesTillTop > 90) {
        changeMenuLinkClassOnPosition(document.getElementById('home-link'));
    } else if (portfolioTillTop > 90) {
        changeMenuLinkClassOnPosition(document.getElementById('services-link'));
    } else {
        changeMenuLinkClassOnPosition(document.getElementById('portfolio-link'));
    }
});

function changeMenuLinkClassOnPosition(element) {
    clickLinks.forEach(el => {
        el.classList.remove('selected');
    });
    element.classList.add('selected');
}

// switch tags

const portfolioPictures = [...document.querySelectorAll('.portfolio-photo')];


const tags = document.querySelectorAll('.tag-links');
const portfolioContainer = document.querySelector('.portfolio-boxes');
tags.forEach(tag => {
    tag.addEventListener("click", function (event) {
        tags.forEach(tag => {
            tag.classList.remove('tag-active');
        });
        tag.classList.add('tag-active');
        event.preventDefault();

        // ** another way ** 
        // let picture = portfolioPictures.pop();
        // portfolioPictures.unshift(picture);
        // portfolioContainer.innerHTML = portfolioPictures.map(picture => {
        //     return picture.outerHTML;
        // }).join('');

        const pictureElement = portfolioContainer.removeChild(document.querySelector('.portfolio-photo'));
        portfolioContainer.appendChild(pictureElement);
    });
});


// slider 

const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slide1 = document.querySelector('.slide1');
const slide2 = document.querySelector('.slide2');
const arrow = document.querySelectorAll('.arrow');


arrow.forEach(move => {
    move.addEventListener("click", function () {
        if (slide2.classList.length === 3) {
            slide2.classList.remove('off');
            slide1.classList.add('off');
        } else {
            slide2.classList.add('off');
            slide1.classList.remove('off');
        }
    });
});
