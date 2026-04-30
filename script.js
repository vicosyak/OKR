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