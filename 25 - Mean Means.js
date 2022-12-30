function geo_mean(nums, arith_mean) {
    // вычислим длину массива
    let arrayLength = nums.length + 1
    console.log('Длина массива: ' + arrayLength);

    // вычислим сумму элементов массива
    let sum = nums.reduce((partialSum, a) => partialSum + a, 0);
    console.log('Сумма массива: ' + sum);

    // найдем недостающий элемент
    let element = arrayLength * arith_mean - sum;
    console.log('Недостающий элемент: ' + element);

    // добавим его в массив
    nums.push(element);
    console.log(nums);

    // посчитаем произведение элементов
    let comp = nums.reduce((partialSum, a) => partialSum * a, 1);
    console.log(comp);

    // найдем корень нужной степени из поизведения

    let result = Math.pow(comp, 1/arrayLength)
    console.log(result);

}

geo_mean([1, 2], 3)
