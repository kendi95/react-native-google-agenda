import { css } from 'styled-components';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: 16px;
`;

export const WeekLabel = styled.Text`
  font-size: 14px;
  padding: 8px;

  color: ${({ isSameDay, color }) => isSameDay ? color : color};
  font-weight: ${({ isSameDay }) => isSameDay ? 'bold' : 'normal'};
`;
