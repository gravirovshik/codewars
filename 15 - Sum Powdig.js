function eqSumPowdig(hMax, exp) {
    let result = [];

    for (let i = 2; i < hMax + 1; i++) {

        
        // Переводим число в массив цифр
        let array = [...i.toString()].map(Number);
       
        // Получаем сумму чисел в нужной степени
        let sumarray = array.reduce(function (currentSum, currentNumber) {
            return currentSum + Math.pow(currentNumber, exp)
        }, 0)
        // сравниваем сумму и число i. Если равны, то добавляем в массив.
        if (sumarray == i) { result.push(i) }
    }
    console.log(result);
}

eqSumPowdig(2000, 3);

