import styled from 'styled-components/native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

export const Container = styled.View`
  width: 100%;
  min-height: 48px;
  height: 64px;

  flex-direction: row;
  align-items: center;
  background-color: ${({ color }) => color};
  padding: 16px 16px 16px 16px;
`;

export const MonthButton = styled(RectButton)`
  flex: 1;
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 64px;
  padding: 8px;
  background-color: ${({ color }) => color};
`;

export const IconContainer = styled(Animated.View)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MonthLabel = styled.Text`
  font-size: 20px;
  margin-right: 8px;
`;

export const ActionButton = styled(BorderlessButton)`
  width: 32px;
  height: 32px;
  border-radius: 16px;

  align-items: center;
  justify-content: center;
`;

export const CalendarAcordion = styled(Animated.View)`
  width: 100%;
  min-height: 0px;
  height: 0px;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
`;
