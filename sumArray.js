/* Суммировать все элементы массива, кроме минимального и максимального*/

/* Вариант 1. Простенький.*/

function sumArray(array) {
  if (array === null) return 0;
  if (array === undefined) return 0;
  if (array.length < 3) return 0;
    
  array.sort(function(a, b) {
      return a - b;
    });
  array.pop();
  array.shift();
  
  const sum = array.reduce((partialSum, a) => partialSum + a, 0);

  return sum;  
  }

  /* Вариант 2. Красивый.*/

  const sumArray = (numbers) => (
    numbers && numbers.length > 1
      ? numbers
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((sum, number) => sum + number, 0)
      : 0
  );