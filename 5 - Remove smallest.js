function removeSmallest(numbers) {
  let min = Math.min(...numbers)
  let index = numbers.indexOf(min);
  numbers.splice(index, 1);
  return numbers;
  }

  function removeSmallest(numbers) {
    let indexOfMin = numbers.indexOf(Math.min(...numbers));
    return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
  }

  function removeSmallest(numbers) {
  const removeSmallest = numbers => numbers.filter((n,i) => i !== numbers.indexOf(Math.min(...numbers)));
  }