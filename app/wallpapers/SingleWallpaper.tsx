"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const SingleWallpaper = ({ downloadURL, alt }: { downloadURL: string; alt: string }) => {
    const [paddingTop, setPaddingTop] = useState("0");

    return (
        <a href={downloadURL} className="relative w-full" style={{ paddingTop }} download>
            <Image
                src={downloadURL}
                alt={alt}
                fill={true}
                sizes="
                    (min-width: 1024px) 10vw,
                    (min-width: 768px) 20vw,
                    (min-width: 640px) 30vw,
                    100vw"
                className="object-contain rounded-lg"
                onLoad={({ target }) => {
                    const { naturalWidth, naturalHeight } = target as HTMLImageElement;
                    setPaddingTop(`calc(100% / (${naturalWidth} / ${naturalHeight})`);
                }}
                quality={75}
            />
        </a>
    );
};

export default SingleWallpaper;
