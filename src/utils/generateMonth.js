import { startOfWeek, startOfDay, addDays, startOfMonth, endOfMonth, endOfWeek } from 'date-fns';

function generateWeek(startDate = new Date()) {
  const startDay = startOfDay(startDate);
  let date = startOfWeek(startDay);

  return function () {
    const week = [...Array(7)].map(
      (_, indexOfWeek) => addDays(date, indexOfWeek)
    );
    date = addDays(week[6], 1);
    return week;
  }
}

function daysOfRange(range) {
  return range[range.length - 1][6];
}

export function generateMonth(startDate = new Date()) {
  let month = [];
  let date = startDate;

  return function () {
    const startDayOfMonth = startOfMonth(date);
    const genWeek = generateWeek(startDayOfMonth);

    const endDayOfMonth = endOfMonth(date);
    const endDayOfWeek = endOfWeek(endDayOfMonth);
    const endDate = startOfDay(endDayOfWeek);

    month.push(genWeek());

    while(daysOfRange(month) < endDate) {
      month.push(genWeek());
    }

    const range = month;
    month = [];
    date = addDays(daysOfRange(range), 1);

    return range;
  }
}
