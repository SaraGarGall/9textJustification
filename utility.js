function stringToArray(n) {
  let array = n.split(' ');
  return array;
}

export function justificationWithSpaces(n) {
  let width = 50;
  let string = n;
  let text = stringToArray(string);

  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < text.length - 1 && string.length < width; j++) {
      //To add a space after each element of the array, of each word.
      text[j] = text[j] + ' ';
      string = text.join(' '); //To update the string with the changes on the text array.
    }
    //To make the first for loop a circular for loop.
    if (i == text.length - 1 && string.length < width) {
      i = 0;
    }
  }
  string = text.join(' ');
  console.log('width:', width, 'string length:', string.length);
  return string; // To return a string and not an array.
}