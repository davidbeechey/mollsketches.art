"use client";

import { createContext, useEffect, useState } from "react";

export const themes = {
    light: false,
    dark: true,
};

/**
 * Context that holds the theme state and a function to toggle the theme.
 */
export const ThemeContext = createContext({
    theme: themes.dark,
    toggleTheme: () => {},
});

const ThemeContextWrapper = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState(themes.dark);

    useEffect(() => {
        theme == themes.dark
            ? document.body.classList.add("dark")
            : document.body.classList.remove("dark");
    }, [theme]);

    const value = {
        theme,
        toggleTheme: () => {
            console.log("toggle theme");
            setTheme(!theme);
        },
    };

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeContextWrapper;
