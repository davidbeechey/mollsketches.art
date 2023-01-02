import { ReactNode } from "react";

const Card = ({ children, styles }: { children: ReactNode; styles?: string }) => (
    <div
        className={`transition duration-300 bg-white dark:bg-gray-800 dark:text-gray-100 shadow-lg dark:shadow-gray-900 rounded-3xl p-12 ${styles}`}
    >
        {children}
    </div>
);

export default Card;
