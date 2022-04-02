import React, { createContext, useState, useEffect } from 'react';

import { generateWeek } from '../utils/generateWeek';
import { generateMonth } from '../utils/generateMonth';
import { generateMonths } from '../utils/generateMonths';

export const GoogleAgenda = createContext({
  isGeneratingMonths: false,
  isShowAccordion: false,
  selectedDate: "",
  week: [],
  months: [],
  currentMonth: [],
  month: [[]],
  handleToggleAccordion: () => {},
  onChangeSelectedDate: ((date) => {}),
});

export const GoogleAgendaProvider = ({ children }) => {
  const [isGeneratingMonths, setIsGeneratingMonths] = useState(false);
  const [isShowAccordion, setIsShowAccordion] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [months, setMonths] = useState([]);
  const [currentMonth, setCurrentMonth] = useState([[]]);
  const [week, setWeek] = useState([]);

  function handleToggleAccordion() {
    setIsShowAccordion((oldIsShowAccordion) => !oldIsShowAccordion);
  }

  function onChangeSelectedDate(date) {
    setSelectedDate(date);
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
