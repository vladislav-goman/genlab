const header = document.querySelector('#js-page-header');

document.addEventListener('scroll', () => {
  if (window.scrollY > 0 && !header.classList.contains('active')) {
    header.classList.add('active');
  } else if (window.scrollY === 0 && header.classList.contains('active')) {
    header.classList.remove('active');
  }
});
