const oneMinute = 60000;
const oneHour = 60*oneMinute;
const oneDay = 24*oneHour;

export function createDate(days, minutes = 0) {
  return new Date(Date.now() - ((days * oneDay) + (minutes * oneMinute)));
}
