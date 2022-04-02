import React from 'react';
import {
  isToday,
  isSameDay
} from 'date-fns';

import {
  Container,
  DayLabelContainer,
  DayLabel,
  WeekContainer
} from './styles';

import { useGoogleAgenda } from '../../../hooks/useGoogleAgenda';

export function CalendarMonth({ month }) {

  const {
    selectedDate,
    onChangeSelectedDate,
  } = useGoogleAgenda();

  const onBackgroundColorDayContainer = (date) => {
    if (isToday(date)) {
      return "#5894e4";
    } else if (isSameDay(date, new Date(selectedDate))) {
      return "#8bb5ec";
    } else {
      return "transparent";
    }
  };

  return (
    <Container>
      {month.map((week, index) => (
        <WeekContainer key={index}>
          {week.map(({ key, date, dateFormat, color }) => (
            <DayLabelContainer
              key={key}
              onPress={() => onChangeSelectedDate(date)}
              backgroundColor={onBackgroundColorDayContainer(date)}
            >
              <DayLabel color={color}>
                {dateFormat}
              </DayLabel>
            </DayLabelContainer>
          ))}
        </WeekContainer>
      ))}
    </Container>
  );

}
