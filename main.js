console.log("JS подключен");

(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const titleBottom = document.querySelector(".title-bottom");
    const titleButtonsWrap = document.querySelector(".title-bottom-buttons");
    if (titleBottom && titleButtonsWrap) {
      const words = [
        "айтишники",
        "Моушн-дизайнеры",
        "IT-менеджеры",
        "Скрам-мастера",
        "Тимлиды",
        "айтишники", 
        "веб-дизайнеры", 
        "менеджеры", 
        "инженеры", 
        "UX/UI-дизайнеры",
      ];
      let current = words.findIndex(
        (w) => w.toLowerCase() === titleBottom.textContent.trim().toLowerCase()
      );
      if (current < 0) current = 0;

      const topBtn = titleButtonsWrap.querySelector(".icon-btn--top");
      const bottomBtn = titleButtonsWrap.querySelector(".icon-btn--bottom");

      const renderWord = () => {
        titleBottom.textContent = words[current];
      };

      if (topBtn) {
        topBtn.addEventListener("click", () => {
          current = (current - 1 + words.length) % words.length;
          renderWord();
        });
      }

      if (bottomBtn) {
        bottomBtn.addEventListener("click", () => {
          current = (current + 1) % words.length;
          renderWord();
        });
      }
    }

    const isThemesPage = window.location.href.includes("themes.html");

    const container = document.querySelector(".accordion");
    if (!container) {
      console.warn("Не найден контейнер .accordion");
      return;
    }

    const items = container.querySelectorAll(".accordion-item");
    if (items.length === 0) {
      console.warn("Нет элементов .accordion-item");
      return;
    }

    if (!isThemesPage) {
      items.forEach((item) => item.classList.remove("open"));
      items[items.length - 1].classList.add("open");
      console.log("Открыт последний блок:", items[items.length - 1]);
    }

    if (!container.querySelector(".accordion-item.open")) {
      items[0].classList.add("open");
    }

    /** Первая вкладка активна в каждом блоке (панели + класс .active) */
    items.forEach((item) => {
      const buttons = item.querySelectorAll(".tab-btn");
      const panels = item.querySelectorAll(".tab-panel");
      if (!buttons.length || !panels.length) return;

      const first = buttons[0];
      buttons.forEach((b) => b.classList.toggle("active", b === first));
      panels.forEach((p) =>
        p.classList.toggle("active", p.dataset.panel === first.dataset.panel)
      );
    });

    container.addEventListener("click", function (e) {
      const tabBtn = e.target.closest(".tab-btn");
      if (tabBtn) {
        const currentItem = tabBtn.closest(".accordion-item");
        if (currentItem) {
          const buttons = currentItem.querySelectorAll(".tab-btn");
          const panels = currentItem.querySelectorAll(".tab-panel");
          buttons.forEach((b) => b.classList.toggle("active", b === tabBtn));
          panels.forEach((p) =>
            p.classList.toggle("active", p.dataset.panel === tabBtn.dataset.panel)
          );
          items.forEach((item) =>
            item.classList.toggle("open", item === currentItem)
          );
        }
        return;
      }

      const header = e.target.closest(".accordion-header");
      if (!header) return;

      const currentItem = header.closest(".accordion-item");
      if (!currentItem) return;

      console.log("Клик по заголовку, текущий блок:", currentItem);

      // Всегда ровно одна открытая секция: клик по заголовку только переключает на неё,
      // нельзя «закрыть всё» повторным кликом по уже открытому блоку
      items.forEach((item) => {
        if (item !== currentItem) {
          item.classList.remove("open");
        }
      });
      currentItem.classList.add("open");
      console.log("Открыт блок:", currentItem);
    });
  });
})();
