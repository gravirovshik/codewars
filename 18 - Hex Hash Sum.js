function hexHash(code){

// Создаем массив из символов
let arr = code.split('');

// Переводим сначала в АСКИ, потом в НЕХ
let hexarr = arr.map(function (num) {
    return num.charCodeAt().toString(16);
  });

// Оставляем только цифры
let hexstringarr = hexarr.join('').replace(/[^0-9]/g,"");


// Вычисляем сумму
let result = 0;

for (s of hexstringarr) {

    result = result + Number(s);

}

console.log(result);
}

hexHash("Forty4Three")

