function initFooterAnimation() {
  const radius = 50;

  if (!window.footerLoaded) {
    return;
  }

  window.footerLoaded
    .then(() => {
      const paths = document.querySelectorAll('.footer path');

      if (!paths.length) {
        return;
      }

      document.addEventListener('mousemove', (e) => {
        paths.forEach((path) => {
          const box = path.getBBox();
          const svg = path.ownerSVGElement;
          if (!svg) return;

          const pt = svg.createSVGPoint();
          pt.x = box.x + box.width / 2;
          pt.y = box.y + box.height / 2;

          const screen = pt.matrixTransform(svg.getScreenCTM());
          const dx = e.clientX - screen.x;
          const dy = e.clientY - screen.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < radius) {
            const scale = 2 - distance / radius;
            path.style.transform = `scale(${scale})`;
          } else {
            path.style.transform = 'scale(1)';
          }
        });
      });
    })
    .catch((err) => {
      console.error('Ошибка инициализации анимации футера:', err);
    });
}

initFooterAnimation();

