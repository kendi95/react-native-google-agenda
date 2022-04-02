import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width } = Dimensions.get('screen');

type WeekLabelProps = {
  isSameDay: boolean;
  color: string;
}

export const Container = styled.View`
  width: ${width}px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 0px 16px 0px 16px;
`;

export const WeekLabel = styled.Text<WeekLabelProps>`
  font-size: 10px;
  padding: 8px;

  color: ${({ isSameDay, color }) => isSameDay ? color : color};
  font-weight: ${({ isSameDay }) => isSameDay ? 'bold' : 'normal'};
`;

