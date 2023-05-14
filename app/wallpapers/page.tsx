import { Card } from "components";
import WallpapersGrid from "./(components)/WallpapersGrid";

export const metadata = {
    title: "Wallpapers - Mollsketches",
    description: "Download some of my wallpapers!",
    viewport: "width=device-width, initial-scale=1",
};

const Wallpapers = () => (
    <div className="animate-in fade-in-50 slide-in-from-bottom-10 duration-500 space-y-8">
        <h1>Wallpapers</h1>
        <Card styles="max-w-max mx-auto">
            <p>Click on a wallpaper to download!</p>
        </Card>
        <WallpapersGrid />
    </div>
);

export default Wallpapers;
