"use client";

import Image from "next/image";
import Link from "next/link";
import kofi from "../../../public/images/donate/kofi.webp";

const KoFi = () => (
    <Link href="https://ko-fi.com/mollsketches" target="_blank">
        <Image src={kofi} alt="Ko-Fi logo" width={200} height={200} />
    </Link>
);

export default KoFi;
