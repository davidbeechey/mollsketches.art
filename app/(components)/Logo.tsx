import Link from "next/link";
import ProfileImage from "./ProfileImage";

const Logo = () => (
    <Link href="/" className="flex justify-center align-middle items-center">
        <div className="w-16 md:w-20">
            <ProfileImage />
        </div>
        <p className="text-xl md:text-2xl font-light pl-4 md:pl-6 tracking-wide text-gray-800 dark:text-gray-100">
            Mollsketches
        </p>
    </Link>
);

export default Logo;
