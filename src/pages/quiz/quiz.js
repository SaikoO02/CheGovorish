const state = {
  topic: "tech",
};

function setTopic(topic) {
  state.topic = topic;
  document.querySelectorAll("[data-quiz-topic]").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.quizTopic === topic));
  });

  applyFilters();
}

function applyFilters() {
  const fixedMode = "short";
  document.querySelectorAll("[data-quiz-topic-card]").forEach((card) => {
    const okTopic = card.dataset.quizTopicCard === state.topic;
    const okMode = card.dataset.quizAnswerType === fixedMode;
    card.hidden = !(okTopic && okMode);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setTopic(state.topic);
  applyFilters();

  document.querySelectorAll("[data-quiz-topic]").forEach((btn) => {
    btn.addEventListener("click", () => setTopic(btn.dataset.quizTopic));
  });

  document.querySelectorAll("[data-quiz-href]").forEach((heroCard) => {
    const href = heroCard.getAttribute("data-quiz-href");
    if (!href) return;
    heroCard.addEventListener("click", (e) => {
      if (e.target && e.target.closest && e.target.closest("a")) return;
      window.location.href = href;
    });
    heroCard.addEventListener("keydown", (e) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      e.preventDefault();
      window.location.href = href;
    });
  });
});

