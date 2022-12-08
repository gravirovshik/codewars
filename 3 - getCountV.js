function getCount(str) {
    var vowelsCount = 0;
    for (index in str){
      switch (str[index]) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
      vowelsCount++;
      break;
      }   
    }
    return vowelsCount;
  }

  function getCount(str) {
    return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
   }

   function getCount(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    var vowelsCount = 0;
    
    // enter your majic here
    for (let i of str) {
      if (vowels.includes(i)) vowelsCount++;
    }
    
    return vowelsCount;
  }