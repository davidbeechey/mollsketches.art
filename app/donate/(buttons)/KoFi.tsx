"use client";

import Image from "next/image";
import Link from "next/link";
import kofi from "public/images/donate/kofi.webp";

const KOFI_LINK = "https://ko-fi.com/mollsketches";

const KoFi = () => (
    <Link href={KOFI_LINK} className="group" target="_blank">
        <Image
            src={kofi}
            alt="Ko-Fi logo"
            width={200}
            height={200}
            className="group-hover:scale-105 transition duration-300"
        />
    </Link>
);

export default KoFi;
