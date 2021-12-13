import React from 'react';
import { StatusBar } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {
  Container,
  MonthButton,
  MonthLabel
} from './styles';

export function Header() {

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#efefef"
      />

      <Container>
        <MonthButton color="#efefef">
          <MonthLabel>January</MonthLabel>
          <FeatherIcon name="chevron-down" size={24} />
        </MonthButton>
      </Container>
    </>
  );

}
