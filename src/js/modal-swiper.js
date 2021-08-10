import SwiperCore, { Navigation, EffectFade } from 'swiper/core';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, EffectFade]);

new SwiperCore('.tech-swiper', {
  slidesPerView: 5,
  spaceBetween: 40,
});

new SwiperCore('.modal-swiper', {
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  simulateTouch: false,
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
});

const modal = document.getElementById('modal--container');

const btn = document.getElementById('modal--button');

const closeArray = document.querySelectorAll('.close');

btn.onclick = function () {
  modal.classList.add('visible');
};

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
