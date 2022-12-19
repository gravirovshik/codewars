const orderedCount = function (text) {
  
    let unique = [...new Set(text)];
    console.log('Уникальный массив: ' + unique);

    // Это результат
    let result = [];

    // Находим количество уникальных элементов в исходном массиве.
    for (let u of unique) {
        //console.log(u);
        let al = [...text].filter(x => x === u).length;
        console.log('Количество элементов ' + u + ' = ' + al);
        result.push([u, al])
    }

    console.log(result);

  }


orderedCount("abracadabra");