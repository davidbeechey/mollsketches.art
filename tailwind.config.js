/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-montserrat)"],
            },
            colors: {
                primary: "#6C468A",
                secondary: "#E1A7F2",
                tertiary: "#822B35",
            },
            keyframes: {
                spinOnce: {
                    "0%": { transform: "rotate(0deg)" },
                    "100%": { transform: "rotate(360deg)" },
                },
                fadeIn: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 0.7 },
                },
            },
            animation: {
                "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "spin-once": "spinOnce 0.3s ease-out",
                "spin-fast": "spinOnce 0.5s ease-out infinite",
                tooltip: "fadeIn 0.2s",
            },
            fontSize: {
                dynamic: "clamp(9rem, -1rem + 25vw, 100rem);",
            },
        },
    },
    darkMode: "class",
    plugins: [require("tailwindcss-animate")],
};
