import styled from 'styled-components/native';
import { Dimensions, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('screen');

type DayLabelContainerProps = {
  backgroundColor?: string;
}

type DayLabelProps = {
  color?: string;
}

export const Container = styled.View`
  width: ${width}px;
  height: 100%;

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

export const DayLabelContainer = styled(TouchableOpacity)<DayLabelContainerProps>`
  width: 28px;
  height: 28px;
  border-radius: 14px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${
    ({ backgroundColor }) => !backgroundColor
    ? 'transparent'
    : backgroundColor
  };
`;

export const DayLabel = styled.Text<DayLabelProps>`
  font-size: 12px;
  color: ${
    ({ color }) => !color
    ? 'transparent'
    : color
  };
`;
