"use client";

import ThemeContextWrapper from "../contexts/themeContext";

const Providers = ({ children }: { children: React.ReactNode }) => {
    return <ThemeContextWrapper>{children}</ThemeContextWrapper>;
};

export default Providers;
