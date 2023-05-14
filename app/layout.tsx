import Footer from "./(layout)/(footer)/Footer";
import Navigation from "./(layout)/(navigation)/Navigation";
import "./global.css";
import { Montserrat } from "next/font/google";
import AnalyticsWrapper from "./(layout)/AnalyticsWrapper";
import { Toaster } from "react-hot-toast";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => (
    <html lang="en" className={montserrat.variable}>
        <head />
        <body>
            <div className="px-4 md:px-12 xl:px-32 flex flex-col justify-between min-h-screen transition duration-300 bg-gray-100 dark:bg-black text-gray-800 dark:text-white">
                <Navigation />
                <main className="py-8 flex-grow">{children}</main>
                <Footer />
            </div>
            <AnalyticsWrapper />
            <Toaster
                position="bottom-right"
                toastOptions={{
                    style: {
                        padding: "1rem",
                    },
                }}
            />
        </body>
    </html>
);

export default RootLayout;
