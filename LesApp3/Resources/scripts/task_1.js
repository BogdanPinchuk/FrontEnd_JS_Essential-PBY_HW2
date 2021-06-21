let product1 = "Бумага офисная А4, 80 г/м2, 500 л",
    product2 = "Биндеры для бумаги 51 мм",
    product3 = "Ручка шариковая синяя";

let productPrice1 = 280.25,
    productPrice2 = 56,
    productPrice3 = 12.50;

// let productQuantity1 = +prompt(`Укажите количество продуктов '${product1}', цена ${productPrice1}`, 0),
//     productQuantity2 = +prompt(`Укажите количество продуктов '${product2}', цена ${productPrice2}`, 0),
//     productQuantity3 = +prompt(`Укажите количество продуктов '${product3}', цена ${productPrice3}`, 0);

// згідно зауважень тренера краще використовувати такий підхід
let productQuantity1 = Number(prompt(`Укажите количество продуктов '${product1}', цена ${productPrice1}`, 0)),
    productQuantity2 = Number(prompt(`Укажите количество продуктов '${product2}', цена ${productPrice2}`, 0)),
    productQuantity3 = Number(prompt(`Укажите количество продуктов '${product3}', цена ${productPrice3}`, 0));

let totalPrice = 0;

// тут 3 варіанти
// перший, який мався на увазі
totalPrice = totalPrice + productPrice1 * productQuantity1;
totalPrice = totalPrice + productPrice2 * productQuantity2;
totalPrice = totalPrice + productPrice3 * productQuantity3;

// обнуляємо лічильник
totalPrice = 0;
// другий - рекомендовано використовувати в циклах
totalPrice += productPrice1 * productQuantity1;
totalPrice += productPrice2 * productQuantity2;
totalPrice += productPrice3 * productQuantity3;

// обнулення лічильника не потрібно
// третій
totalPrice = productPrice1 * productQuantity1
    + productPrice2 * productQuantity2
    + productPrice3 * productQuantity3;

alert(`Общая сумма ${totalPrice}`);