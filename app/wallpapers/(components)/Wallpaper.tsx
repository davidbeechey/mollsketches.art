import Image from "next/image";

const Wallpaper = ({ src, alt }: { src: string; alt: string }) => (
    <div className="my-auto mx-auto">
        <a href={src} className="relative w-full max-h-max" download>
            <Image
                src={src}
                alt={alt}
                width={1000}
                height={1000}
                sizes="
                    (min-width: 1024px) 15vw,
                    (min-width: 768px) 25vw,
                    35vw"
                className="object-contain rounded-lg hover:scale-[102%] transition-all duration-300 ease-in-out max-h-max"
                quality={50}
            />
        </a>
    </div>
);

export default Wallpaper;
