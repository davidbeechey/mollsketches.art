import { Card } from "components";
import KoFi from "./(buttons)/KoFi";

export const metadata = {
    title: "Donate - Mollsketches",
    description: "Please consider donating to Mollie if you'd like to support their work!",
    viewport: "width=device-width, initial-scale=1",
};

const Donate = () => (
    <div className="flex flex-col items-center animate-in fade-in-50 slide-in-from-bottom-10 duration-500">
        <h1>Donate!</h1>
        <Card>
            <KoFi />
        </Card>
    </div>
);

export default Donate;
