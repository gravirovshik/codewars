const fibonacci = n => {
    return (n <= 2) ? 1 : fibonacci(n - 2) + fibonacci(n - 1);
  };

  const fibonaci = n => {
    let sum = 0
    if (n === 1 || n === 2) {
      sum = 1
    }
    else {
      sum += fibonaci(n-1) + fibonaci(n-2)
    }
    return sum
  }

  const fibo = n => cache[n] || (cache[n] = fibo(n - 1) + fibo(n - 2));

