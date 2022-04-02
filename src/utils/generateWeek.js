import {
  format,
  eachDayOfInterval,
  endOfWeek,
  startOfWeek,
  isSameDay,
} from "date-fns";

export function generateWeek() {
  const startDayOfWeek = startOfWeek(
    new Date(new Date().setHours(0, 0, 0, 0)),
    {
      weekStartsOn: 0,
    }
  );
  const endDayOfWeek = endOfWeek(
    new Date(new Date().setHours(23, 59, 59, 0)),
    {
      weekStartsOn: 0
    }
  );

  const intervalDaysOfWeek = eachDayOfInterval({
    start: startDayOfWeek,
    end: endDayOfWeek
  });

  const week = intervalDaysOfWeek.map((day) => {
    return {
      key: day,
      shortName: format(day, "EEEEE"),
      name: format(day, "EEEE"),
      isSameDay: isSameDay(day, new Date()),
      color: isSameDay(day, new Date()) ? "#0e87f8" : "#757575"
    }
  });

  return { week };
}
