import Image from "next/image";
import Link from "next/link";
import profilePic from "public/images/profile.png";

const Logo = () => (
    <Link href="/" className="flex items-center gap-4 md:gap-6">
        <Image
            src={profilePic}
            alt="Mollsketches' profile picture, a drawing of them."
            className="w-16 md:w-20"
        />
        <p className="text-xl md:text-2xl tracking-wide text-gray-800 dark:text-gray-100">
            Mollsketches
        </p>
    </Link>
);

export default Logo;
