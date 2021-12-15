import React, { useMemo, useState } from 'react';
import { StyleSheet } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { format } from 'date-fns';
import {
  useSharedValue,
  withTiming,
  useDerivedValue,
  interpolate,
  useAnimatedStyle,
  Extrapolate,
} from 'react-native-reanimated';

import { CalendarAccordion } from '../CalendarAccordion';

import {
  Container,
  MonthButton,
  IconContainer,
  MonthLabel,
  ActionButton
} from './styles';

export function Header({
  activeMenuButton = true,
  activeSearchButton = true,
  activeCalendarButton = true,
  activeMoreVerticalButton = true,
  disabledChevron = false,
  menuIcon = null,
  searchIcon = null,
  calendarIcon = null,
  moreIcon = null,
  currentMonth = new Date(),
  backgroundCalendarAccordion = "#efefef",
  menuButtonOnPress = () => {},
  searchButtonOnPress = () => {},
  calendarButtonOnPress = () => {},
  moreButtonOnPress = () => {}
}) {
  const [showAccordion, setShowAccordion] = useState(false);

  const monthFormatted = useMemo(() => {
    return format(currentMonth, "MMMM");
  }, [currentMonth]);

  const animation = useSharedValue(0);

  const rotation = useDerivedValue(() => {
    return interpolate(
      animation.value,
      [0, 180],
      [0, 180],
      Extrapolate.CLAMP
    );
  });

  const animationRotateStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${rotation.value} deg`
        }
      ]
    }
  });

  const handleShowCalendar = () => {
    setShowAccordion(oldShowAccordion => !oldShowAccordion);

    animation.value = withTiming(
      animation.value === 0 ? 180 : 0,
      { duration: 300 }
    );
  }

  return (
    <>
      <Container color="#efefef">
        {activeMenuButton &&
          <ActionButton
            onPress={menuButtonOnPress}
            style={styles.menuButton}
          >
            <FeatherIcon
              name={menuIcon ? menuIcon : "menu"}
              size={20}
            />
          </ActionButton>
        }

        <MonthButton onPress={handleShowCalendar} color="#efefef">
          <MonthLabel>{monthFormatted}</MonthLabel>

          {!disabledChevron && (
            <IconContainer style={animationRotateStyle}>
              <FeatherIcon name="chevron-down" size={20} />
            </IconContainer>
          )}
        </MonthButton>

        {activeSearchButton &&
          <ActionButton
            onPress={searchButtonOnPress}
            style={styles.buttonLeft}
          >
            <FeatherIcon
              name={searchIcon ? searchIcon : "search"}
              size={20}
            />
          </ActionButton>
        }

        {activeCalendarButton &&
          <ActionButton
            onPress={calendarButtonOnPress}
            style={styles.buttonLeft}
          >
            <FeatherIcon
              name={calendarIcon ? calendarIcon : "calendar"}
              size={20}
            />
          </ActionButton>
        }

        {activeMoreVerticalButton &&
          <ActionButton
            onPress={moreButtonOnPress}
            style={styles.buttonLeft}
          >
            <FeatherIcon
              name={moreIcon ? moreIcon : "more-vertical"}
              size={20}
            />
          </ActionButton>
        }
      </Container>

      <CalendarAccordion
        isShowAccordion={showAccordion}
        backgroundColor={backgroundCalendarAccordion}
      />
    </>
  );

}

const styles = StyleSheet.create({
  menuButton: {
    marginRight: 8
  },
  buttonLeft: {
    marginLeft: 8
  }
});
