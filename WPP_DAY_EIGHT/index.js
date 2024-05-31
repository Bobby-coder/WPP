// Write a JavaScript program to check whether a string starts with 'Java'  if it does not then  return False.

// Using startsWith()
function isStartsWith(str) {
  // check if input string has less than 4 characters
  if (str.length < 4) return false;
  const query = "Java";
  // startsWith checks whether string is started with given query or not and returns true or false.
  return str.startsWith(query);
}

// Using slice()
function isStartsWith2(str) {
  // check if input string has less than 4 characters
  if (str.length < 4) return false;
  const query = "Java";
  // extract first 4 character using slice() and compare them with query
  const firstFOurChars = str.slice(0, 4);
  // if matched return true otherwise false
  return firstFOurChars === query;
}

console.log(isStartsWith("JavaScript"));
console.log(isStartsWith("Java"));
console.log(isStartsWith("Python"));
console.log(isStartsWith("C"));
console.log("--------------------------------------------------");
console.log(isStartsWith2("JavaScript"));
console.log(isStartsWith2("Java"));
console.log(isStartsWith2("Python"));
console.log(isStartsWith2("C"));
