let name = "Иван",
    age = 25,
    company = "ITVDN",
    position = "Frontend Developer";

// инициализируйте переменную message
// значение должно быть создано с помощью шаблонной строки и с помощью конкатенации.
// строковое значение должно быть создано на основе значений переменных name, age, company, position
// Значение должно быть составлено по шаблону:
// Привет, меня зовут Иван. Мне 25 лет. Я работаю на должности Frontend Developer в компании ITVDN. 

// concatenation
console.log("создано с помощью конкатенации:")
let message_1 = "Привет, меня зовут " + name + ". Мне " + age +
    " лет. Я работаю на должности " + position + " в компании " + company + ".";
console.log(message_1)

// interpolation/pathern row
let message_2 = `Привет, меня зовут ${name}. Мне ${age} лет. Я работаю на должности ${position} в компании ${company}.`
console.log(message_2);
