import React, { useEffect, useState } from 'react';
import {
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isToday,
  format,
  eachWeekOfInterval,
  lastDayOfMonth,
  startOfDay,
  endOfDay,
  addDays
} from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { v4 as uuidV4 } from 'uuid';

import {
  Container,
  MonthLabelContainer,
  MonthLabel
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
      locale: ptBR,
      weekStartsOn: 0
    });
    const lastDayOfWeek = endOfWeek(endOfDay(firstDayOfWeek), {
      locale: ptBR,
      weekStartsOn: 0
    });

    let daysOfWeek = eachWeekOfInterval({
      start: firstDayOfWeek,
      end: lastDayOfWeek
    });

    month[0] = daysOfWeek;
    let lastDay = lastDayOfWeek;

    while(month[month.length - 1][6] < lastDayOfMonth) {
      lastDay = addDays(lastDay, 1);

      const nextLastDayOfWeek = endOfWeek(endOfDay(lastDay), {
        locale: ptBR,
        weekStartsOn: 0
      });

      daysOfWeek = eachWeekOfInterval({
        start: addDays(lastDayOfWeek, 1),
        end: nextLastDayOfWeek
      });

      lastDay = nextLastDayOfWeek;

      month[month.length + 1] = daysOfWeek;
    }

    console.log(month);

    // setDaysOfMonth(month);
  }

  useEffect(() => {
    onGetDaysOnMonth();
  }, []);

  return (
    <Container>
      {daysOfMonth.map(({ key, day, isToday }) => (
        <MonthLabelContainer
          key={key}
          backgroundColor={isToday ? "#0e87f8" : "transparent"}
        >
          <MonthLabel
            color={isToday ? "#ffffff" : "#464646"}
          >
            {day}
          </MonthLabel>
        </MonthLabelContainer>
      ))}
    </Container>
  );

}
