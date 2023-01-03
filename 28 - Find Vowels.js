function disemvowel(str){
var vowels = "aeiouAEIOU"; //гласные
var res = "";
for (u of str){
if (vowels.indexOf(u) == -1){
res = res + u;
}
}

console.log(res);
}

function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
  }

  function disemvowel(str) {
    const vowels = 'aeiou';
    return str
      .split('')
      .filter(letter => !vowels.includes(letter.toLowerCase()))
      .join('');
  }
