function runQuiz() {
  const quiz = window.QUIZ_DATA || [];
  const questionImages = window.QUIZ_IMAGES || [];

  let idx = 0;
  let score = 0;
  let locked = false;
  let autoAdvanceTimer = null;

  function $(id) {
    return document.getElementById(id);
  }

  function render() {
    const q = quiz[idx];
    const total = quiz.length;

    $("quiz-q-text").textContent = q.q;
    const progressText = $("quiz-progress");
    if (progressText) progressText.textContent = `${idx + 1}/${total}`;

    const img = document.querySelector(".quiz-game__image");
    if (img && questionImages.length) {
      const src = questionImages[idx % questionImages.length];
      img.style.backgroundImage = `url("${src}")`;
    }

    const answers = $("quiz-answers");
    answers.innerHTML = "";

    q.a.forEach((text, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "quiz-game__answer";
      btn.textContent = text;
      btn.addEventListener("click", () => choose(i, btn));
      answers.appendChild(btn);
    });

    $("quiz-feedback").textContent = "";
    locked = false;
  }

  function choose(i, btnEl) {
    if (locked) return;
    locked = true;

    const q = quiz[idx];
    const isCorrect = i === q.correct;
    if (isCorrect) score += 1;

    const answerButtons = Array.from(document.querySelectorAll(".quiz-game__answer"));
    answerButtons.forEach((b) => {
      b.setAttribute("aria-disabled", "true");
    });

    if (btnEl) btnEl.classList.add("quiz-game__answer--selected");

    if (autoAdvanceTimer) clearTimeout(autoAdvanceTimer);
    autoAdvanceTimer = setTimeout(() => {
      autoAdvanceTimer = null;
      next();
    }, 550);
  }

  function next() {
    if (autoAdvanceTimer) {
      clearTimeout(autoAdvanceTimer);
      autoAdvanceTimer = null;
    }

    if (idx + 1 < quiz.length) {
      idx += 1;
      render();
      return;
    }

    const game = document.getElementById("quiz-game");
    const finish = document.getElementById("quiz-finish");
    const result = document.getElementById("quiz-result");

    if (result) result.hidden = true;
    if (game) game.hidden = true;
    if (finish) finish.hidden = false;
    document.body.classList.remove("is-game");
    document.body.classList.add("is-finish");

    const scoreEl = document.getElementById("quiz-finish-score");
    if (scoreEl) scoreEl.textContent = `${score}/${quiz.length}`;

    const descEl = document.getElementById("quiz-finish-desc");
    if (descEl) {
      descEl.textContent =
        score === quiz.length
          ? "Ты истинный сеньор! Можешь устраиваться тимлидом."
          : "Неплохо! Попробуй сыграть ещё раз и улучшить результат.";
    }
  }

  function restart() {
    idx = 0;
    score = 0;
    locked = false;
    $("quiz-result").hidden = true;
    $("quiz-card").hidden = false;
    render();
  }

  const intro = $("quiz-intro");
  const game = $("quiz-game");
  const finish = $("quiz-finish");
  const startBtn = $("quiz-start");
  const setScreen = (screen) => {
    const isGame = screen === "game";
    if (intro) intro.hidden = isGame;
    if (game) game.hidden = !isGame;
    document.body.classList.toggle("is-game", isGame);
    if (finish) finish.hidden = true;
    document.body.classList.remove("is-finish");
  };

  if (startBtn && intro && game) {
    startBtn.addEventListener("click", () => {
      setScreen("game");
      render();
    });
  }

  setScreen("intro");

  const retryBtn = $("quiz-finish-retry");
  if (retryBtn) {
    retryBtn.addEventListener("click", () => {
      idx = 0;
      score = 0;
      locked = false;
      setScreen("game");
      render();
    });
  }

  const restartBtn = $("quiz-restart");
  if (restartBtn) restartBtn.addEventListener("click", restart);
}

document.addEventListener("DOMContentLoaded", runQuiz);
