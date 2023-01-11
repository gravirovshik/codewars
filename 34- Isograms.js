function isIsogram(str){

    let lower = str.toLowerCase();
    console.log(lower);

    let unique = [...new Set(lower)];
    console.log('Уникальный массив: ' + unique);
    console.log('Длина уникального массива: ' + unique.length);

    console.log(unique.length === str.length);


  }

  isIsogram("mose");

