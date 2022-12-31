"use client";

const Copyright = () => {
    const d = new Date();
    const currentYear = d.getFullYear();

    return (
        <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
            &copy; Copyright {currentYear} Mollsketches. All Rights Reserved
        </p>
    );
};

export default Copyright;
