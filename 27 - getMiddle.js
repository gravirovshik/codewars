function getMiddle(s)
{
let l = s.length
let r = '';
console.log(s.length);
if (l % 2 === 0) {
    r = r + s[l/2-1] + s[l/2];
    console.log(r);
}
else {
    l = l+1;
    r = r + s[l/2-1];
    console.log(r);
}

} 

function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}


function getMiddle(s) {
    var middle = s.length / 2;
    return (s.length % 2) 
      ? s.charAt(Math.floor(middle))
      : s.slice(middle - 1, middle + 1);
  }

getMiddle('Yrta')