import SwiperCore, { Navigation, EffectFade, Pagination, Autoplay } from 'swiper/core';
import 'swiper/swiper-bundle.css';
SwiperCore.use([Navigation, EffectFade, Pagination, Autoplay]);

new SwiperCore('.tech-swiper', {
  slidesPerView: 1,
  spaceBetween: 40,
  pagination: {
    el: '#tech-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },
  breakpoints: {
    1000: {
      slidesPerView: 5,
    },
    600: {
      slidesPerView: 3,
    },
    460: {
      slidesPerView: 2,
    },
  },
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
  slidesPerView: '1',
  spaceBetween: 40,
  pagination: {
    el: '#portfolio-pagination',
    clickable: true,
    bulletClass: 'swiper-pagination-bullet portfolio-pagination-bullet',
  },
  autoplay: {
    delay: 2500,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },
  breakpoints: {
    460: {
      slidesPerView: 2,
    },
  },
});

const modal = document.getElementById('modal--container');

const btnArr = document.querySelectorAll('.main-scene__button');

const closeArray = document.querySelectorAll('.close');

const main = document.querySelector('body');

btnArr.forEach(
  (btn) =>
    (btn.onclick = function () {
      modal.classList.add('visible');
      main.classList.add('freeze');
    })
);

closeArray.forEach((closeItem) => {
  closeItem.addEventListener('click', () => {
    modal.classList.remove('visible');
    main.classList.remove('freeze');
  });
});

// span.onclick = function() {
//   modal.style.display = "none";
// }

modal.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.classList.remove('visible');
    main.classList.remove('freeze');
  }
});
