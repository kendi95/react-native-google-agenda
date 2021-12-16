import React, { useEffect, useState } from 'react';
import {
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  format
} from 'date-fns';
import { v4 as uuidV4 } from 'uuid';

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
        key: uuidV4(),
        shortName: format(day, "EEEEE"),
        name: format(day, "EEEE")
      }
    });

    setDaysOfWeek(week);
  }

  useEffect(() => {
    onGetDaysOfWeek();
  }, []);

  return (
    <Container>
      { daysOfWeek.map(({ shortName, key }) => (
        <WeekLabel key={key}>{shortName}</WeekLabel>
      )) }
    </Container>
  );

}
