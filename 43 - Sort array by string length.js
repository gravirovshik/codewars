function sortByLength (array) {
    let arr = array.sort(function(a, b) { return a.length - b.length });
console.log(arr);
  };

  sortByLength(["Beg", "Life", "I", "To"]);