import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  width: 100%;
  min-height: 48px;
  height: 72px;

  flex-direction: row;
  align-items: center;
  background-color: ${({ color }) => color};
  padding: 24px 16px 24px 16px;
`;

export const MonthButton = styled(RectButton)`
  flex: 1;
  flex-direction: row;
  align-items: center;

  height: 72px;
  padding: 8px;
  background-color: ${({ color }) => color};
`;

export const MonthLabel = styled.Text`
  font-size: 18px;
  margin-right: 8px;
`;

export const ActionButton = styled(BorderlessButton)`
  width: 48px;
  height: 48px;
  border-radius: 24px;

  align-items: center;
  justify-content: center;
  margin-left: 8px;
`;
