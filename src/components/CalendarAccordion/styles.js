import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const Container = styled(Animated.View)`
  flex: 1;
  width: 100%;
  min-height: 0px;
  height: 0px;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
`;
