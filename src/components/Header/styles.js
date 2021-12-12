import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  background: ${({ color }) => color};
`;

export const MonthButton = styled(RectButton)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 16px 16px;
`;
