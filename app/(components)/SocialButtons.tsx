import { socials } from "../../config/socials";

const SocialButtons = () => (
    <div className="flex py-4 w-min justify-center px-2">
        {socials.map(({ name, link, icon }, index) => (
            <SocialButton key={index} name={name} link={link} icon={icon} />
        ))}
    </div>
);

export default SocialButtons;

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
