let productPrice = 101.5, // цена товара
    productQuantity = 50;  // количество единиц товара на складе

// перше повідомлення
let mes = `На складі наявно ${productQuantity} одиниць товару по ціні ${productPrice} за 1 шт.\n` +
    `Яку кількість товору Ви хочете придбати?`;
// введене значення клієнта
let countProdunts = Number(prompt(mes));

// перевірка можливості купити товар обмежуючись кількістю товару на складі
// спробуємо викручуватись не використовуючи "if"
let availableCount = (countProdunts <= 0) * 0 + (countProdunts > productQuantity) * 50 +
    (countProdunts > 0 && countProdunts <= productQuantity) * countProdunts;

// розрахунок необхідної до оплати суми
let costProduct = availableCount * productPrice;

// наступне сповіщення
mes = `Згідно наявного товару на складі і Вашого бажання, Ви можете придбати ${availableCount} одиниць товару.\n` +
    `За  товар Ви маєте заплатити ${costProduct}.\nВнесіть наявну у Вас суму:`;
let availableModey = Number(prompt(mes));

// примітивна перевірка валідності введених даних
// availableModey = (availableModey <= 0) * 0 + (availableModey > 0) * availableModey;
// оптимізація розрахунку
availableModey *= (availableModey > 0);

// кількість купленого товару
// let countPaid = Math.floor(availableModey / productPrice);
// але припускаємо, що ми не знаємо функцію floor
let countPaid = (availableModey - (availableModey % productPrice)) / productPrice;
// перевірка купленої кількості
countPaid = (countPaid > availableCount) * availableCount +
    (countPaid <= availableCount) * countPaid;

// розрахунок купленого товару, враховуючи внесену суму клієнтом
let costPaidProducts = countPaid * productPrice;

// розраховуємо грошову здачу/решту
let deliveryMoney = availableModey - costPaidProducts;

// залишок товару
let deliveryCount = productQuantity - countPaid;

// наступне сповіщення
mes = `Ви внесли сумму ${availableModey} і придбали ${countPaid} одиниць товару.\n` +
    `Дякуємо за покупку товару, будь-ласка зеберіть свою решту ${deliveryMoney}.\n\n` +
    `На складі залишилось ${deliveryCount} одиниць товару, який Ви можете придбати.`

alert(mes);

// debug
// console.log("productPrice " + productPrice);
// console.log("countProdunts " + countProdunts);
// console.log("availableCount " + availableCount);
// console.log("costProduct " + costProduct);
// console.log("availableModey " + availableModey);
// console.log("countPaid " + countPaid);
// console.log("costPaidProducts " + costPaidProducts);
// console.log("deliveryMoney " + deliveryMoney);
// console.log("deliveryCount " + deliveryCount);
