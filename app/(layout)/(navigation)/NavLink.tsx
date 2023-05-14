"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ name, link }: { name: string; link: string }) => {
    const pathname = usePathname();

    return (
        <Link
            href={{
                pathname: link,
            }}
            className={`text-lg ${
                pathname === link
                    ? "text-primary dark:text-secondary text-m font-extrabold transition duration-300 ease-in-out"
                    : "transition duration-300 ease-in-out hover:text-primary dark:hover:text-secondary transform font-medium text-gray-800 dark:text-gray-100"
            }`}
        >
            {name}
        </Link>
    );
};

export default NavLink;
