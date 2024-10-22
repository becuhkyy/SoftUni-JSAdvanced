function wordsUppercase(inputStr) {
  let strArray = String(inputStr)
    .toUpperCase()
    .split(/[^\w]+/)
    .filter(Boolean)
    .join(", ");
  console.log(strArray);
}

wordsUppercase("Hi, how are you?");
wordsUppercase("Functions in JS can be nested, i.e. hold other functions");
