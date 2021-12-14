import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  width: 100%;
  min-height: 48px;
  height: 72px;

  flex-direction: row;
  align-items: center;
  background-color: ${({ color }) => color};
  padding: 16px 16px 16px 16px;
`;

export const MonthButton = styled(BorderlessButton)`
  flex: 1;
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 72px;
  padding: 8px;
  background-color: ${({ color }) => color};
`;

export const IconContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MonthLabel = styled.Text`
  font-size: 18px;
  margin-right: 8px;
`;

export const ActionButton = styled(BorderlessButton)`
  width: 40px;
  height: 40px;
  border-radius: 20px;

  align-items: center;
  justify-content: center;
`;
