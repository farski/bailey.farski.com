(function() {
  const multimedia = document.querySelectorAll('picture,video');

  function findFocus() {
    let midline = document.documentElement.clientHeight / 2;

    for (let i = 0; i < multimedia.length; i++) {
      let el = multimedia[i];
      let rect = el.getBoundingClientRect();

      let focus = rect.top < midline && rect.bottom > midline;

      if (focus && !el.classList.contains('spotlight')) {
        document.querySelector('.spotlight').classList.remove('spotlight');
        el.classList.add('spotlight');
      }
    }

    if (document.body.scrollTop <= 0) {
      document.querySelector('.spotlight').classList.remove('spotlight');
      multimedia[0].classList.add('spotlight');
    }

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      document.querySelector('.spotlight').classList.remove('spotlight');
      multimedia[multimedia.length - 1].classList.add('spotlight');
    }
  }

  findFocus();

  window.addEventListener('scroll', () => findFocus());
})();
