import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { format } from 'date-fns';

import {
  Container,
  MonthButton,
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
  const [month, setMonth] = useState<Date>(new Date());

  useEffect(() => {
    setMonth((oldCurrentMonth) => {
      if (oldCurrentMonth !== currentMonth) {
        return currentMonth;
      }

      return oldCurrentMonth;
    });
  }, [currentMonth]);

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

      <MonthButton color="#efefef">
        <MonthLabel>{month}</MonthLabel>
        <FeatherIcon name="chevron-down" size={20} />
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
