// input data
let inputX = prompt("Введите первое слагаемое", 0),
    inputY = prompt("Введите второе слагаемое", 0),
    // "/"" - x/y and "\" - x\y = y/x - from MatLab
    inputOp = prompt("Введите оператор действия: {+, -, *, /, \\}", "+");

// convert data to number
let x = Number(inputX),
    y = Number(inputY);

// try to create calculator without "if", because we will be learn "if" in next lessons
let result = (inputOp == '+') * (x + y) +
    (inputOp == '-') * (x - y) +
    (inputOp == '*') * (x * y) +
    (inputOp == '/') * (x / y) +
    (inputOp == '\\') * (y / x);

/*
Із власного досвіду:
Даний підхід не завжди працює, бо залежить від вхідних даних і використовуваних функцій.
Буває, що "0" поглинає результат, наприклад:
Маємо: матрицю даних МхМ, де матриця містить в собі "0", і необхідно розрахувати наприклад 
сінк-функцію sinc(x) = sin(x) / (x);
"if" - доволі трудомістий оператор, тому при великих розрахунках, особливо в зображеннях, 
стараються від неї відмовитися.
результат мав би бути:
res = (x == 0) .* 1 + (x != 0) .* sin(x) / x;
де при x == 0 в другій половині відбувається ділення на "0", 
що в деяких програмах призводить до виключень "Exe(ption"
*/

// output result
// interpolation / pathern of rows
alert(`${x} ${inputOp} ${y} = ${result}`);
// concatenation
// alert(x + " " + inputOp + " " + y + " = " + result);
