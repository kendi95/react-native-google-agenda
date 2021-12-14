import React, { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { format } from 'date-fns';
import {
  useSharedValue,
  withTiming,
  useDerivedValue,
  interpolate,
  useAnimatedStyle
} from 'react-native-reanimated';

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
  menuIcon = null,
  searchIcon = null,
  calendarIcon = null,
  moreIcon = null,
  currentMonth = new Date(),
  menuButtonOnPress = () => {},
  searchButtonOnPress = () => {},
  calendarButtonOnPress = () => {},
  moreButtonOnPress = () => {}
}) {
  const monthFormatted = useMemo(() => {
    return format(currentMonth, "MMMM");
  }, [currentMonth]);

  const animation = useSharedValue(0);

  const rotation = useDerivedValue(() => {
    return interpolate(
      animation.value,
      [0, 180],
      [0, 180]
    );
  });

  const animationStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: rotation.value + 'deg'
        }
      ]
    }
  });

  const handleShowCalendar = () => {
    animation.value = withTiming(animation.value === 0 ? 180 : 0, {
      duration: 250,
    });
  }

  return (
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
        <IconContainer style={animationStyle}>
          <FeatherIcon name="chevron-down" size={20} />
        </IconContainer>
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
