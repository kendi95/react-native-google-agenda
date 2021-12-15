import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export const Container = styled(Animated.View)`
  width: ${width}px;
  min-height: 0px;
  height: 0px;

  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ backgroundColor }) => backgroundColor};
`;

export const Content = styled(Animated.View)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
`;
