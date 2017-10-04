function letterIndex(string) {

  var characters = {};
  //object default
  var stringNoSpace = string.replace(/ /g, '');
  // /\s -- space
  // /g - global, causes the replacecall to replace all matches

  for (var i = 0; i < stringNoSpace.length; i++) {
  //return characters
  //return index of characters in line
    if (!characters[stringNoSpace[i]]) {
      characters[stringNoSpace[i]] = [i];
    } else {
      characters[stringNoSpace[i]].push(i);
    }
  }
  return characters;
}

console.log(letterIndex("Lighthouse in the house"));
