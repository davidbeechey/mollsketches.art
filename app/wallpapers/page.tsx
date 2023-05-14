import { Card } from "components";
import fs from "fs";
import Wallpaper from "./Wallpaper";

export const metadata = {
    title: "Wallpapers - Mollsketches",
    description: "Download some of my wallpapers!",
    viewport: "width=device-width, initial-scale=1",
};

const Wallpapers = async () => {
    const images = fs
        .readdirSync("public/images/wallpapers")
        .map((image) => `/images/wallpapers/${image}`);

    return (
        <div className="space-y-8">
            <h1>Wallpapers</h1>
            <Card styles="max-w-max mx-auto">
                <p>Click on a wallpaper to download!</p>
            </Card>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6 lg:gap-8">
                {images.map((image, index) => (
                    <Wallpaper key={index} src={image} alt="something" />
                ))}
            </div>
        </div>
    );
};

export default Wallpapers;
