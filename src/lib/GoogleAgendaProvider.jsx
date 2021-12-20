import React, { createContext, useState } from 'react';

export const GoogleAgenda = createContext({
  isShowAccordion: false,
  handleToggleAccordion: () => {},
});

export const GoogleAgendaProvider = ({ children }) => {
  const [isShowAccordion, setIsShowAccordion] = useState(false);

  function handleToggleAccordion() {
    setIsShowAccordion((oldIsShowAccordion) => !oldIsShowAccordion);
  }

  return (
    <GoogleAgenda.Provider
      value={{
        isShowAccordion,
        handleToggleAccordion
      }}
    >
      { children }
    </GoogleAgenda.Provider>
  );

}
