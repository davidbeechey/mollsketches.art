import Card from "../../components/Card";
import WallpapersGrid from "./WallpapersGrid";

const Wallpapers = () => (
    <div className="animate-in fade-in-50 slide-in-from-bottom-10 duration-500 space-y-8 w-[90vw] mx-auto">
        <h1>Wallpapers</h1>
        <Card styles="max-w-max mx-auto">
            <p>Click on a wallpaper to download!</p>
        </Card>
        {/* @ts-expect-error Server Component */}
        <WallpapersGrid />
    </div>
);

export default Wallpapers;
