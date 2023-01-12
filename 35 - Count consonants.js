function consonantCount(str) {
    str = str.toLowerCase();
    console.log(str);
    let vowels = "bcdfghjklmnpqrstvwxyz"; //согласные
    let res = 0;
    for (u of str) {
      //  console.log('Элемент: ' + u);
      //  console.log('Индекс элемента в строке: ' + vowels.indexOf(u));
        if(vowels.indexOf(u) > -1) {
           res = res + 1;
      //     console.log(res); 
        }

    }
    console.log(res);
}

consonantCount('012345_Cb');