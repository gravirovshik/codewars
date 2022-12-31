function descendingOrder(n){
    var arr = [...n+''].sort(function(a, b) { return b - a }).join('')
    arr = Number(arr)
    console.log(arr);
    console.log(typeof(arr));
    console.log(arr + 10);
  }

  function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
  }

  function descendingOrder(n){
    return +(n + '').split('').sort(function(a,b){ return b - a }).join('');
  }