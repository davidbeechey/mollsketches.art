import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "../../firebase/firebase";
import SingleWallpaper from "./SingleWallpaper";

const getAllWallpapers = async () => {
    const wallpapersRef = ref(storage, "wallpapers");
    const res = await listAll(wallpapersRef);
    return res.items;
};

const WallpapersGrid = async () => {
    const wallpapers = await getAllWallpapers();
    const promises = wallpapers.map((wallpaper) => getDownloadURL(wallpaper));
    const downloadURLs = await Promise.all(promises);

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6 lg:gap-8">
            {downloadURLs.map((url, index) => (
                <SingleWallpaper key={index} downloadURL={url} alt="something" />
            ))}
        </div>
    );
};

export default WallpapersGrid;
