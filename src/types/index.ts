import { FeatherIconName } from "./FeatherIconName";

export type IHeader = {
  activeMenuButton: boolean;
  activeSearchButton: boolean;
  activeCalendarButton: boolean;
  activeMoreVerticalButton: boolean;
  disabledChevron?: boolean;
  menuIcon?: FeatherIconName;
  searchIcon?: FeatherIconName;
  calendarIcon: FeatherIconName;
  moreIcon?: FeatherIconName;
  currentMonth?: Date;
  backgroundCalendarAccordion: "#efefef";
  menuButtonOnPress(): void;
  searchButtonOnPress(): void;
  calendarButtonOnPress(): void;
  moreButtonOnPress(): void;
}
