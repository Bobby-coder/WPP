# JavaScript Date Objects

JavaScript Date objects represent a point in time, specified as the number of milliseconds since January 1, 1970, 00:00:00 UTC (the Unix epoch). They are used for date and time manipulation in JavaScript.

## Methods

- **getDay():** Retrieves the day of the week (0-6) for a given Date object, according to local time. The returned value corresponds to the day of the week, with Sunday being 0, Monday being 1, and so on.
- **getHours():** Returns the hour (0-23) of the day for a given Date object, according to local time.
- **getMinutes():** Retrieves the minutes (0-59) of a given Date object, according to local time.
- **getSeconds():** Returns the seconds (0-59) of a given Date object, according to local time.

## Additional Methods

- **Date.now():** Returns the number of milliseconds elapsed since January 1, 1970, 00:00:00 UTC.
- **toLocaleString():** Returns a string representation of the date and time using the browser's locale-specific formatting options. This includes the date, time, and optionally the time zone, formatted in a way appropriate to the locale.
- **toLocaleTimeString():** Returns a string representing the time portion of the Date object according to the locale-specific formatting options.
- **toLocaleDateString():** Returns a string representing the date portion of the Date object according to the locale-specific formatting options.

## Time Notations

- **AM and PM:** Stand for 'ante meridiem' and 'post meridiem', respectively, which denote before noon and after noon in Latin.
- **12-Hour Periods:** Most clocks use a 12-hour format, dividing the day into two 12-hour periods:
  - Ante meridiem (AM) denotes time between midnight (0:00) and noon (12:00).
  - Post meridiem (PM) denotes time between noon (12:00) and midnight (0:00).
