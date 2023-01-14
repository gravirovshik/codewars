const findMissingLetter = (array) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const start = alphabet.indexOf(array[0]);
    return alphabet.slice(start, start + array.length).find(el => !array.includes(el));
  };

  function findMissingLetter1(letters) {
    for (var i = 0; i < letters.length; i++) {
      if (letters[i].charCodeAt() + 1 !== letters[i + 1].charCodeAt()) {
        return String.fromCharCode(letters[i].charCodeAt() + 1);
      }
    }
  }

  