import Link from "next/link";
import { FaTwitter, FaInstagram, FaTwitch, FaTiktok, FaYoutube } from "react-icons/fa";

const SocialButtons = () => (
    <div className="flex py-4 w-min justify-center px-2">
        {SOCIALS.map(({ name, link, icon }, index) => (
            <SocialButton key={index} name={name} link={link} icon={icon} />
        ))}
    </div>
);

export default SocialButtons;

const SocialButton = ({ name, link, icon }: { name: string; link: string; icon: JSX.Element }) => (
    <Link
        href={{
            pathname: link,
        }}
        target="blank_"
        title={name}
        className="text-2xl px-5 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-gray-800 dark:text-gray-100"
    >
        {icon}
    </Link>
);

const SOCIALS = [
    {
        name: "Twitter",
        link: "https://www.twitter.com/mollsketches",
        icon: <FaTwitter />,
    },
    {
        name: "Instagram",
        link: "https://www.instagram.com/mollsketches",
        icon: <FaInstagram />,
    },
    {
        name: "TikTok",
        link: "https://www.tiktok.com/@mollsketches",
        icon: <FaTiktok />,
    },
    {
        name: "Twitch",
        link: "https://twitch.tv/mollsketches",
        icon: <FaTwitch />,
    },
    {
        name: "YouTube",
        link: "https://www.youtube.com/channel/UCyMk3CAXUzol7J-0Hdq7PYQ",
        icon: <FaYoutube />,
    },
];
