import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  width: 100%;
  min-height: 48px;
  height: 72px;

  flex-direction: row;
  align-items: center;
  background-color: ${({ color }) => color};
`;

export const MonthButton = styled(RectButton)`
  flex: 1;
  flex-direction: row;
  align-items: center;

  height: 72px;
  padding: 24px 24px;
  background-color: ${({ color }) => color};
`;

export const MonthLabel = styled.Text`
  font-size: 18px;
  margin-right: 8px;
`;

export const ActionButton = styled(RectButton)`
  width: 48px;
  height: 48px;
  border-radius: 24px;

  align-items: center;
  justify-content: center;
  margin-left: 8px;
`;
