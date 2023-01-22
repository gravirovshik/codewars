function divisors(n) {
    let divisors = [];
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        divisors.push(i);
        if (i !== n / i) {
          divisors.push(n / i);
        }
      }
    }
    divisors.sort((a, b) => a - b);
    if (divisors.length === 0) {
      return `${n} is prime`;
    }
    return divisors;
  }

  
  function divisors(integer) {
	var divs = [];
  
  for(var i = 2; i < integer; i++) {
    if(integer % i === 0) {
    	divs.push(i);
    }
  }
  
  return divs.length ? divs : integer + ' is prime';
};