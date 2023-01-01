import ProfileImage from "../(components)/ProfileImage";
import Card from "../../components/Card";
import { socials } from "../../config/socials";

const Me = () => (
    <div className="flex gap-12 items-center">
        <ProfileImage />
        <Card styles="max-h-max">
            <h2>Socials</h2>
            <div className="space-y-4">
                {socials.map(({ name, link, icon }) => (
                    <a key={link} href={link} className="flex gap-4 items-center group text-m">
                        <div className="transition group-hover:scale-125">{icon}</div>
                        {name}
                    </a>
                ))}
            </div>
        </Card>
    </div>
);

export default Me;
