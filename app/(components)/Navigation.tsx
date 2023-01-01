import Logo from "./Logo";
import { links } from "../../config/links";
import MobileNav from "./MobileNav";
import ThemeToggle from "./ThemeToggle";
import NavLink from "./NavLink";

const Navigation = () => (
    <nav className="my-8 px-4 md:px-12 lg:px-16 xl:px-32">
        <div className="px-2 align-middle items-center">
            <div className="flex items-center align-middle justify-between h-24 w-full">
                {/* Desktop Navigation */}
                <div className="flex items-center w-full justify-between">
                    <Logo />
                    <div className="hidden lg:flex justify-end items-center">
                        <div className="ml-10 flex items-center gap-8 justify-end align-middle">
                            {links.map(({ name, link }, index) => (
                                <NavLink key={index} name={name} link={link} />
                            ))}
                            <div className="flex justify-center items-center px-3 py-2">
                                <ThemeToggle />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Mobile Navigation */}
                <MobileNav />
            </div>
        </div>
    </nav>
);

export default Navigation;
