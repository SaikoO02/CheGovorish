(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var root = document.querySelector("[data-articles-tabs]");
    if (!root) return;

    var buttons = root.querySelectorAll(".articles-tabs__btn");
    var panels = root.querySelectorAll(".articles-tabs__panel");

    function activate(tabId) {
      buttons.forEach(function (btn) {
        var isOn = btn.getAttribute("data-tab") === tabId;
        btn.classList.toggle("articles-tabs__btn--active", isOn);
        btn.setAttribute("aria-selected", isOn ? "true" : "false");
      });
      panels.forEach(function (panel) {
        var isOn = panel.getAttribute("data-panel") === tabId;
        panel.classList.toggle("articles-tabs__panel--active", isOn);
        panel.hidden = !isOn;
      });
    }

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        activate(btn.getAttribute("data-tab"));
      });
    });
  });
})();
