import { socials } from "../../config/socials";

const SocialButton = ({ name, link, icon }: { name: string; link: string; icon: JSX.Element }) => (
    <a
        href={link}
        target="blank_"
        title={name}
        className="text-2xl px-5 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-gray-800 dark:text-gray-100"
    >
        {icon}
    </a>
);

const SocialButtons = () => (
    <div className="flex py-4 w-min justify-center px-2">
        {socials.map((link, index) => (
            <SocialButton key={index} name={link.name} link={link.link} icon={link.icon} />
        ))}
    </div>
);

export default SocialButtons;
