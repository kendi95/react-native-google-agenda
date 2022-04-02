import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
import { Dimensions, FlatList } from 'react-native';

const { width } = Dimensions.get('screen');

type ContainerProps = {
  backgroundColor: string;
}

export const Container = styled(Animated.View)<ContainerProps>`
  width: ${width}px;
  min-height: 0px;
  height: 0px;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  background: ${({ backgroundColor }) => backgroundColor};
`;

export const Content = styled(Animated.View)`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  background: transparent;
`;

export const MonthList = styled(FlatList).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false
})`

`;
