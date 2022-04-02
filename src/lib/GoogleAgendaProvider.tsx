import React, { createContext, useState, useEffect, FC } from 'react';

import { generateWeek, IWeekProps } from "../utils/generateWeek";
import { generateMonths } from "../utils/generateMonths";
import { IMonth } from "../utils/generateMonth";

type GoogleAgendaProps = {
  isGeneratingMonths: boolean;
  isShowAccordion: boolean;
  selectedDate: string;
  week: IWeekProps;
  months: Date[];
  currentMonth: IMonth[];
  month: IMonth[][];
  handleToggleAccordion(): void;
  onChangeSelectedDate(date: Date): void;
}

export const GoogleAgenda = createContext({} as GoogleAgendaProps);

export const GoogleAgendaProvider: FC = ({ children }) => {
  const [isGeneratingMonths, setIsGeneratingMonths] = useState(false);
  const [isShowAccordion, setIsShowAccordion] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [months, setMonths] = useState<Date[]>([]);
  const [currentMonth, setCurrentMonth] = useState<IMonth[]>([]);
  const [week, setWeek] = useState<IWeekProps>([]);

  function handleToggleAccordion() {
    setIsShowAccordion((oldIsShowAccordion) => !oldIsShowAccordion);
  }

  function onChangeSelectedDate(date: Date | undefined) {
    if (date) {
      setSelectedDate(date.toISOString());
    }
  }

  function generateWeekAndMonth() {
    try {
      setIsGeneratingMonths(true);

      const { week: genWeek } = generateWeek();
      const { months: genMonths } = generateMonths();

      setMonths(genMonths);
      setWeek(genWeek);

      setIsGeneratingMonths(false);
    } catch (error) {
      setIsGeneratingMonths(false);
    }
  }

  useEffect(() => {
    if (months.length === 0) {
      generateWeekAndMonth();
    }
  }, [months]);

  return (
    <GoogleAgenda.Provider
      value={{
        isGeneratingMonths,
        isShowAccordion,
        selectedDate,
        week,
        months,
        currentMonth,
        month: [[]],
        handleToggleAccordion,
        onChangeSelectedDate,
      }}
    >
      { children }
    </GoogleAgenda.Provider>
  );
}
