"use client";

import { FaMoon, FaSun } from "react-icons/fa";
import { useState, useEffect } from "react";

const themes = {
    light: false,
    dark: true,
};

const ThemeToggle = () => {
    const [theme, setTheme] = useState(themes.dark);

    useEffect(() => {
        theme == themes.dark
            ? document.body.classList.add("dark")
            : document.body.classList.remove("dark");
    }, [theme]);

    const toggleTheme = () => setTheme(!theme);

    return (
        <button onClick={toggleTheme}>
            {theme === themes.dark ? <FaMoon size="1.5em" /> : <FaSun size="1.5em" />}
        </button>
    );
};

export default ThemeToggle;
