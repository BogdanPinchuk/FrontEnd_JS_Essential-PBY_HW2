console.log("Входные параметры:");
let screenWidth = 1980, // ширина экрана
    margins = 10, // отсупы межу блоками с описанием товара
    desieredBlockCount = 5, // количество блоков с описанием, которые должны отобразиться в одну строку
    width = null; // расчитайте ширину блока и запишите в эту переменную

console.log(`Ширина экрана: ${screenWidth};`);
console.log(`Отсупы межу блоками с описанием товара: ${margins};`);
console.log(`Количество блоков с описанием: ${desieredBlockCount};`);

// кількість отступів // в  умові на сказано враховувати отступи по краям екрану, 
// тому вважаємо, що вони цільно прилягають
let borderCount = desieredBlockCount - 1;

// ширина блока // в умові нічого не сказано, значить вважаємо його резиновим
width = (screenWidth - borderCount * margins) / desieredBlockCount;
console.log(`Ширина блока: ${width};`);
