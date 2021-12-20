import React, { useEffect, useState } from 'react';
import {
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  format,
  isSameDay
} from 'date-fns';

import { Container, WeekLabel } from './styles';

export function Weeks() {
  const [daysOfWeek, setDaysOfWeek] = useState([]);

  const onGetDaysOfWeek = () => {
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
        isSameDay: isSameDay(day, new Date())
      }
    });

    setDaysOfWeek(week);
  }

  useEffect(() => {
    onGetDaysOfWeek();
  }, []);

  return (
    <Container>
      { daysOfWeek.map(({ shortName, key, isSameDay }) => (
        <WeekLabel
          key={key}
          isSameDay={isSameDay}
          color={isSameDay ? "#0e87f8" : "#757575"}
        >
          {shortName}
        </WeekLabel>
      )) }
    </Container>
  );

}
