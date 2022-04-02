import React, { useEffect } from 'react';
import  {
  Extrapolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  interpolate,
  withTiming,
} from 'react-native-reanimated';

import { Calendar } from '../Calendar';

import {
  Container,
  Content,
  MonthList
} from './styles';

import { useGoogleAgenda } from '../../hooks/useGoogleAgenda';

export function CalendarAccordion({
  backgroundColor
}) {
  const { isShowAccordion, months } = useGoogleAgenda();

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
        isShowAccordion ? 480 : 0,
        {
          duration: 200,
        }
      );

      animationContent.value = withTiming(
        isShowAccordion ? 1 : 0,
        {
          duration: 400
        }
      );
    } else {
      animationContent.value = withTiming(
        isShowAccordion ? 1 : 0,
        {
          duration: 200
        }
      );

      animationAccordion.value = withTiming(
        isShowAccordion ? 480 : 0,
        {
          duration: 400,
        }
      );
    }
  }, [isShowAccordion]);

  return (
    <Container
      backgroundColor={backgroundColor}
      style={animationAccordionStyle}
    >
      <Content
        style={opacityAccordion}
      >
        <MonthList
          data={months}
          pagingEnabled
          scrollEventThrottle={16}
          alwaysBounceHorizontal={false}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => <Calendar month={item} />}
        />
      </Content>
    </Container>
  );

}
