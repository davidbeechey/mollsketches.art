import Card from "components/Card";
import KoFi from "./(buttons)/KoFi";

const Donate = () => (
    <div className="flex flex-col items-center animate-in fade-in-50 slide-in-from-bottom-10 duration-500">
        <h1>Donate!</h1>
        <Card>
            <KoFi />
        </Card>
    </div>
);

export default Donate;
