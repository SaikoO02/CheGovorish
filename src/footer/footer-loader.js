function loadFooterHtml() {
  const candidates = [
    'footer/footer.html',
    '../footer/footer.html',
    '../../footer/footer.html',
    '../../../footer/footer.html',
  ];

  const tryNext = (i) =>
    fetch(candidates[i])
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP ${response.status} for ${candidates[i]}`);
        }
        return response.text().then((html) => ({ html, loadedFrom: candidates[i] }));
      })
      .catch((err) => {
        if (i + 1 < candidates.length) return tryNext(i + 1);
        throw err;
      });

  return tryNext(0);
}

document.addEventListener('DOMContentLoaded', () => {
  const menuBurger = document.querySelector('.menu-burger');
  const menu = document.querySelector('.menu');
  if (!menuBurger || !menu) return;

  const closeMenu = () => {
    menu.classList.remove('is-open');
    menuBurger.setAttribute('aria-expanded', 'false');
  };

  menuBurger.setAttribute('aria-expanded', 'false');
  menuBurger.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = menu.classList.toggle('is-open');
    menuBurger.setAttribute('aria-expanded', String(isOpen));
  });

  menu.addEventListener('click', (e) => {
    if (e.target.closest('.menu__item')) closeMenu();
  });

  document.addEventListener('click', (e) => {
    if (!menu.classList.contains('is-open')) return;
    if (e.target.closest('.menu') || e.target.closest('.menu-burger')) return;
    closeMenu();
  });
});

window.footerLoaded = loadFooterHtml()
  .then(({ html, loadedFrom }) => {
    const container = document.getElementById('footer-container');
    if (!container) return;

    container.innerHTML = html;

    const prefix = loadedFrom.slice(0, loadedFrom.length - 'footer/footer.html'.length);

    container.querySelectorAll('[src]').forEach((el) => {
      const src = el.getAttribute('src');
      if (!src) return;
      if (src.startsWith('image/')) el.setAttribute('src', prefix + src);
    });

    const vectorImg = container.querySelector('.footer__vector img');
    if (!vectorImg) return;

    const svgSrc = vectorImg.getAttribute('src');
    return fetch(svgSrc)
      .then((r) => r.text())
      .then((svgText) => {
        vectorImg.parentElement.innerHTML = svgText;
      });
  })
  .catch((err) => {
    console.error('Ошибка загрузки футера:', err);
  });
