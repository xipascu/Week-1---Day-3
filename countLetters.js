function countLetters(string) {

  var characters = {};
  //object default
  var stringNoSpace = string.replace(/ /g, '');
  // /\s -- space
  // /g - global, causes the replacecall to replace all matches

  for (var i = 0; i < stringNoSpace.length; i++) {
  //return new characters mentioned
  //return the number of times character is found
    if (!characters[stringNoSpace[i]]) {
      characters[stringNoSpace[i]] = 1;
    } else {
      characters[stringNoSpace[i]] += 1;
    }
  }
  return characters;
}

console.log(countLetters("Lighthouse in the house"));
