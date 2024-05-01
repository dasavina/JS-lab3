function str_del() {
    console.log(" statrted");
    // Метод getSelection() повертає об'єкт selection, що представляє діапазон //тексту, який був виділений користувачем, або поточну позицію курсору
    selection = window.getSelection().toString();
    console.log(selection);
    var str = document.getElementById("elem").textContent;
    // Метод.textContent дозволяє отримати текстовий вміст елемента

    // Метод indexOf() починає пошук і повертає індекс першого
    // знайденого збігу із значенням
    var start = str.indexOf(selection);
    var end = start+selection.length;
    var result = str.slice(0, start) + str.slice(end);
    console.log(result);
    //Заповнюємо текстовий вміст елемента
    document.getElementById("elem").innerHTML = result;
}

function deleteLastLetter()
{
    var str = document.getElementById("elem").textContent;
    var result = str.slice(0, -1); // Remove the last character
    document.getElementById("elem").textContent = result;
}