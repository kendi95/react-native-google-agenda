import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import Animated from 'react-native-reanimated';

const { width } = Dimensions.get('screen');

export const Container = styled.View`
  width: ${width}px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const WeekContainer = styled.View`
  width: ${width}px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 0px 16px 0px 16px;
  margin-top: 8px;
`;

export const DayLabelContainer = styled.View`
  width: 32px;
  height: 32px;
  border-radius: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${
    ({ backgroundColor }) => !backgroundColor
    ? 'transparent'
    : backgroundColor
  };
`;

export const DayLabel = styled.Text`
  font-size: 16px;
  color: ${
    ({ color }) => !color
    ? 'transparent'
    : color
  };
`;
