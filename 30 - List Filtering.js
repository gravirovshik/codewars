function filter_list(l) {
    return l.filter(function(v) {return typeof v == 'number'})
  }

filter_list([1,'a','b',0,15])


function filter_list(l) {
    return l.filter(Number.isInteger);
  }