"use client";

import { Transition } from "@headlessui/react";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { VscClose } from "react-icons/vsc";
import { links } from "./links";
import MobileNavLink from "./MobileNavLink";
import ThemeToggle from "./ThemeToggle";

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex gap-2 lg:hidden">
            <ThemeToggle />
            <button
                onClick={() => setIsOpen(!isOpen)}
                onBlur={() => setIsOpen(false)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-black dark:text-gray-100"
                aria-controls="mobile-menu"
                aria-expanded={isOpen ? "true" : "false"}
            >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? <FiMenu size="2em" /> : <VscClose size="2em" />}
            </button>

            {/* Mobile Nav Menu */}
            <Transition
                className="absolute w-full top-32 left-0 z-50"
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {(ref) => (
                    <div
                        ref={ref}
                        className="lg:hidden flex flex-col gap-4 p-4 bg-white dark:bg-gray-800 shadow m-4 rounded-lg"
                    >
                        {links.map(({ name, link }, index) => (
                            <MobileNavLink key={index} name={name} link={link} />
                        ))}
                    </div>
                )}
            </Transition>
        </div>
    );
};

export default MobileNav;
