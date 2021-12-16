import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;


  max-width: 100%;
  width: 100%;
`;

export const MonthLabelContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  margin: 4px;

  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const MonthLabel = styled.Text`
  font-size: 14px;
`;
