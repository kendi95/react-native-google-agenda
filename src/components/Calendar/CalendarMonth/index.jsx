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
  MonthLabel,
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

    setDaysOfMonth(month);
  }

  useEffect(() => {
    onGetDaysOnMonth();
  }, []);

  return (
    <Container>
      <WeekContainer>
        {[1, 2, 3, 4, 5, 6, 7].map((day) => (
          <MonthLabelContainer
            backgroundColor={"transparent"}
          >
            <MonthLabel
              color={"#464646"}
            >
              {day}
            </MonthLabel>
          </MonthLabelContainer>
        ))}
      </WeekContainer>
      <WeekContainer>
        {[8, 9, 10, 11, 12, 13, 14].map((day) => (
          <MonthLabelContainer
            backgroundColor={"transparent"}
          >
            <MonthLabel
              color={"#464646"}
            >
              {day}
            </MonthLabel>
          </MonthLabelContainer>
        ))}
      </WeekContainer>
    </Container>
  );

}
