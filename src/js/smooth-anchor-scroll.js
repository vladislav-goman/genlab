const anchorLinks = document.querySelectorAll('a[href^="#"]');
for (let item of anchorLinks) {
  item.addEventListener('click', (e) => {
    const hashValue = item.getAttribute('href');
    const target = document.querySelector(hashValue);
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    history.pushState(null, null, hashValue);
    e.preventDefault();
  });
}
