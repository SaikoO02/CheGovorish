(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var THEME_KEY = "articleTheme";
    var body = document.body;
    var backLink = document.querySelector(".article-page__nav-back");
    var topLink = document.querySelector(".article-page__nav-top");
    var themeBtn = document.querySelector(".article-header__sun");
    var themeBtnImg = themeBtn ? themeBtn.querySelector("img") : null;

    function applyTheme(mode) {
      var isLight = mode === "light";
      body.classList.toggle("theme-light", isLight);
      if (themeBtnImg) {
        themeBtnImg.src = isLight
          ? "/image/moonstarssvgrepocom1.svg"
          : "/image/sun2svgrepocom1.svg";
      }
    }

    try {
      applyTheme(localStorage.getItem(THEME_KEY) || "dark");
    } catch (e) {
      applyTheme("dark");
    }

    if (backLink) {
      backLink.addEventListener("click", function (e) {
        if (window.history.length > 1) {
          e.preventDefault();
          window.history.back();
        }
      });
    }

    if (topLink) {
      topLink.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    if (themeBtn) {
      themeBtn.addEventListener("click", function () {
        var next = body.classList.contains("theme-light") ? "dark" : "light";
        applyTheme(next);
        try {
          localStorage.setItem(THEME_KEY, next);
        } catch (e) {}
      });
    }
  });
})();

