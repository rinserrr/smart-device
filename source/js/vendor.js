// Swiper 7.4.1
import './vendor/swiper';

import './vendor/focus-visible-polyfill';


const firstSwiper = document.querySelector('.swiper1');
const secondSwiper = document.querySelector('.swiper2');
const thirdSwiper = document.querySelector('.swiper3');

/* eslint-disable */

const checkFirstSwiper = () => {
  if (firstSwiper) {

    const swiper = new Swiper(firstSwiper, {
      // Включение/Отключение перетаскивания на ПК
      simulateTouch: false,
      // Курсор перетаскивания
      grabCursor: false,
      // Количество слайдов для показа
      // slidesPerView: 4,
      // Отключение функционала, если слайдов меньше чем нужно
      watchOverflow: true,
      // Отступ между слайдами
      // spaceBetween: 39,
      // Количество пролистываемых слайдов
      // slidesPerGroup: 1,
      // Бесконечный слайдер
      loop: false,

      // // Автопрокрутка
      // autoplay: {
      //   // Пауза между прокруткой в мс
      //   delay: 1000,
      //   // Закончить на последнем слайде
      //   stopOnLastSlide: true,
      //   // Отключить после ручного переключения
      //   disableOnInteraction: false,
      // },

      // Скорость прокрутки - по умолчанию 300мс
      speed: 600,

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next1',
        clickable: true,
      },
    });
  }
};


const checkSecondSwiper = () => {
  if (secondSwiper) {

    const swiper = new Swiper(secondSwiper, {
      simulateTouch: false,
      grabCursor: false,
      watchOverflow: true,
      loop: true,
      speed: 600,

      navigation: {
        nextEl: '.swiper-button-next2',
        clickable: true,
      },
    });
  }
};


const thirdSecondSwiper = () => {
  if (thirdSwiper) {

    const swiper = new Swiper(thirdSwiper, {
      simulateTouch: false,
      grabCursor: false,
      watchOverflow: false,
      loop: true,
      speed: 600,

      navigation: {
        nextEl: '.swiper-button-next3',
        clickable: true,
      },
    });
  }
};


// const swiper2 = new Swiper('.swiper2', {
//   simulateTouch: false,
//   grabCursor: false,
//   // watchOverflow: true,
//   loop: true,

//   navigation: {
//     nextEl: '.swiper-button-next2',
//     clickable: true,
//   },
// });


// const swiper3 = new Swiper('.swiper3', {
//   simulateTouch: false,
//   grabCursor: false,
//   // watchOverflow: true,
//   loop: true,

//   navigation: {
//     nextEl: '.swiper-button-next3',
//     clickable: true,
//   },
// });


export {checkFirstSwiper, checkSecondSwiper, thirdSecondSwiper};
