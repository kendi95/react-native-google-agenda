import React, { useEffect } from 'react';
import { Text } from 'react-native';
import  {
  Extrapolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  interpolate,
  withTiming,
  Easing
} from 'react-native-reanimated';

import {
  Container
} from './styles';

export function CalendarAccordion({
  isShowAccordion = false,
  backgroundColor
}) {
  const animationAccordion = useSharedValue(0);

  const heightAccordion = useDerivedValue(() => {
    return interpolate(
      animationAccordion.value,
      [0, 350],
      [0, 350],
      Extrapolate.CLAMP
    );
  });

  const animationAccordionStyle = useAnimatedStyle(() => {
    return {
      height: heightAccordion.value,
    }
  });

  useEffect(() => {
    animationAccordion.value = withTiming(
      isShowAccordion ? 350 : 0,
      {
        duration: 300,
        easing: Easing.inOut(Easing.ease)
      }
    );
  }, [isShowAccordion]);

  return (
    <Container style={animationAccordionStyle} backgroundColor={backgroundColor}>
      <Text>Test</Text>
      <Text>Test</Text>
      <Text>Test</Text>
      <Text>Test</Text>
      <Text>Test</Text>
    </Container>
  );

}
