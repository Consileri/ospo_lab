let confirmed = false;

while (!confirmed) {
    let age = prompt("Сколько вам лет?");
    
    if (age === null || age === "") {
        alert("Пожалуйста, введите возраст.");
        continue;
    }

    confirmed = confirm("Ваш возраст: " + age + ". Верно?");
}

alert("Спасибо!");
