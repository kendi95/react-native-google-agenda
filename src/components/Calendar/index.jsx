import React from 'react';

import { CalendarMonth } from './CalendarMonth';
import { Weeks } from './Weeks';

import { Container } from './styles';

export function Calendar() {

  return (
    <Container>
      <Weeks />
      <CalendarMonth />
    </Container>
  );

}
