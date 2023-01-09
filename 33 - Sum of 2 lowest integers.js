function sumTwoSmallestNumbers(numbers) {  
   numbers = numbers.sort(function(a, b) {
        return a - b;
      });

    console.log(numbers);

    return numbers[0] + numbers[1];
  }

  sumTwoSmallestNumbers([3, 87, 45, 12, 7]);


  const sumTwoSmallestNumbers = numbers => numbers.sort((x, y) => x - y).slice(0, 2).reduce((x, y) => x + y);