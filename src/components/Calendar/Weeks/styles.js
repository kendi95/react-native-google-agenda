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
  font-size: 12px;
  padding: 8px;

  ${({ isSameDay, color }) =>
    isSameDay
    ? css`
        color: ${color};
        font-weight: bold;
      `
    : css`
        color: ${color};
        font-weight: normal;
      `
  };
`;
