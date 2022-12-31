import Link from "next/link";

const MobileNavLink = ({ name, link }: { name: string; link: string }) => (
    <Link
        href={link}
        className="text-gray-900 dark:text-gray-100 dark:bg-gray-800 transition hover:bg-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    >
        {name}
    </Link>
);

export default MobileNavLink;
