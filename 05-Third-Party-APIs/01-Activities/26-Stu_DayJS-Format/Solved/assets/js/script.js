// Use Day.js to format the following variables:

// 1. What is your graduation date in the following format: Jan 1, 1999?
const gradDate = dayjs('2023-06-15').format('MMM D, YYYY');
$('#1a').text(gradDate);

// 2. What day of the week will 1/1/2027 be? (e.g. Is it "Monday"?)
const weekDay = dayjs('01-01-2027', 'M-D-YYYY').format('dddd');
$('#2a').text(weekDay);

// 3. What is the current time in the format: hours:minutes:seconds
const time = dayjs().format('hh:mm:ss');
$('#3a').text(time);

// 4. What is the current Unix timestamp?
const unix = dayjs().unix();
$('#4a').text(unix);

// 5. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.
const unixFormat = dayjs.unix(1318781876).format('MMM D, YYYY, hh:mm:ss a');
$('#5a').text(unixFormat);

// 6. What is the difference in days between May 4, 2027 and today?

// dayjs object for May 4, 2027
const targetDay = dayjs('2027-05-04');

// dayjs object for today
const today = dayjs();

// number of days between targetDay and today
const days = targetDay.diff(today, 'days');
$('#6a').text(days);
