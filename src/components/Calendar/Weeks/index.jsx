import React from 'react';

import { Container, WeekLabel } from './styles';
import { weeks } from './weeks';

export function Weeks() {

  return (
    <Container>
      { weeks.map(({ shortName }) => (
        <WeekLabel>{shortName}</WeekLabel>
      )) }
    </Container>
  );

}
