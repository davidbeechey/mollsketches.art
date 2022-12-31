"use client";

import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "../../contexts/themeContext";

const ThemeToggle = () => (
    <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
            <button onClick={toggleTheme}>
                {theme ? <FaMoon size="1.5em" /> : <FaSun size="1.5em" />}
            </button>
        )}
    </ThemeContext.Consumer>
);

export default ThemeToggle;
