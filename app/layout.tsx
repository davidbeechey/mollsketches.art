import Footer from "./(components)/Footer";
import Navigation from "./(components)/Navigation";
import "./(styles)/tailwind.css";
import "./(styles)/global.css";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
    variable: "--font-montserrat",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => (
    <html lang="en" className={montserrat.variable}>
        <head />
        <body>
            <div className="px-4 md:px-12 lg:px-16 xl:px-32 flex flex-col justify-between min-h-screen transition duration-300 bg-gray-100 dark:bg-black text-gray-800 dark:text-white">
                <Navigation />
                <main id="content" className="py-8 max-w-[110em] mx-auto">
                    {children}
                </main>
                <Footer />
            </div>
        </body>
    </html>
);

export default RootLayout;
