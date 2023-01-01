import Card from "../components/Card";
import { socials } from "../config/socials";
import ProfileImage from "./(components)/ProfileImage";

const Home = () => (
    <>
        <div className="flex flex-col space-y-12 justify-center items-center main-content align-middle animate-in fade-in-50 slide-in-from-bottom-10 duration-500">
            <h1 className="text-[8em] sm:text-[12em] md:text-[15em] lg:text-[20em] leading-none tracking-widest uppercase font-black text-transparent break-all">
                <span className="profile-background">Mollsketches</span>
            </h1>
            {/* <div className="flex flex-col sm:flex-row gap-12 items-center">
                <div className="max-w-xs">
                    <ProfileImage />
                </div>
                <Card styles="max-h-max w-full sm:max-w-max">
                    <h2>Socials</h2>
                    <div className="space-y-4">
                        {socials.map(({ name, link, icon }) => (
                            <a
                                key={link}
                                href={link}
                                className="flex gap-4 items-center group text-m"
                            >
                                <div className="transition group-hover:scale-125">{icon}</div>
                                {name}
                            </a>
                        ))}
                    </div>
                </Card>
            </div> */}
        </div>
    </>
);

export default Home;
