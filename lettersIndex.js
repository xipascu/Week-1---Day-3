function letterIndex(string) {

  var characters = {};
  //object default

  for (var i = 0; i < string.length; i++) {
  //return characters
  //return index of characters in line
    if (string[i] === ' ') {
      continue;
    }

    if (!characters[string[i]]) {
      characters[string[i]] = [];
    }

    characters[string[i]].push(i); ///****
  }

  return characters;
}

console.log(letterIndex("Lighthouse in the house"));
