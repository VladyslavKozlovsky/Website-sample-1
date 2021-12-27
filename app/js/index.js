let blockMore = document.querySelector(".secondary_part__more");
let btnMore = document.querySelector(".secondary_part__moreBtn");
let modalWindow = document.querySelector(".modal__window");
let modalCloseBtn = document.querySelector(".modal__closeBtn");
let modalClearBtn = document.querySelector(".modal__clearBtn");
let searchInput = document.querySelector(".search__input");
let modalInput = document.querySelector(".modal__input");


let article_1 = {
	'foto': 'https://itproger.com/img/news/1517501131.jpg',
	'title': 'Устаревшие языки, которые уже не стоит изучать',
	'intro': 'Есть много ЯП, которые уже отжили свое, но их все равно продолжают изучать. В этой статье мы расскажем про 5 языков, которые уже точно не стоит изучать, хотя многие до сих пор делают это.',
  'ref': 'https://itproger.com/news/ustarevshie-yaziki-kotorie-uzhe-ne-stoit-izuchat'
};

let article_2 = {
	'foto': 'https://itproger.com/img/news/1520152698.jpg',
	'title': 'Зачем нужен язык программирования Rust?',
	'intro': 'Rust набирает популярность, но при этом многие до сих пор не понимают его ценности и функций. Мы расскажем про основные преимущества языка программирования Rust.',
  'ref': 'https://itproger.com/news/zachem-nuzhen-yazik-programmirovaniya-rust'
};

let article_3 = {
	'foto': 'https://itproger.com/img/news/1518258565.jpg',
	'title': 'Что выбрать C++ или C#? С чего лучше начать?',
	'intro': 'Между собой оба языка очень похожи, при отсутствии опыта разобраться в различиях очень сложно. Статья поможет расставить всё по своим местам и укажет верный язык на основании поставленных задач.',
  'ref': 'https://itproger.com/news/chto-vibrat-c-ili-c-s-chego-luchshe-nachat'
};

let article_4 = {
	'foto': 'https://itproger.com/img/tasks/1516438067.jpg',
	'title': '3 логические задачи для настоящего программиста',
	'intro': 'Компании любят проверять молодых специалистов на различные логические задачи. Мы подобрали три интересных задачи, которые заставят вас задуматься.',
  'ref': 'https://itproger.com/tasks/3-logicheskie-zadachi-dlya-nastoyashtego-programmista'
};

let article_5 = {
	'foto': 'https://itproger.com/img/news/1517495970.jpg',
	'title': 'Как создать свою криптовалюту?',
	'intro': 'Создание собственной криптовалюты это сложная задача, на которую уйдет не мало сил и времени. Мы расскажем вам общий алгоритм создания своей собственной криптовалюты!',
  'ref': 'https://itproger.com/news/kak-sozdat-svoyu-kriptovalyutu'
};

let article_6 = {
	'foto': 'https://itproger.com/img/news/1516439711.jpg',
	'title': 'ТОП 10: Подборка хобби для программиста',
	'intro': 'Мы подобрали 10 хороших хобби, чтобы можно было с удовольствием провести время вне работы, а также улучшить логические и креативные способности мозга.',
  'ref': 'https://itproger.com/news/top-10-podborka-hobbi-dlya-programmista'
};

let article_7 = {
	'foto': 'https://itproger.com/img/news/1516890380.jpg',
	'title': 'СЕО-продвижение – верный способ улучшить свой бизнес',
	'intro': 'Продвижение сайта это сложная работа, требующая вложений как денег, так и времени. Мы расскажем про верные способы СЕО-продвижения, позволяющие раскрутить сайт!',
  'ref': 'https://itproger.com/news/seo-prodvizhenie-verniy-sposob-uluchshit-svoy-biznes'
};

let article_8 = {
	'foto': 'https://itproger.com/img/news/1516366532.jpg',
	'title': '10 самых популярных сайтов написанных на Django',
	'intro': 'Django набирает популярность и многие крупные компании используют его для создания веб проектов. Мы подобрали 10 популярных сайтов, написанных на Django.',
  'ref': 'https://itproger.com/news/10-samih-populyarnih-saytov-napisannih-na-django'
};

let articles = [article_1, article_2, article_3, article_4, article_5, article_6, article_7, article_8];

let counter = -1;
function addMoreNews() {
  for (let i = 0; i < 4; i++) {
    counter++
    let newDiv = document.createElement("div");
        newDiv.innerHTML = `<div class="card secondary_part__card">
          <img src="${articles[counter].foto}" class="card-img-top" alt="not defined">
          <div class="card-body">
            <h4 class="card-title">${articles[counter].title}</h4>
            <p class="card-text">${articles[counter].intro}</p>
            <a href="${articles[counter].ref}" class="btn btn-warning" target="_blank">Читать далее</a>
          </div>
        </div>`;
        blockMore.appendChild(newDiv);
        if (counter == 3) break;
        else if (counter == 7) btnMore.style.display = "none";
    }
}

btnMore.addEventListener("click", addMoreNews);

searchInput.addEventListener("click", () => {
	modalWindow.style.display = "flex";
});

modalCloseBtn.addEventListener("click", () => {
	modalWindow.style.display = "none";
});

modalInput.addEventListener("keyup", () => {
	if (modalInput.value != "")
		modalClearBtn.style.display = "block";
	else modalClearBtn.style.display = "none"
});

modalClearBtn.addEventListener("click", () => {
	modalInput.value = "";
	modalClearBtn.style.display = "none"
});
