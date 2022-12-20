function findShort(s){

    // Переводим строку в массив слов

    let arr = s.split(' ');

    // Создаем массив из длин слов
    let arlen = arr.map(function (num) {
        return num.length
      });

    // Сортируем его по возрастанию  
    let arsort = arlen.sort(function(a, b) { return a - b })
    
    // Вытаскиваем первый элемент

    return arsort[0];

}

findShort("turns out random test cases are easier than writing out basic ones");


function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}

const findShort = (s) => s
  .split(' ')
  .sort((a, b) => b.length - a.length)
  .pop()
  .length;