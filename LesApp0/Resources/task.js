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

// output result
// interpolation / pathern of rows
alert(`${x} ${inputOp} ${y} = ${result}`);
// concatenation
// alert(x + " " + inputOp + " " + y + " = " + result);
