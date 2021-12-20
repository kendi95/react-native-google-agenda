import React, { useEffect, useState } from 'react';
import {
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  startOfDay,
  endOfDay,
  addDays,
  format,
  isToday,
  isSameMonth
} from 'date-fns';

import {
  Container,
  DayLabelContainer,
  DayLabel,
  WeekContainer
} from './styles';

export function CalendarMonth() {
  const [daysOfMonth, setDaysOfMonth] = useState([]);

  const onGetDaysOnMonth = () => {
    const month = [];

    const firstDayOfMonth = startOfMonth(
      startOfDay(new Date())
    );
    const lastDayOfMonth = endOfMonth(
      endOfDay(new Date())
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

    const newMonth = month
      .map((week) => {
        return week.map((date) => {
          return {
            key: date,
            date,
            dateFormat: format(date, "d"),
            isSameMonth: isSameMonth(date, new Date())
          }
        })
      });

    setDaysOfMonth(newMonth);
  }

  useEffect(() => {
    onGetDaysOnMonth();
  }, []);

  return (
    <Container>
      {daysOfMonth.map((week, index) => (
        <WeekContainer key={index}>
          {week.map(({ key, date, dateFormat, isSameMonth }) => (
            <DayLabelContainer
              key={key}
              backgroundColor={isToday(date) ? "#5894e4" : "transparent"}
            >
              <DayLabel
                color={isToday(date) ? "#efefef" : "#404040"}
              >
                {isSameMonth ? dateFormat : ""}
              </DayLabel>
            </DayLabelContainer>
          ))}
        </WeekContainer>
      ))}
    </Container>
  );

}
