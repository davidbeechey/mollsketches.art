import styles from "./(components)/TitleSection.module.css";

export default function Home() {
    return (
        <div className="flex flex-col justify-center items-center main-content align-middle animate-in fade-in-50 slide-in-from-bottom-10 duration-500">
            <TitleSection text="mollsketches" />
            {/* <TitleSection text="etches" /> */}
        </div>
    );
}

const TitleSection = ({ text }: { text: string }) => (
    <h1 className="text-[8em] sm:text-[12em] md:text-[15em] lg:text-[20em] leading-none tracking-widest uppercase font-black text-transparent break-all">
        <span className={styles.heading}>{text}</span>
    </h1>
);
