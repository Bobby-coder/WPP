function guessNumber() {
  // generate a random number between 1 and 10
  const randomNumber = Math.ceil(Math.random() * 10);

  // take input from the user user prompt()
  const inputNumber = window.prompt("Guess the number");

  // Compare random number and input number. prompt returns the string so convert the input into a number
  Number(inputNumber) === randomNumber
    ? console.log("Good Work")
    : console.log("Not matched");
}

guessNumber();
