const freqSeq = function (text,sep) {
  
    let unique = [...text];
    console.log('Уникальный массив: ' + unique);

    // Это результат
    let result = '';

    // Находим количество уникальных элементов в исходном массиве.
    for (let i = 0; i < unique.length; i++) {
        //console.log(u);
        let al = [...text].filter(x => x === unique[i]).length;
        console.log('Количество элементов ' + unique[i] + ' = ' + al);
        result = result + al;
        if (i != unique.length - 1)
        result = result + sep;
    }

    console.log(result);

  }


//orderedCount("hello world");
freqSeq("19999999" , ":")

//"hello world", "-" --> "1-1-3-3-2-1-1-2-1-3-1"