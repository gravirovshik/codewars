function jaden(str) {

    arr = str.split(' ');
    console.log(arr);
    
    let squares = arr.map(function (num) {
        return num.slice(0, 1).toUpperCase() + num.slice(1).toLowerCase();
      })
    console.log(squares);

    let result = squares.join(' ');
    console.log(result);
}

jaden("How can mirrors be real if our eyes aren't real");

