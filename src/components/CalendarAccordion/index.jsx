import React, { useEffect } from 'react';
import  {
  Extrapolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  interpolate,
  withTiming,
  Easing
} from 'react-native-reanimated';

import { Calendar } from '../Calendar';

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
      [0, 260],
      [0, 260],
      Extrapolate.CLAMP
    );
  });

  const opacityAccordion = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        animationContent.value,
        [0, 1],
        [0, 1],
        Extrapolate.CLAMP
      )
    }
  });

  const animationAccordionStyle = useAnimatedStyle(() => {
    return {
      height: heightAccordion.value,
    }
  });

  useEffect(() => {
    animationAccordion.value = withTiming(
      isShowAccordion ? 260 : 0,
      {
        duration: 200,
        easing: Easing.inOut(Easing.ease)
      }
    );

    animationContent.value = withTiming(
      isShowAccordion ? 1 : 0,
      {
        duration: 200
      }
    );
  }, [isShowAccordion]);

  return (
    <Container style={animationAccordionStyle} backgroundColor={backgroundColor}>
      <Content style={opacityAccordion}>
        <Calendar />
      </Content>
    </Container>
  );

}
