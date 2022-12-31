import Footer from "./(components)/Footer";
import Navigation from "./(components)/Navigation";
import Providers from "./providers";
import "./tailwind.css";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
    variable: "--font-montserrat",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => (
    <html lang="en" className={montserrat.variable}>
        <head />
        <body className="flex flex-col justify-between min-h-screen transition duration-300 bg-gray-100 dark:bg-gradient-to-br dark:from-black dark:via-black dark:to-purple-900 text-gray-800 dark:text-white">
            <Navigation />
            <main id="content">
                <Providers>{children}</Providers>
            </main>
            <Footer />
        </body>
    </html>
);

export default RootLayout;
