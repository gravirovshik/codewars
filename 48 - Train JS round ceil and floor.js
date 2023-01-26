function roundIt(n){
    let str = n + '';
    str = str.split('.');
    console.log(str);
    console.log(str[0].length);
    console.log(str[1].length);


}


roundIt(5.755);