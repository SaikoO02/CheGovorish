const TERMS = [
  {
    word: "Аутсорс, аутсорсинг (OUTSOURCE)",
    tag: "",
    def: "Передача компанией выполнения определённой работы специалистам вне штата (фрилансерам или работникам других компаний).",
  },
  {
    word: "Аутстаффинг, аутстаф (OUTSTAFFING)",
    tag: "",
    def: "Аренда специалиста, работающего в компании‑подрядчике для работы на проекте в компании‑заказчике.",
  },
  {
    word: "Банщик",
    tag: "",
    def: "Человек-дизайнер, который занимается версткой баннеров.",
  },
  {
    word: "Бенефит (benefit)",
    tag: "",
    def: "Непрямое денежное или другое нематериальное вознаграждение, которое чаще всего используется для мотивации сотрудников.",
  },
  {
    word: "Бенчмарк (benchmark)",
    tag: "",
    def: "Тест производительности.",
  },
  {
    word: "Бета-тестер",
    tag: "",
    def: "Человек, который использует бета-версию продукта и предоставляет обратную связь разработчикам.",
  },
  {
    word: "Битый",
    tag: "",
    def: "Нерабочий (например, битые ссылки).",
  },
  {
    word: "Бэк, бек (back-end)",
    tag: "",
    def: "Внутренняя часть сайта, а также программист, занимающийся ее разработкой.",
  },
  {
    word: "Бэкап (backup)",
    tag: "",
    def: "Резервное копирование данных.",
  },
  {
    word: "Варезник",
    tag: "",
    def: "Сайт, распространяющий пиратское ПО и контент.",
  },
  {
    word: "Галера",
    tag: "",
    def: "Компания, в которой трудится программист (ироничное или негативное выражение).",
  },
  {
    word: "Геймдев",
    tag: "",
    def: "Разработка игр.",
  },
  {
    word: "Гит (Git)",
    tag: "",
    def: "Система управления версиями кода.",
  },
  {
    word: "Говнокод",
    tag: "",
    def: "Плохой, трудноподдерживаемый код.",
  },
  {
    word: "Гуй (GUI, Graphical User Interface)",
    tag: "",
    def: "Графический интерфейс пользователя.",
  },
  {
    word: "Девелопер (developer)",
    tag: "",
    def: "Разработчик.",
  },
  {
    word: "Дистрибутив",
    tag: "",
    def: "Форма распространения программного обеспечения.",
  },
  {
    word: "Дыра",
    tag: "",
    def: "Лазейка в коде, которую могут использовать хакеры.",
  },
  {
    word: "Железо",
    tag: "",
    def: "Аппаратное обеспечение устройств.",
  },
  {
    word: "Зарарить",
    tag: "",
    def: "Сделать архив файлов в формате (определение в источнике было незавершённым).",
  },
  {
    word: "Зипка",
    tag: "",
    def: "Файл в формате zip.",
  },
  {
    word: "ИДЕ, IDE (Integrated Development Environment)",
    tag: "",
    def: "Интегрированная среда разработки.",
  },
  {
    word: "Ибешник",
    tag: "",
    def: "Сотрудник информационной безопасности.",
  },
  {
    word: "Инди-игра (indie game)",
    tag: "",
    def: "Игра, созданная независимым разработчиком или небольшой командой.",
  },
  {
    word: "Капча (CAPTCHA)",
    tag: "",
    def: "Тест для отличия человека от бота.",
  },
  {
    word: "Киберсквоттинг",
    tag: "",
    def: "Скупка доменов с целью перепродажи.",
  },
  {
    word: "Кодить",
    tag: "",
    def: "Программировать.",
  },
  {
    word: "Костыль",
    tag: "",
    def: "Временное плохое решение вместо нормального исправления.",
  },
  {
    word: "Кресты, плюсы (C++)",
    tag: "",
    def: "Язык программирования C++.",
  },
  {
    word: "Куки, кукисы (cookies)",
    tag: "",
    def: "Файлы браузера для идентификации пользователя.",
  },
  {
    word: "Кулхацкер, хацкер (cool hacker)",
    tag: "",
    def: "Человек, считающий себя хакером, но не являющийся им.",
  },
  {
    word: "Легаси-код (legacy code)",
    tag: "",
    def: "Старый устаревший код.",
  },
  {
    word: "Лейба (label)",
    tag: "",
    def: "Этикетка или маркировка продукта.",
  },
  {
    word: "Мыло",
    tag: "",
    def: "Адрес электронной почты.",
  },
  {
    word: "Оверклокинг (overclocking)",
    tag: "",
    def: "Разгон компьютера.",
  },
  {
    word: "Опенсорс (open source)",
    tag: "",
    def: "ПО с открытым исходным кодом.",
  },
  {
    word: "Парсить (parse)",
    tag: "",
    def: "Анализировать и собирать данные.",
  },
  {
    word: "Песочница (sandbox)",
    tag: "",
    def: "Безопасная среда для запуска программ.",
  },
  {
    word: "Пет-проект (pet-project)",
    tag: "",
    def: "Личный проект для опыта или хобби.",
  },
  {
    word: "Попап (pop-up)",
    tag: "",
    def: "Всплывающее окно.",
  },
  {
    word: "Прогрессивный jpeg",
    tag: "",
    def: "формат изображений, который позволяет браузеру загружать картинку постепенно, постоянно отображая её с различным качеством от 0 до 100%.",
  },
  {
    word: "Ребутнуть, ребутить (reboot)",
    tag: "",
    def: "Перезагрузить систему.",
  },
  {
    word: "Репа",
    tag: "",
    def: "Репозиторий.",
  },
  {
    word: "Сижка (Си)",
    tag: "",
    def: "Язык программирования C.",
  },
  {
    word: "Технарь",
    tag: "",
    def: "Человек с техническим образованием или бэкенд-разработчик.",
  },
  {
    word: "Тимлид, тимлидер (team leader)",
    tag: "",
    def: "Руководитель команды разработчиков.",
  },
  {
    word: "Троян",
    tag: "",
    def: "Вредоносная программа.",
  },
  {
    word: "Тулза (tools)",
    tag: "",
    def: "Вспомогательное ПО.",
  },
  {
    word: "Фаервол, файрвол, брандмауэр, межсетевой экран (firewall)",
    tag: "",
    def: "Защитный сетевой фильтр.",
  },
  {
    word: "Фича (feature)",
    tag: "",
    def: "Особенность продукта (в т.ч. «это не баг, а фича»).",
  },
  {
    word: "Фронт (front-end)",
    tag: "",
    def: "Внешняя часть сайта и разработчик интерфейса.",
  },
  {
    word: "Фулстек, фулстек-разработчик (full stack developer)",
    tag: "",
    def: "Разработчик, работающий и с фронтендом, и с бэкендом.",
  },
  {
    word: "Хард (жёсткий диск, винчестер)",
    tag: "",
    def: "Накопитель данных.",
  },
  {
    word: "Хостить",
    tag: "",
    def: "Размещать сайты.",
  },
  {
    word: "ЧХрюша (HR)",
    tag: "",
    def: "Сотрудник отдела персонала.",
  },
  {
    word: "Шарить, расшарить (share)",
    tag: "",
    def: "Открывать доступ, делиться.",
  },
  {
    word: "Шейдер (shader)",
    tag: "",
    def: "Программа для видеокарты.",
  },
  {
    word: "Шильдик",
    tag: "",
    def: "Информационная табличка на устройстве.",
  },
  {
    word: "Call to action",
    tag: "",
    def: "Кнопка призыва к действию.",
  },
  {
    word: "Hero-блок",
    tag: "",
    def: "Главный блок с контентом на сайте.",
  },
];

