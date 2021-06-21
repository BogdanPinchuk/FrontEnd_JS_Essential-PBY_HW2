let product1 = "Бумага офисная А4, 80 г/м2, 500 л",
    product2 = "Биндеры для бумаги 51 мм",
    product3 = "Ручка шариковая синяя";

let productPrice1 = 280.25,
    productPrice2 = 56,
    productPrice3 = 12.50;

let productQuantity1 = +prompt(`Укажите количество продуктов '${product1}', цена ${productPrice1}`, 0),
    productQuantity2 = +prompt(`Укажите количество продуктов '${product2}', цена ${productPrice2}`, 0),
    productQuantity3 = +prompt(`Укажите количество продуктов '${product3}', цена ${productPrice3}`, 0);


// Выведите на экран сколько пользователю нужно заплатить за каждый продукт по отедльности и всего за все продукты
// используйте форматированный вывод

// розрахунок оплати
let costProduct1 = productQuantity1 * productPrice1,
    costProduct2 = productQuantity2 * productPrice2,
    costProduct3 = productQuantity3 * productPrice3,
    costAll = costProduct1 + costProduct2 + costProduct3;

let mes = `За \"${product1}\" в количестве ${productQuantity1} единиц, Вам необходимо оплатить ${costProduct1};\n` +
    `за \"${product2}\" в количестве ${productQuantity2} единиц, Вам необходимо оплатить ${costProduct2};\n` +
    `за \"${product3}\" в количестве ${productQuantity3} единиц, Вам необходимо оплатить ${costProduct3}.\n` +
    `Общая сума к оплате: ${costAll}.\nСпасибо что обрали наш сервис!`;

// вивід
alert(mes);
