import styled from 'styled-components/native';

export const Container = styled.View`
  max-width: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const MonthLabelContainer = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  margin: 4px;

  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const MonthLabel = styled.Text`
  font-size: 16px;
  color: ${({ color }) => color};
`;
