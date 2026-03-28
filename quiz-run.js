const quiz = [
  {
    q: "Как называется процесс поиска и исправления ошибок в коде?",
    a: ["Дебаггинг", "Тестинг", "Кодинг", "Проверка Рефакторинг"],
    correct: 0,
  },
  {
    q: "Как называется технология, которая позволяет преобразовывать локальные (частные) IP-адреса в публичные для выхода в интернет?",
    a: ["DNS", "VPN", "NAT", "DHCP"],
    correct: 2,
  },
  {
    q: "Как на сленге называют разработчика, который поверхностно разбирается в технологиях, но активно спорит и считает себя экспертом?",
    a: ["Сеньор", "Джуниор", "Хакер", "Джаваголик"],
    correct: 1,
  },
  {
    q: "Как на сленге называют программиста, который пишет плохо работающий и запутанный код?",
    a: ["Гуру", "Говнокодер", "Джавист", "Фрилансер"],
    correct: 1,
  },
  {
    q: "Как называется устройство, которое является «мозгом» компьютера и выполняет машинные задачи?",
    a: ["GPU", "CPU", "RAM", "HDD"],
    correct: 1,
  },
  {
    q: "Как на сленге называют бессмысленную доводку кода до идеала, которая не влияет на результат, но отнимает время??",
    a: ["Дизайн-Хардкод", "Вылизывание", "Краш", "Пуллинг"],
    correct: 0,
  },
  {
    q: "Как в сфере кибербезопасности называют «приманку» — заманчивое письмо или ссылку, которая ведет на сайт злоумышленников?",
    a: ["Бэкдор", "Наживка", "Фишинг", "Фарминг"],
    correct: 1,
  },
  {
    q: "Что означает аббревиатура MVP в разработке продуктов?",
    a: ["Most Valuable Product", "Main Version Protocol", "Minimum Viable Product", "Massive Visual Project"],
    correct: 2,
  },
  {
    q: "Как называется синий экран с ошибкой в Windows, который сигнализирует о критическом сбое системы?",
    a: ["Blue Screen of Death", "Fatal Error Screen", "Kernel Panic", "System Crash Display"],
    correct: 0,
  },
  {
    q: "Как называют разработчика, который работает и с фронтендом (интерфейсом), и с бэкендом (серверной частью)?",
    a: ["Фулстек", "Системный администратор", "Девопс", "Кроссплатформенщик"],
    correct: 0,
  },
];

const questionImages = [
  "image/Image300.png",
  "image/Image301.png",
  "image/Image302.png",
  "image/Image303.png",
  "image/Image304.png",
  "image/Image305.png",
  "image/Image306.png",
  "image/Image307.png",
  "image/Image308.png",
  "image/Image309.png",
];

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
  if (img) {
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
  answerButtons.forEach((b, bi) => {
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

  // финальный слайд
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

document.addEventListener("DOMContentLoaded", () => {
  const intro = $("quiz-intro");
  const game = $("quiz-game");
  const finish = $("quiz-finish");
  const startBtn = $("quiz-start");
  const setScreen = (screen) => {
    // screen: "intro" | "game"
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

  $("quiz-restart").addEventListener("click", restart);
});

