function userDialog() {
    let response = "";
    while (response === "") {
        response = prompt("Який жанр ви полюбляєте? (фантастика, драма, хоррор)");
        if (response === null) 
            return;
    }

    let message;
    switch (response.toLowerCase()) {
        case "фантастика":
            message = "Чудовий вибір! Рекомендуємо почитати Айзека Азімова.";
            break;
        case "хоррор":
            message = "Тоді Стівен Кінг - це саме те, що вам потрібно!";
            break;
        default:
            message = "Цікавий вибір. У нас є багато книг у цьому напрямку.";
    }
    alert(message);
}


function showDeveloperInfo(lastName, firstName, position = "Студентка") {
    console.log(`Розробник сторінки: ${lastName} ${firstName}, Посада: ${position}`);
}


function compareTitles(str1, str2) {
    if (str1.length > str2.length) {
        alert("Довша назва: " + str1);
    } else if (str2.length > str1.length) {
        alert("Довша назва: " + str2);
    } else {
        alert("Назви однакові за довжиною");
    }
}

function manageDOM() {

    const introSection = document.getElementById('intro');
    const allParagraphs = document.querySelectorAll('p');

    console.log("Вміст заголовка (innerHTML):", introSection.querySelector('h1').innerHTML);
    console.log("Текст першого абзацу (textContent):", allParagraphs[0].textContent);

    const footerInfo = document.createElement('footer');
    const textNode = document.createTextNode(" © 2026 Книжковий простір");
    footerInfo.style.textAlign = "center";
    
    footerInfo.append(textNode); 
    document.body.append(footerInfo); 

    const promo = document.createElement('div');
    promo.innerHTML = "<strong>Знижка 10% на всі книги!</strong>";
    promo.style.color = "red";
    introSection.prepend(promo); 

    const subtitle = document.createElement('h3');
    subtitle.textContent = "Ваш надійний провідник у світі літератури";
    mainTitle.after(subtitle); 

    const oldHr = document.querySelector('hr');
    const newDivider = document.createElement('div');
    newDivider.style.height = "3px";
    newDivider.style.backgroundColor = "navy";
    oldHr.replaceWith(newDivider); 

    const tempElement = document.createElement('p');
    tempElement.textContent = "Це тимчасове повідомлення. Воно зникне.";
    document.body.append(tempElement);
    
    setTimeout(() => {
        tempElement.remove(); 
    }, 2000);

    showDeveloperInfo("Крившенко", "Вікторія");
}


// LAB 7
function handleTableClick(event) {
    console.log('Клік по таблиці через атрибут:', event.target.textContent);
    event.target.classList.toggle('highlighted');
    updateInfo(`Клікнуто на: ${event.target.textContent}`);
}

const table = document.getElementById('bookTable');

function handleTableMouseOver(event) {
    console.log('Наведення миші на таблицю');
    event.currentTarget.style.border = '3px solid #FF4500';
}

function handleTableMouseOut(event) {
    console.log('Миша покинула таблицю');
    event.currentTarget.style.border = '1px solid black';
}

table.addEventListener('mouseover', handleTableMouseOver);
table.addEventListener('mouseout', handleTableMouseOut);

const tableEventHandler = {
    handleEvent(event) {
        console.log('Обробник-обєкт спрацював на:', event.currentTarget);
        updateInfo(`Елемент: ${event.currentTarget.tagName} (ID: ${event.currentTarget.id || 'немає'})`);
    }
};

table.addEventListener('click', tableEventHandler);

const mouseMoveHandler = function(event) {
    console.log('Рух миші по таблиці');
};

table.addEventListener('mousemove', mouseMoveHandler);
setTimeout(() => {
    table.removeEventListener('mousemove', mouseMoveHandler);
    console.log('Обробник mousemove видалено');
}, 5000);

const genreList = document.getElementById('genreList');
genreList.onclick = function(event) {
    if (event.target.tagName === 'LI') {
        genreList.querySelectorAll('li').forEach(li => li.classList.remove('highlighted'));
        event.target.classList.add('highlighted');
        updateInfo(`Вибрано жанр: ${event.target.dataset.genre}`);
    }
};

const menu = document.getElementById('menu');
menu.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        const action = event.target.dataset.action;
        const behaviors = {
            showInfo: () => updateInfo('Інформація про колекцію оновлена!'),
            highlightAll: () => {
                genreList.querySelectorAll('li').forEach(li => li.classList.add('highlighted'));
                updateInfo('Усі жанри підсвічені!');
            },
            reset: () => {
                genreList.querySelectorAll('li').forEach(li => li.classList.remove('highlighted'));
                document.querySelectorAll('th').forEach(th => th.classList.remove('highlighted'));
                updateInfo('Все скинуто!');
            },
            toggleImages: () => {
                document.querySelectorAll('.book-cover').forEach(img => {
                    img.classList.toggle('hidden');
                });
                updateInfo('Обкладинки переключені!');
            }
        };
        
        if (behaviors[action]) {
            behaviors[action]();
        }
    }
});

function updateInfo(message) {
    const infoPanel = document.getElementById('infoPanel');
    infoPanel.innerHTML = `<p>${message}</p><small>Час: ${new Date().toLocaleTimeString()}</small>`;
}

document.addEventListener('DOMContentLoaded', function() {
    updateInfo('Сторінка завантажена. Спробуйте клікнути на елементи!');
    console.log('Всі обробники подій налаштовані');
});