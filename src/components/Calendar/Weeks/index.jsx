import React from 'react';

import { Container, WeekLabel } from './styles';

import { useGoogleAgenda } from '../../../hooks/useGoogleAgenda';

export function Weeks() {
  const { week } = useGoogleAgenda();

  return (
    <Container>
      {week.map(({ shortName, key, isSameDay, color }) => (
        <WeekLabel
          key={key}
          isSameDay={isSameDay}
          color={color}
        >
          {shortName}
        </WeekLabel>
      ))}
    </Container>
  );

}
