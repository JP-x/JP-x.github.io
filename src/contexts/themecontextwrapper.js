import React, { useState, useEffect } from 'react';
import { ThemeContext, themes } from './themecontext';

export default function ThemeContextWrapper(props) {
  const [theme, setTheme] = useState(themes.dark);

  function changeTheme(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    switch (theme) {
      case themes.light:
        document.body.classList.add('day-mode');
        document.body.classList.remove('night-mode');
        break;
      case themes.dark:
      default:
        document.body.classList.add('night-mode');
        document.body.classList.remove('day-mode');
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}