function daysUntilChristmas() {
  // get current date
  const today = new Date();

  // get current year
  const currentYear = today.getFullYear();

  // Pass custom year, month & day to Date constructor to construct a custom date
  const christmas = new Date(currentYear, 11, 25);

  // Edge case -> If current date is after christmas, then calculate for next year christmas
  if (today > christmas) {
    christmas.setFullYear(currentYear + 1);
  }

  // Calculate difference between current date and christmas in milliseconds
  const differenceInMilliseconds = christmas - today;

  // Convert 24 hour or single day to milliseconds
  const dayInMilliseconds = 1000 * 60 * 60 * 24;

  // Calculate remaining days
  const remainingDays = Math.ceil(differenceInMilliseconds / dayInMilliseconds);

  console.log(`${remainingDays} days left until Christmas!`);
}

daysUntilChristmas();
