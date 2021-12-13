import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {
  Container,
  MonthButton,
  MonthLabel,
} from './styles';

export function Header({
  buttonLeft = null,
  buttonsRight = []
}) {

  return (
    <Container color="#efefef">
      {buttonLeft && React.cloneElement(buttonLeft)}

      <MonthButton color="#efefef">
        <MonthLabel>January</MonthLabel>
        <FeatherIcon name="chevron-down" size={20} />
      </MonthButton>

      {buttonsRight.length > 0 &&
        buttonsRight.map((childElement) => React.cloneElement(childElement))
      }
    </Container>
  );

}
