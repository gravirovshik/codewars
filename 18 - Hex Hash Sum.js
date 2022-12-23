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

String.prototype.hashCode = function() {
  var hash = 0,
    i, chr;
  if (this.length === 0) return hash;
  for (i = 0; i < this.length; i++) {
    chr = this.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}

const str = 'nue'
console.log(str, str.hashCode())

