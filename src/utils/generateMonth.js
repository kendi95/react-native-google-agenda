import {
  eachDayOfInterval,
  addDays,
  endOfDay,
  endOfMonth,
  endOfWeek,
  format,
  isSameMonth,
  startOfDay,
  startOfMonth,
  startOfWeek,
  isToday,
} from "date-fns";

export function generateMonth(m = new Date()) {
  const month = [];

  const firstDayOfMonth = startOfMonth(
    startOfDay(new Date(m))
  );
  const lastDayOfMonth = endOfMonth(
    endOfDay(new Date(m))
  );

  const firstDayOfWeek = startOfWeek(firstDayOfMonth, {
    weekStartsOn: 0
  });
  const lastDayOfWeek = endOfWeek(firstDayOfWeek, {
    weekStartsOn: 0
  });

  let daysOfWeek = eachDayOfInterval({
    start: firstDayOfWeek,
    end: lastDayOfWeek
  });

  month.push(daysOfWeek);

  let lastDay = lastDayOfWeek;

  while(month[month.length - 1][6] < lastDayOfMonth) {
    lastDay = addDays(lastDay, 1);

    const nextLastDayOfWeek = endOfWeek(endOfDay(lastDay), {
      weekStartsOn: 0
    });

    daysOfWeek = eachDayOfInterval({
      start: lastDay,
      end: nextLastDayOfWeek
    });

    lastDay = nextLastDayOfWeek;

    month.push(daysOfWeek);
  }

  const currentMonth = month.map((week) => {
    return week.map((date) => {
      return {
        key: date.getTime(),
        date,
        dateFormat: isSameMonth(date, new Date())
          ? format(date, "d") : "",
        color: isToday(date) ? "#efefef" : "#404040"
      }
    })
  });

  return { currentMonth };
}
