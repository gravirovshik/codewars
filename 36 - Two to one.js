function longest(s1, s2) {
    let str = (s1 + s2).toLowerCase();

    console.log(str);
    let chars = str.split('').sort().join('');
    console.log(chars);

    let unique = [...new Set(chars)];
    console.log(unique);

    let result = unique.join('');
    console.log(result);

  }

  const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('');

  a = "Roma"
  b = "Belov"
  longest(a, b);