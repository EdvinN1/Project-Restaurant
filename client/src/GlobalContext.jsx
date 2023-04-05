import React, { createContext, useState } from 'react';

export const GlobalContext = createContext({
  loggedIn: false,
  setLoggedIn: () => {}
});

export const GlobalProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const updateLoggedIn = (loggedIn) => {
    setLoggedIn(loggedIn);
  };

  return (
    <GlobalContext.Provider value={{ loggedIn, updateLoggedIn }}>
      {children}
    </GlobalContext.Provider>
  );
};