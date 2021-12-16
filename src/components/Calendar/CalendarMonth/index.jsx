import React, { useEffect } from 'react';
import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isToday,
  format
} from 'date-fns';

import { Weeks } from '../Weeks';

import {
  Container,
  MonthLabelContainer,
  MonthLabel
} from './styles';

export function CalendarMonth() {

  const [daysOfMonth, setDaysOfMonth] = useState([]);

  const onGetDaysOnMonth = () => {
    const startDayOfMonth = startOfMonth(
      new Date(new Date().setHours(0, 0, 0, 0))
    );
    const endDayOfMonth = endOfMonth(
      new Date(new Date().setHours(23, 59, 59, 0))
    );

    const intervalDaysOfMonth = eachDayOfInterval({
      start: startDayOfMonth,
      end: endDayOfMonth
    });

    const month = intervalDaysOfMonth.map((date) => {
      return {
        day: format(date, "d"),
        isToday: isToday(date)
      }
    });

    setDaysOfMonth(month);
  }

  useEffect(() => {}, []);

  return (
    <>
      <Weeks />
      <Container>
        {daysOfMonth.map(({ day, isToday }) => (
          <MonthLabelContainer
            backgroundColor={isToday ? "#0e87f8" : "transparent"}
          >
            <MonthLabel
              isSameToday={isToday}
              color={isToday ? "#ffffff" : "#464646"}
            >
              {day}
            </MonthLabel>
          </MonthLabelContainer>
        ))}
      </Container>
    </>
  );

}
