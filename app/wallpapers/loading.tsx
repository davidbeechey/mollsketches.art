import { Card } from "components";

const WallpapersLoading = () => {
    const NUM_WALLPAPERS = 16;

    return (
        <div className="animate-in fade-in-50 slide-in-from-bottom-10 duration-500 space-y-8">
            <h1>Wallpapers</h1>
            <Card styles="max-w-max mx-auto">
                <p>Click on a wallpaper to download!</p>
            </Card>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6 lg:gap-8">
                {Array.from({ length: NUM_WALLPAPERS }, (_, index) => index).map((index) => (
                    // Loading UI
                    <div
                        key={index}
                        className="animate-pulse bg-gray-200 dark:bg-gray-800 rounded-md"
                    >
                        <div className="h-48 sm:h-64 md:h-80 lg:h-96 w-full"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WallpapersLoading;
