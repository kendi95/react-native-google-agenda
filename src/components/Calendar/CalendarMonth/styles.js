import styled from 'styled-components/native';

export const Container = styled.View`
  display: grid;
  grid-template-columns: repeat(1fr, 7);
`;

export const MonthLabelContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;

  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const MonthLabel = styled.Text`
  font-size: 14px;
`;
