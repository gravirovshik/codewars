function highAndLow1(numbers){
    var arr = numbers.split(' ').sort(function(a, b) { return a - b });
    return arr[arr.length -1] + ' ' + arr[0];
  }

  highAndLow1("1 2 -3 4 5"); // return "5 -3"


function highAndLow2(numbers){
    let arr = numbers.split(' ').map(Number);  
    return Math.max(...arr) + ' ' + Math.min(...arr);
}

highAndLow2("1 9 3 4 -5"); // return "9 -5"