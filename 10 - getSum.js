// Топорное решение

function getSum(a, b) {
    if (a == b) return a;
    let count = 0
    if (b > a) {
        for (let i = a; i <= b; i = i + 1) {
            count = count + i;
        }
        return count;
    }

    else {
        for (let i = b; i <= a; i = i + 1) {
            count = count + i;
        }
        return count;
    }
}

// Красивое решение
function GetSum(a,b)
{
  return (Math.abs(a - b) + 1) * (a+b) / 2;
}

// Интересное решение

const range = (start, end) => 
  start === end
    ? [ end ]
    : [ start, ...range(start + 1, end) ]
     
const sum = (a, b) => a + b

function GetSum( a,b )
{
   return range(Math.min(a, b), Math.max(a, b)).reduce(sum, 0)
}