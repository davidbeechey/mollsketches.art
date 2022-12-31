import Card from "../../components/Card";

const About = () => (
    <div className="flex flex-col justify-center items-center animate-in fade-in-50 slide-in-from-bottom-10 duration-500">
        <h1>About</h1>
        <div className="text-gray-600 text-lg lg:mx-20 grid md:grid-cols-2 gap-4 my-6 mx-8">
            <Card>
                <p>
                    Mollie aka Mollsketches is an 18 year old amateur illustrator and artist. She is
                    beginning her studies at a prestigious art school in Scotland in 2021,
                    Illustration (BA/Hons).
                </p>
            </Card>
            <Card>
                <p>
                    Mollie has gained a mediocre following on platforms such as Twitter, Instagram,
                    YouTube and Twitch. There they mostly post Fanart from various Fandoms and of
                    artists such as; MCYT and Orla Gartland. This work has been recognised by the
                    likes of dodie, Orla Gartland and popular content creator Dream.
                </p>
            </Card>
            <Card>
                <p>
                    She has more real life experience with commissions for education and scouting
                    associations where they have created designs for posters, thumbnails and badges.
                </p>
            </Card>
            <Card>
                <p>
                    Whilst Mollie is still learning, she is a very capable and friendly individual
                    and can be contacted through this form if you&apos;d like to commission her!
                </p>
            </Card>
        </div>
    </div>
);

export default About;
