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
  Container,
  Content
} from './styles';

export function CalendarAccordion({
  isShowAccordion = false,
  backgroundColor
}) {
  const animationAccordion = useSharedValue(0);
  const animationContent = useSharedValue(0);

  const heightAccordion = useDerivedValue(() => {
    return interpolate(
      animationAccordion.value,
      [0, 300],
      [0, 300],
      Extrapolate.CLAMP
    );
  });

  const opacityAccordion = useDerivedValue(() => {
    return interpolate(
      animationContent.value,
      [0, 0.5, 1]
      [0, 0.5, 1],
      Extrapolate.CLAMP
    );
  });

  const animationAccordionStyle = useAnimatedStyle(() => {
    return {
      height: heightAccordion.value,
    }
  });

  const animationOpacityStyle = useAnimatedStyle(() => {
    return {
      opacity: opacityAccordion.value
    }
  });

  useEffect(() => {
    animationAccordion.value = withTiming(
      isShowAccordion ? 300 : 0,
      {
        duration: 300,
        easing: Easing.inOut(Easing.ease)
      }
    );

    animationContent.value = withTiming(
      isShowAccordion ? 1: 0,
      {
        duration: 240,
        easing: Easing.inOut(Easing.ease)
      }
    )
  }, [isShowAccordion]);

  return (
    <Container style={animationAccordionStyle} backgroundColor={backgroundColor}>
      <Content style={animationOpacityStyle}>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
      </Content>
    </Container>
  );

}
