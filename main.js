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

    const menuBurger = document.querySelector(".menu-burger");
    const menu = document.querySelector(".menu");
    if (menuBurger && menu) {
      const closeMenu = () => {
        menu.classList.remove("is-open");
        menuBurger.setAttribute("aria-expanded", "false");
      };
      const toggleMenu = () => {
        const isOpen = menu.classList.toggle("is-open");
        menuBurger.setAttribute("aria-expanded", String(isOpen));
      };

      menuBurger.setAttribute("aria-expanded", "false");
      menuBurger.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleMenu();
      });

      menu.addEventListener("click", (e) => {
        if (e.target.closest(".menu__item")) closeMenu();
      });

      document.addEventListener("click", (e) => {
        if (!menu.classList.contains("is-open")) return;
        if (e.target.closest(".menu") || e.target.closest(".menu-burger")) return;
        closeMenu();
      });
    }

    const map = document.querySelector(".map");
    if (map) {
      map.addEventListener("click", (e) => {
        const target = e.target.closest("[data-panel]");
        if (!target) return;
        window.location.href = "/pages/themes/?panel=" + target.dataset.panel;
      });
    }

    document.querySelectorAll("[data-href]").forEach((card) => {
      card.addEventListener("click", () => {
        window.location.href = card.dataset.href;
      });
    });

    document
      .querySelectorAll("button.Project_management_description_button")
      .forEach((btn) => {
        const text = btn.textContent.trim();
        let href = null;
        if (text.startsWith("Все статьи")) href = "/pages/articles/";
        else if (text.startsWith("Все квизы")) href = "/pages/quiz/";
        else if (text.startsWith("Глоссарий")) href = "/pages/glossary/";
        if (!href) return;
        btn.addEventListener("click", () => {
          window.location.href = href;
        });
      });

    const isThemesPage =
      window.location.href.includes("themes.html") ||
      window.location.href.includes("/pages/themes/");

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

    if (isThemesPage) {
      const requestedPanel = new URLSearchParams(window.location.search).get(
        "panel"
      );
      if (requestedPanel) {
        const themeMatch = requestedPanel.match(/^theme\d/);
        const targetItem = themeMatch
          ? container.querySelector(".accordion-item." + themeMatch[0])
          : null;
        if (targetItem) {
          items.forEach((item) =>
            item.classList.toggle("open", item === targetItem)
          );
          const targetBtn = targetItem.querySelector(
            '.tab-btn[data-panel="' + requestedPanel + '"]'
          );
          if (targetBtn) {
            const buttons = targetItem.querySelectorAll(".tab-btn");
            const panels = targetItem.querySelectorAll(".tab-panel");
            buttons.forEach((b) => b.classList.toggle("active", b === targetBtn));
            panels.forEach((p) =>
              p.classList.toggle("active", p.dataset.panel === requestedPanel)
            );
          }
          targetItem.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }

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

      items.forEach((item) => {
        if (item !== currentItem) {
          item.classList.remove("open");
        }
      });
      currentItem.classList.add("open");
      console.log("Открыт блок:", currentItem);
    });

    document
      .querySelectorAll(".Project_or_Product, .Project_management_two_columns_item")
      .forEach((card) => {
        if (card.tagName === "A") return;
        const link = card.querySelector("a[href]");
        if (!link) return;
        card.addEventListener("click", (e) => {
          if (e.target.closest("a")) return;
          window.location.href = link.href;
        });
      });

    document
      .querySelectorAll(
        '[class*="Project_management_two_columns_item--"], [class*="article-first--"], [class*="article-second--"], [class*="Project_or_Product--"]'
      )
      .forEach((card) => {
        const bg = getComputedStyle(card, "::before").backgroundImage;
        if (!bg || bg === "none") return;
        card.style.setProperty("--frozen-before-bg", bg);
        card.setAttribute("data-frozen-bg", "");
      });
  });
})();
