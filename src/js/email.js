import emailjs, { init } from 'emailjs-com';
import { modalSwiper } from './modal-swiper';

const apiKeys = {
  USER_ID: 'user_XAvZzPDfL9UiqfQtZabG2',
  TEMPLATE_ID: 'template_vyr0j4j',
  SERVICE_ID: 'service_31d7zqa',
};

init(apiKeys.USER_ID);

const modalForm = document.querySelector('#js-modal-form');

modalForm.addEventListener('submit', (e) => {
  e.preventDefault();

  emailjs.sendForm(apiKeys.SERVICE_ID, apiKeys.TEMPLATE_ID, '#js-modal-form', apiKeys.USER_ID).then(
    (result) => {
      console.log(result);
      modalSwiper.slideNext();
    },
    (error) => {
      console.log(error);
      modalSwiper.slideNext();
    }
  );
});
