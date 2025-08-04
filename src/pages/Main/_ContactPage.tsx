import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
    const contactInfo = [
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Telepon",
            content: "+62 858-1353-0803 (Veroh/Bpk. Hafiz)",
            link: "tel:+6285813530803"
        },
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email",
            content: "ngapakcivil@gmail.com",
            link: "mailto:ngapakcivil@gmail.com"
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Alamat",
            content: "Kampung Bulak Kendar RT 10/RW 003. Desa Mekarsari, Tambun Selatan, Bekasi, Jawa Barat, 17510. (Veroh/Bpk. Hafiz)",
            link: "#"
        },
    ];

    return (
        <section id="contactPage" className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto fade-in-section">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold uppercase text-gray-800 mb-2">
                        Hubungi Kami
                    </h1>
                    <p className="text-lg text-gray-600">
                        Siap membantu mewujudkan proyek bangunan impian Anda
                    </p>
                </div>

                <div className="w-full fade-in-section">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                                Informasi Kontak
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 justify-center w-full gap-6">
                                {contactInfo.map((info, index) => (
                                    <div
                                        key={index}
                                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full"
                                    >
                                        <div className="flex items-center gap-4 mb-3">
                                            <div className="text-[#E9A319]">
                                                {info.icon}
                                            </div>
                                            <h3 className="font-semibold text-gray-800">
                                                {info.title}
                                            </h3>
                                        </div>
                                        {info.link !== "#" ? (
                                            <a
                                                href={info.link}
                                                className="text-gray-600 hover:text-[#E9A319] transition-colors duration-300"
                                            >
                                                {info.content}
                                            </a>
                                        ) : (
                                            <p className="text-gray-600">{info.content}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="bg-white text-black shadow-md shadow-gray-20 p-8 rounded-lg">
                            <h3 className="text-2xl font-bold mb-4 text-[#E9A319]">
                                Konsultasi Gratis!
                            </h3>
                            <p className="mb-6 opacity-90">
                                Dapatkan konsultasi gratis untuk proyek Anda. Tim ahli kami siap membantu
                                merencanakan dan merealisasikan impian bangunan Anda.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="tel:+6285813530803"
                                    className="px-6 py-3 rounded-lg font-semibold text-center bg-white text-[#E9A319] shadow-md shadow-gray-200 hover:brightness-95 duration-300"
                                >
                                    Telepon Sekarang
                                </a>
                                <a
                                    href="https://wa.me/6285813530803"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 rounded-lg font-semibold text-center bg-[#E9A319] text-white shadow-md shadow-gray-200 hover:bg-white hover:text-[#E9A319] duration-300"
                                >
                                    WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}