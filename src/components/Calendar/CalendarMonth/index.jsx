import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { v4 as uuidV4 } from 'uuid';

import {
  Container,
  WeekContainer,
  MonthLabelContainer,
  MonthLabel
} from './styles';
import { generateMonth } from '../../../utils/generateMonth';

export function CalendarMonth() {

  const [daysOfMonth, setDaysOfMonth] = useState([]);

  const onGetDaysOnMonth = () => {
    const genMonth = generateMonth();
    const month = genMonth();

    setDaysOfMonth(
      month
        .map((week) => week)
        .map((day) => {
          return {
            key: uuidV4(),
            date: day,
            dateShort: format(day, "d")
          }
        })
    );
  }

  useEffect(() => {
    onGetDaysOnMonth();
  }, []);

  return (
    <Container>
      {daysOfMonth.map((week, index) => (
        <WeekContainer>
          {week.map(({ dateShort, key }, indexOfDay) => (
            <MonthLabelContainer key={key}>
              <MonthLabel>{dateShort}</MonthLabel>
            </MonthLabelContainer>
          ))}
        </WeekContainer>
      ))}
    </Container>
  );

}
