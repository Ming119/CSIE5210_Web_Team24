import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';

const DarkModeToggle = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();

    return (
        <button
            className="darkModeContainer"
            onClick={toggleDarkMode}
            aria-label={darkMode ? "切換到淺色模式" : "切換到深色模式"}
        >
            {darkMode ? '☀️ 日間模式' : '🌙 夜間模式'}
        </button>
    );
};

export default DarkModeToggle;