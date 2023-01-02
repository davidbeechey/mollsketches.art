import Wallpaper from "./Wallpaper";
import fs from "fs";

const WallpapersGrid = async () => {
    // Get all images from the public/images/wallpapers folder.
    const images = fs
        .readdirSync("public/images/wallpapers")
        .map((image) => `/images/wallpapers/${image}`);

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6 lg:gap-8">
            {images.map((image, index) => (
                <Wallpaper key={index} src={image} alt="something" />
            ))}
        </div>
    );
};

export default WallpapersGrid;
