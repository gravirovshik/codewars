function numberJoy(n) {
// Переводим число в массив цифр
let array = [...n.toString()].map(Number);
console.log('Массив из цифр: ' + array);

// Суммируем все цифры
let sumarray = array.reduce((a, b) => a + b);
console.log('Сумма цифр в массиве: ' + sumarray);

// Проверяем, является ли числом Харшада
if (n % sumarray !== 0) return false;

// Разворачиваем число
let reverse = Number(sumarray.toString().split('').reverse().join(''));
console.log('Развернутое число: ' + reverse);


let result = sumarray * reverse;
console.log('Умножили сумму цифр и разворот: ' + result);

// Сравниваем результат умножения и заданное число
return result == n;



}

numberJoy(1998);