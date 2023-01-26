function roundIt(n){
    let str = n + '';
    str = str.split('.');
    console.log(str);
    console.log(str[0].length);
    console.log(str[1].length);
    if (str[0].length == str[1].length) {
        return Math.round(n)
    }
    else if (str[0].length > str[1].length) {
        return Math.floor(n)
    } else return Math.ceil(n);


}


roundIt(5.755);

function roundIt(n){
    var [a, b] = n.toString().split('.');
    return a.length > b.length ? Math.floor(n) : a.length === b.length ? Math.round(n) : Math.ceil(n);
  }