// === MENU === //

const menu = document.querySelector('.menu');
const topNavList = document.querySelector('.top-nav__list');
const sliderInfo = document.querySelector('.slider__info');


menu.addEventListener('click', () => {
     topNavList.classList.toggle('top-nav__list--active');
     menu.classList.toggle('menu--active');
     sliderInfo.classList.toggle('slider__info--none');

})

// === SLIDER === //
let countPagination = 1;
const sliderTrack = document.querySelector('.slider__track');
const sliderItem = document.querySelectorAll('.slider__item');
const sliderImg = document.querySelectorAll('.slider__img');
const btnPrev = document.querySelector('.slider__btn--prev');
const btnNext = document.querySelector('.slider__btn--next');
const pagination = document.querySelector('.slider__pagination');
let itemCount = sliderItem.length;
const itemWidth = sliderImg[0].clientWidth;
let position = -(itemCount * itemWidth); // начальноя позиции


visualPog();
setPosition();

btnPrev.addEventListener('click', () => {
     position += itemWidth;
     countPagination -= 1;

     setPosition();
})
btnNext.addEventListener('click', () => {
     position -= itemWidth;
     countPagination += 1;

     setPosition();
})
function setPosition() {
     check();
     visualPog();
     sliderTrack.style.transform = `translateX(${position}px)`;
}
function check() {
     if (position < -((itemCount - 1) * itemWidth)) {
          position = 0;
     } else if (position > 0) {
          position = -((itemCount - 1) * itemWidth);
     }
     if (countPagination === itemCount + 1) {
          countPagination = 1
     } else if (countPagination === 0) {
          countPagination = itemCount;
     }
}
function visualPog() {
     pagination.innerHTML = `${countPagination} / ${itemCount}`;
}