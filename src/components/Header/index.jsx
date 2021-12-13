import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';

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
  menuButtonOnPress = () => {},
  searchButtonOnPress = () => {},
  calendarButtonOnPress = () => {},
  moreButtonOnPress = () => {}
}) {

  return (
    <Container color="#efefef">
      {activeMenuButton &&
        <ActionButton onPress={menuButtonOnPress}>
          <FeatherIcon
            name={menuIcon ? menuIcon : "menu"}
            size={20}
          />
        </ActionButton>
      }

      <MonthButton color="#efefef">
        <MonthLabel>January</MonthLabel>
        <FeatherIcon name="chevron-down" size={20} />
      </MonthButton>

      {activeSearchButton &&
        <ActionButton onPress={searchButtonOnPress}>
          <FeatherIcon
            name={searchIcon ? searchIcon : "search"}
            size={20}
          />
        </ActionButton>
      }

      {activeCalendarButton &&
        <ActionButton onPress={calendarButtonOnPress}>
          <FeatherIcon
            name={calendarIcon ? calendarIcon : "calendar"}
            size={20}
          />
        </ActionButton>
      }

      {activeMoreVerticalButton &&
        <ActionButton onPress={moreButtonOnPress}>
          <FeatherIcon
            name={moreIcon ? moreIcon : "more-vertical"}
            size={20}
          />
        </ActionButton>
      }
    </Container>
  );

}
