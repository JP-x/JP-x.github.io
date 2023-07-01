import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import React from 'react';
import { ThemeContext, themes } from '../contexts/themecontext';
import { ThemeContextWrapper } from '../contexts/themecontextwrapper';
export default function NightDayModeToggle() {
    const [darkMode, setDarkMode] = React.useState(true);
    return (
        <>
            <ThemeContext.Consumer>
            { ({ changeTheme }) => (
                <>
                <div className="row">
                   <span id="darkModeText" onClick={() => {setDarkMode(!darkMode);changeTheme(darkMode ? themes.light : themes.dark);}} className={darkMode ? "visible-inline" : "hidden"}>NIGHT MODE</span>
                   <span id="lightModeText" onClick={() => {setDarkMode(!darkMode);changeTheme(darkMode ? themes.light : themes.dark);}} className={darkMode ? "hidden" : "visible-inline"}>DAY MODE</span> 
                </div>
                <div className="row">
                <div>
                <DarkModeIcon id="darkMode" onClick={() => {setDarkMode(!darkMode);changeTheme(darkMode ? themes.light : themes.dark);}} className={darkMode ? "visible-inline" : "hidden"}/>
                <LightModeIcon id="lightMode" onClick={() => {setDarkMode(!darkMode);changeTheme(darkMode ? themes.light : themes.dark);}} className={darkMode ? "hidden" : "visible-inline"} />
                </div>
                </div>
                </>

            )}
            </ThemeContext.Consumer>
        </>
    );
}

