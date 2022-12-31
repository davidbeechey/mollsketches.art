"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ name, link }: { name: string; link: string }) => {
    const pathname = usePathname();

    return (
        <Link
            href={link}
            className={
                pathname === link
                    ? "bg-primary text-white -translate-y-0.5 px-3 py-2 rounded-lg text-m font-medium shadow-lg transition duration-300 ease-in-out"
                    : "bg-gray-100 dark:bg-black transition duration-300 ease-in-out hover:bg-primary dark:hover:bg-primary hover:text-white dark:hover:text-white transform hover:-translate-y-0.5 px-3 py-2 text-m rounded-lg font-medium text-gray-800 dark:text-gray-100"
            }
        >
            {name}
        </Link>
    );
};

export default NavLink;
