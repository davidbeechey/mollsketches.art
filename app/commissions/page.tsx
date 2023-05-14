import Image from "next/image";
import { Card } from "components";
import commissionImg from "public/images/commissions.png";
import CommissionsForm from "./(components)/CommissionsForm";

export const metadata = {
    title: "Commissions - Mollsketches",
    description: "Commission me!",
    viewport: "width=device-width, initial-scale=1",
};

const Commissions = () => (
    <div className="animate-in fade-in-50 slide-in-from-bottom-10 duration-500">
        <h1>Commissions</h1>
        <div className="grid lg:grid-cols-2 gap-4">
            <Image
                src={commissionImg}
                alt="Commissions options"
                className="rounded-3xl shadow-lg dark:shadow-gray-900"
                priority
                // sizes="
                //     (min-width: 1024px) 75vw,
                //     40vw"
                quality={75}
                width={1000}
                height={1000}
            />
            <Card>
                <CommissionsForm />
            </Card>
        </div>
    </div>
);

export default Commissions;
