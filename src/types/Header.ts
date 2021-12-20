import { FeatherIconName } from "./FeatherIconName";

export interface HeaderProps {
  /**
   * @default true menu button is active by default
   * @type { boolean }
   */
  activeMenuButton?: boolean;

  /**
   * @default true search button is active by default
   * @type { boolean }
   */
  activeSearchButton?: boolean;

  /**
   * @default true calendar button is active by default
   * @type { boolean }
   */
  activeCalendarButton?: boolean;

  /**
   * @default true more button is active by default
   * @type { boolean }
   */
  activeMoreVerticalButton?: boolean;

  /**
   * @default false chevron icon is desable by default
   * @type { boolean }
   */
  disabledChevron?: boolean;

  /**
   * @default null names of Feather icon
   * @type { FeatherIconName }
   */
  menuIcon?: FeatherIconName;

  /**
   * @default null names of Feather icon
   * @type { FeatherIconName }
   */
  searchIcon?: FeatherIconName;

  /**
   * @default null names of Feather icon
   * @type { FeatherIconName }
   */
  calendarIcon?: FeatherIconName;

  /**
   * @default null names of Feather icon
   * @type { FeatherIconName }
   */
  moreIcon?: FeatherIconName;

  /**
   * @default date_now current month
   * @type { Date }
   */
  currentMonth?: Date;

  /**
   * @default #efefef default color
   * @type { string }
   */
  backgroundCalendarAccordion?: string;

  menuButtonOnPress?(): void;
  searchButtonOnPress?(): void;
  calendarButtonOnPress?(): void;
  moreButtonOnPress?(): void;
}
