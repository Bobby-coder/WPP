// Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.

// Using split(), splice() & join()
function removeCharacter(str, position) {
  // Convert string into an array
  const stringArray = str.split("");
  // remove character at specified position from the array
  stringArray.splice(position, 1);
  // join the array into string
  const newString = stringArray.join("");
  console.log(newString);
}

// Using slice
function removeCharacter2(str, position) {
  const partOne = str.slice(0, position);
  const partTwo = str.slice(position + 1);

  console.log(partOne + partTwo);
}

removeCharacter("Deadpool", 4);
removeCharacter2("Deadpool", 4);
