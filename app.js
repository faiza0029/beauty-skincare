const search = document.getElementById('search');
const searchBtn = document.getElementById('search-btn');
const searchClose = document.getElementById('search-close');

searchBtn.addEventListener('click', () => {
    search.classList.add('show-search');
});

searchClose.addEventListener('click', () => {
    search.classList.remove('show-search');
});
// login

const login = document.getElementById('login');
const loginBtn = document.getElementById('login-btn');
const loginClose = document.getElementById('login-close');

loginBtn.addEventListener('click', () => {
    login.classList.add('show-login');
});

loginClose.addEventListener('click', () => {
    login.classList.remove('show-login');
});

// sidebar 
let menuOpenBtn = document.querySelector('.navbar .fa-bars');
let closeOpenBtn = document.querySelector('.nav-links .fa-solid');
let navLinks = document.querySelector('.nav-links');

menuOpenBtn.addEventListener('click', ()=>{
    navLinks .style.left="0";
});

closeOpenBtn.addEventListener('click', ()=>{
    navLinks .style.left="-100%";
});

let htmlcssArrow = document.querySelector('.htmlcss-arrow');
htmlcssArrow.addEventListener('click',()=>{
    navLinks.classList.toggle('show1');
});
let moreArrow = document.querySelector('.more-arrow');
moreArrow.addEventListener('click',()=>{
    navLinks.classList.toggle('show2');
});
let jsArrow = document.querySelector('.js-arrow');
jsArrow.addEventListener('click',()=>{
    navLinks.classList.toggle('show3');
});

// slide 
const prevButton = document.getElementById('prev-slide');
const nextButton = document.getElementById('next-slide');
const imageList = document.querySelector('.image-list');
const sliderWrapper = document.querySelector('.slider-wrapper');

const checkButtonsVisibility = () => {
    if (imageList.scrollLeft === 0) {
        sliderWrapper.classList.add('hide-prev');
    } else {
        sliderWrapper.classList.remove('hide-prev');
    }

    if (imageList.scrollLeft + imageList.clientWidth >= imageList.scrollWidth) {
        sliderWrapper.classList.add('hide-next');
    } else {
        sliderWrapper.classList.remove('hide-next');
    }
};

prevButton.addEventListener('click', () => {
    imageList.scrollBy({
        left: -imageList.clientWidth,
        behavior: 'smooth'
    });
});

nextButton.addEventListener('click', () => {
    imageList.scrollBy({
        left: imageList.clientWidth,
        behavior: 'smooth'
    });
});

imageList.addEventListener('scroll', checkButtonsVisibility);

// Initial check on page load
checkButtonsVisibility();


// nnnnn


