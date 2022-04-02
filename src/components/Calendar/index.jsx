import React from 'react';

import { CalendarMonth } from './CalendarMonth';
import { Weeks } from './Weeks';

import { Container } from './styles';

import { generateMonth } from '../../utils/generateMonth';

export function Calendar({ month }) {
  const { currentMonth } = generateMonth();

  return (
    <Container>
      <Weeks />
      <CalendarMonth month={currentMonth} />
    </Container>
  );

}
