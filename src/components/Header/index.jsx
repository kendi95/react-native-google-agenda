import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {
  Container,
  MonthButton,
  MonthLabel,
  ActionButton
} from './styles';
import { ICON_NAMES } from './types';

export function Header({
  activeMenuButton = true,
  activeSearchButton = true,
  activeCalendarButton = true,
  activeMoreVerticalButton = true,
  menuIcon = null || ICON_NAMES,
  searchIcon = null || ICON_NAMES,
  calendarIcon = null || ICON_NAMES,
  moreIcon = null
}) {

  return (
    <Container color="#efefef">
      {activeMenuButton &&
        <ActionButton>
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
        <ActionButton>
          <FeatherIcon
            name={searchIcon ? searchIcon : "search"}
            size={20}
          />
        </ActionButton>
      }

      {activeCalendarButton &&
        <ActionButton>
          <FeatherIcon
            name={calendarIcon ? calendarIcon : "calendar"}
            size={20}
          />
        </ActionButton>
      }

      {activeMoreVerticalButton &&
        <ActionButton>
          <FeatherIcon
            name={moreIcon ? moreIcon : "more-vertical"}
            size={20}
          />
        </ActionButton>
      }
    </Container>
  );

}
