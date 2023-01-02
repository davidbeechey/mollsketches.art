import Link from "next/link";
import Logo from "../Logo";
import SocialButtons from "./SocialButtons";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="flex flex-col py-4 md:py-10 items-center gap-4 md:gap-6">
            <Logo />
            <SocialButtons />
            <div className="text-md text-gray-600 dark:text-gray-300 text-center flex flex-col sm:flex-row sm:gap-4">
                <p>
                    Contact:{" "}
                    <FooterLink
                        name="contact@mollsketches.art"
                        link="mailto:contact@mollsketches.art"
                    />
                </p>
                <p className="hidden sm:block">|</p>
                <p>
                    Created By: <FooterLink name="David Beechey" link="https://dtbeechey.dev" />
                </p>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                &copy; Copyright {currentYear} Mollsketches. All Rights Reserved
            </p>
        </footer>
    );
};

export default Footer;

const FooterLink = ({ name, link }: { name: string; link: string }) => (
    <Link className="fancy-underline" href={link} target="_blank">
        {name}
    </Link>
);
