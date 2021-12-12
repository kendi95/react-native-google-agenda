import React from 'react';
import { StatusBar } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {
  Container,
  MonthButton,
  MonthLabel
} from './styles';

export default function Header() {

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#efefef" />

      <Container>
        <MonthButton color="#ffffff">
          <MonthLabel>January</MonthLabel>
          <FeatherIcon name="chevron-down" size={24} />
        </MonthButton>
      </Container>
    </>
  );

}
