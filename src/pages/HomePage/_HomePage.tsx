import { Hammer, HardHat, HousePlus } from "lucide-react";

export default function HomePage() {
    const services = [
        {
            icon: <HardHat size={36} className="text-white" />,
            title: "Tukang Bangunan",
            desc: "Tukang bangunan harian/borongan dengan ongkos terjangkau.",
        },
        {
            icon: <HousePlus size={36} className="text-white" />,
            title: "Renovasi Rumah",
            desc: "Jasa renovasi rumah dari ringan hingga renovasi besar.",
        },
        {
            icon: <Hammer size={36} className="text-white" />,
            title: "Bangun Rumah",
            desc: "Jasa bangun rumah dengan pembangunan menyeluruh.",
        },
    ];

    return (
        <section id="homePage" className="relative w-full h-screen overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/hero.png')" }}
                role="img"
                aria-label="Construction background"
            ></div>
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50 z-10" ></div>
            {/* Main Content */}
            <div className="fade-in-section relative z-20 flex flex-col items-center justify-center h-full px-4 text-center text-white">
                <div className="mb-8 md:mb-0">
                    <h2 className="text-lg md:text-xl font-light mb-2">
                        Selamat Datang di
                    </h2>
                    <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-wider mb-4">
                        Tukang Ngapak
                    </h1>
                    <p className="text-sm md:text-lg font-medium">
                        Solusi Terbaik untuk Renovasi{" "}
                        <br className="md:hidden" />
                        & Bangun Rumah Anda!
                    </p>
                </div>

                {/* Services Card */}
                <div className="bg-white/10 backdrop-blur-xl rounded-xl shadow-lg px-4 py-5 pb-10 w-full max-w-6xl mx-auto translate-y-1/4 md:translate-y-1/2">
                    <div className="grid grid-cols-3 gap-6 md:gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="text-white flex flex-col items-center gap-3 text-center"
                            >
                                <div className="p-2">
                                    {service.icon}
                                </div>
                                <h3 className="text-md md:text-2xl font-semibold">
                                    {service.title}
                                </h3>
                                <p className="text-xs md:text-base max-w-xs">
                                    {service.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}