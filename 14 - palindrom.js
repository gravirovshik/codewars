function nextPal(val) {
    for (let i = val + 1; ; i++) {
        if (String(i) == String(i).split("").reverse().join("")) {
        return i;
        }
    }
}

// Красивое решение

function nextPal(val) {
    do {
      val++;
    } while(!isPalindrome(val))
    return val;
  }
  
  function isPalindrome(num) {
    return num === reverseNum(num);
  }
  
  function reverseNum(num) {
    return parseInt(num.toString().split('').reverse().join(''));
  }