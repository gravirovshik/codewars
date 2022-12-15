
// Мой топорный способ
function FindTheStrayNumber(numbers) {
    // создаем уникальный массив
    let unique = [...new Set(numbers)];
    console.log('Уникальный массив: ' + unique);

    // Это результат
    let result;

    // Находим количество уникальных элементов в исходном массиве. Если количество = 1, то это наш парень
    for (let u of unique) {
        //console.log(u);
        let al = numbers.filter(x => x === u).length;
        console.log('Количество элементов ' + u + ' = ' + al);
        if (al == 1) result = u;
    }

    console.log('Наш номер: ' + result);
    return result;

}

// Способ другой. Находим элемент, чей первый индекс равен последнему

const stray = numbers => numbers.find(num => numbers.indexOf(num) === numbers.lastIndexOf(num));

// Еще способ

function stray(numbers) {
    var a = numbers.sort();
    
    if(a[0] != a[1]) {
      return a[0]
    } 
    return a[a.length-1]
  }

  // Побитовый способ. Его не понял.

const stray = nums => nums.reduce((a, b) => a ^ b);


