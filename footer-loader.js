function loadFooterHtml() {
  const candidates = ['footer.html', '../footer.html', '/footer.html'];

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

window.footerLoaded = loadFooterHtml()
  .then(({ html, loadedFrom }) => {
    const container = document.getElementById('footer-container');
    if (!container) return;

    container.innerHTML = html;

    // Fix relative asset paths inside the injected footer (e.g. "image/LogoHSE.svg"),
    // so it works from pages in subfolders like /articles/.
    let prefix = '';
    if (loadedFrom.startsWith('../')) prefix = '../';
    if (loadedFrom.startsWith('/')) prefix = '/';

    container.querySelectorAll('[src]').forEach((el) => {
      const src = el.getAttribute('src');
      if (!src) return;
      if (src.startsWith('image/')) el.setAttribute('src', prefix + src);
    });
  })
  .catch((err) => {
    console.error('Ошибка загрузки футера:', err);
  });

