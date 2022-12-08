/* We need a function that can transform a number (integer) into a string.*/
/* Вариант 1 */
function numberToString(num) {
    return num.toString();
  }

/* Вариант 2 */
function numberToString(num) {
    // Return a string of the number here!
    return String(num);
  }

  /* Вариант 3 */
  function numberToString(num) {
    return ''+num;
  }

/* Вариант 4 */
  const numberToString = num => `${num}`;

  /* Вариант 5 */
  