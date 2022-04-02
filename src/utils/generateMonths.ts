import { eachMonthOfInterval, parseISO } from 'date-fns';

export function generateMonths(): { months: Date[]; } {
  const months = eachMonthOfInterval({
    start: parseISO("1900-01-01"),
    end: parseISO("2100-12-31"),
  });

  return { months };
}
