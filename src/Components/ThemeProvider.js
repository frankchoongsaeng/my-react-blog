import React, { createContext, useState } from 'react';

export const Theme = createContext("dark");

function ThemeProvider({ children }) {

  const [theme, setTheme] = useState("light");
  const themeValue = [theme, setTheme];

  return(
    <Theme.Provider value={ themeValue } >
      {children}
    </Theme.Provider>
  );
}

export default ThemeProvider;