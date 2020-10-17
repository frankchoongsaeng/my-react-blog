import React, { useContext } from 'react';
import { Theme } from './ThemeProvider';

function ThemeButton(props) {

  const themeContext = useContext(Theme);

  function changeTheme() {
    themeContext[1](themeContext[0] === "light" ? "dark" : "light");
  }

  return (
    <button onClick={changeTheme}>Change Theme</button>
  );
}

export default ThemeButton;