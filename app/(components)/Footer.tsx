import Copyright from "./Copyright";
import Logo from "./Logo";
import SocialButtons from "./SocialButtons";

const Footer = () => (
    <footer className="flex flex-col py-10 items-center gap-4 md:gap-6">
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
        <Copyright />
    </footer>
);

const FooterLink = ({ name, link }: { name: string; link: string }) => (
    <a className="fancy-underline" href={link}>
        {name}
    </a>
);

export default Footer;
