import SwiperCore, { Navigation, EffectFade } from 'swiper/core';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, EffectFade]);

new SwiperCore('.tech-swiper', {
  slidesPerView: 1,
  spaceBetween: 40,
  breakpoints: {
    1000: {
      slidesPerView: 5,
    },
    600: {
      slidesPerView: 3,
    },
    400: {
      slidesPerView: 2,
    }
  }
});

new SwiperCore('.modal-swiper', {
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  autoHeight: true,
  simulateTouch: false,
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
});

new SwiperCore('.portfolio-swiper', {
  slidesPerView: 'auto',
  spaceBetween: 40,
  freeMode: true,
  grabCursor: true,
});

const modal = document.getElementById('modal--container');

const btnArr = document.querySelectorAll('.main-scene__button');

const closeArray = document.querySelectorAll('.close');

btnArr.forEach(
  (btn) =>
    (btn.onclick = function () {
      modal.classList.add('visible');
    })
);

closeArray.forEach((closeItem) => {
  closeItem.addEventListener('click', () => {
    modal.classList.remove('visible');
  });
});

// span.onclick = function() {
//   modal.style.display = "none";
// }

modal.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.classList.remove('visible');
  }
});
