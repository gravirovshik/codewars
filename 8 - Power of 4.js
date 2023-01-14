function powerOf4(n) {

  if (typeof n !== 'number' || n < 1) return false;
  
  while (n % 4 === 0){
    n = n / 4;
  }

  return n === 1;
 
}

function powerOf4(n) {
  if (typeof n !== "number" || n < 1) {
    return false;
  }else if( n === 1){
    return true;
  }
  return n % 4 === 0;
}