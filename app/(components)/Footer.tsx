import Copyright from "./Copyright";
import Logo from "./Logo";
import styles from "./Footer.module.css";
import SocialButtons from "./SocialButtons";

const Footer = () => (
    <footer className="flex flex-col mx-4 my-10 items-center gap-4 md:gap-6">
        <Logo />
        <SocialButtons />
        <p className="text-md text-gray-600 dark:text-gray-300 text-center">
            Contact:{" "}
            <FooterLink name="contact@mollsketches.art" link="mailto:contact@mollsketches.art" /> |
            Created By: <FooterLink name="David Beechey" link="https://dtbeechey.dev" />
        </p>
        <Copyright />
    </footer>
);

const FooterLink = ({ name, link }: { name: string; link: string }) => (
    <a className={styles.fancyUnderline} href={link}>
        {name}
    </a>
);

export default Footer;
