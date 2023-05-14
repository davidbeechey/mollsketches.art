import { Card } from "components";

export const metadata = {
    title: "About - Mollsketches",
    description: "Mollie aka Mollsketches is an 18 year old amateur illustrator and artist...",
    viewport: "width=device-width, initial-scale=1",
};

const About = () => (
    <div className="main-content flex flex-col justify-center items-center animate-in fade-in-50 slide-in-from-bottom-10 duration-500">
        <h1>About</h1>
        <div className="text-gray-600 text-lg grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <Card>
                Mollie aka Mollsketches is a 19 year old amateur illustrator and artist. She is
                beginning her studies at a prestigious art school in Scotland in 2021, Illustration
                (BA/Hons).
            </Card>
            <Card>
                Mollie has gained a mediocre following on platforms such as Twitter, Instagram,
                YouTube and Twitch. There they mostly post Fanart from various Fandoms and of
                artists such as; MCYT and Orla Gartland. This work has been recognised by the likes
                of dodie, Orla Gartland and popular content creator Dream.
            </Card>
            <Card>
                She has more real life experience with commissions for education and scouting
                associations where they have created designs for posters, thumbnails and badges.
            </Card>
            <Card>
                Whilst Mollie is still learning, she is a very capable and friendly individual and
                can be contacted through this form if you&apos;d like to commission her!
            </Card>
        </div>
    </div>
);

export default About;
