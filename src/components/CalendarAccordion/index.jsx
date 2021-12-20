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

import { useGoogleAgenda } from '../../hooks/useGoogleAgenda';

export function CalendarAccordion({
  backgroundColor
}) {
  const { isShowAccordion } = useGoogleAgenda();

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
    if (isShowAccordion) {
      animationAccordion.value = withTiming(
        isShowAccordion ? 260 : 0,
        {
          duration: 100,
          easing: Easing.inOut(Easing.ease)
        }
      );

      animationContent.value = withTiming(
        isShowAccordion ? 1 : 0,
        {
          duration: 350
        }
      );
    } else {
      animationContent.value = withTiming(
        isShowAccordion ? 1 : 0,
        {
          duration: 100
        }
      );

      animationAccordion.value = withTiming(
        isShowAccordion ? 260 : 0,
        {
          duration: 300,
          easing: Easing.inOut(Easing.ease)
        }
      );
    }
  }, [isShowAccordion]);

  return (
    <Container
      style={animationAccordionStyle}
      backgroundColor={backgroundColor}
    >
      <Content style={opacityAccordion}>
        <Calendar />
      </Content>
    </Container>
  );

}
