/*
Write a JavaScript program to display the current day and time in the following format.

Sample Output : 

Today is : Tuesday.
Current time is : 10 PM : 30 : 38
*/

function getCurrentDate() {
  // extract current date
  const currentDate = new Date();

  // extract week day from the current date
  const currentDay = currentDate.getDay();

  // extract current hour from current date
  let currentHour = currentDate.getHours();

  // extract current minute from current date
  const currentMinute = currentDate.getMinutes();

  // extract current second from current date
  const currentSecond = currentDate.getSeconds();

  // List of day names
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // calculate prepand i.e. AM or PM
  let prepand = currentHour >= 12 ? "PM" : "AM";

  // calculate hour according to 12-hour format
  currentHour = currentHour >= 12 ? currentHour - 12 : currentHour;

  // Edge case -> 12 noon -> At 12 noon, currHour will be 0 according to 12-hour format and prepand will be "PM"
  if (currentHour === 0 && prepand === "PM") {
    currHour = 12;
    prepand = currentMinute === 0 && currentSecond === 0 ? "Noon" : "PM";
  }

  // Edge case -> 12 AM midnight -> At 00:00:00 midnight, currHour will be 0 according to 12-hour format and prepand will be "AM"
  if (currentHour === 0 && prepand === "AM") {
    currentHour = 12;
    prepand = currentMinute === 0 && currentSecond === 0 ? "Midnight" : "AM";
  }

  const day = `Today is ${weekdays[currentDay]}.`;
  const time = `Current time is : ${currentHour} ${prepand} : ${currentMinute} : ${currentSecond}`;
  console.log(day);
  console.log(time);
}

getCurrentDate();