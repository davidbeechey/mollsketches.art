import { Card } from "components";

export const metadata = {
    title: "Portfolio - Mollsketches",
    description: "My portfolio page! Here you can find some of my work.",
    viewport: "width=device-width, initial-scale=1",
};

const Portfolio = () => (
    <div className="flex flex-col items-center animate-in fade-in-50 slide-in-from-bottom-10 duration-500">
        <h1>Portfolio</h1>
        <Card>
            <p>Coming soon!</p>
        </Card>
    </div>
);

export default Portfolio;
