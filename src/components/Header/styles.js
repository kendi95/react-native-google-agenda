import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  width: 100%;
  min-height: 48px;
  height: 48px;

  flex-direction: row;
  align-items: center;
  background-color: ${({ color }) => color};
`;

export const MonthButton = styled(RectButton)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 24px 24px;
  background-color: ${({ color }) => color};
`;

export const MonthLabel = styled.Text`
  font-size: 18px;
`;