function groupByLetter(items) {
  const groups = new Map();
  items.forEach((t) => {
    const raw = (t.word || "").trim();
    const letter = raw ? raw[0].toUpperCase() : "#";
    if (!groups.has(letter)) groups.set(letter, []);
    groups.get(letter).push(t);
  });
  return Array.from(groups.entries()).sort(([a], [b]) => a.localeCompare(b, "ru"));
}

function renderList(items) {
  const list = document.getElementById("glossary-list");
  if (!list) return;

  const grouped = groupByLetter(items);

  list.innerHTML = grouped
    .map(([letter, terms]) => {
      const cards = terms
        .map(
          (t) => `
            <article class="term">
              <h2 class="term__word">${t.word}</h2>
              ${t.tag ? `<div class="term__tag">${t.tag}</div>` : ""}
              <p class="term__def">${t.def}</p>
              <div class="term__mark" aria-hidden="true"><span></span><span></span><span></span><span></span></div>
            </article>
          `
        )
        .join("");

      return `
        <section class="glossary-group" aria-label="Буква ${letter}">
          <div class="glossary-group__letter">${letter}</div>
          <div class="glossary-group__terms">${cards}</div>
        </section>
      `;
    })
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderList(TERMS);

  const input = document.getElementById("glossary-search");
  if (!input) return;

  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    if (!q) return renderList(TERMS);
    renderList(
      TERMS.filter((t) => `${t.word} ${t.tag} ${t.def}`.toLowerCase().includes(q))
    );
  });
});

