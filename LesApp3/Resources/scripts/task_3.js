let ordersCount = 0,
    product1 = "Бумага офисная А4, 80 г/м2, 500 л",
    product2 = "Биндеры для бумаги 51 мм",
    product3 = "Ручка шариковая синяя";

let productPrice1 = 280.25,
    productPrice2 = 56,
    productPrice3 = 12.50;

let productQuantity1 = Number(prompt(`Укажите количество продуктов '${product1}', цена ${productPrice1}`, 0)),
    productQuantity2 = Number(prompt(`Укажите количество продуктов '${product2}', цена ${productPrice2}`, 0)),
    productQuantity3 = Number(prompt(`Укажите количество продуктов '${product3}', цена ${productPrice3}`, 0));

let totalPrice = 0;

totalPrice += productPrice1 * productQuantity1;
totalPrice += productPrice2 * productQuantity2;
totalPrice += productPrice3 * productQuantity3;

// перший варіант із інкрементом постфіксним
ordersCount++;
// другий варіант із інкрементом префіксним
// ++ordersCount;

alert(`Общая сумма ${totalPrice}`);