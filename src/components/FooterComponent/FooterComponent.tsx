import { Phone, Mail, MapPin, MessageCircleMore } from "lucide-react";

export default function FooterComponent() {
    const currentYear = new Date().getFullYear();

    const contactInfo = [
        {
            icon: <Phone className="w-5 h-5" />,
            text: "+62 858-1353-0803",
            link: "tel:+6285813530803"
        },
        {
            icon: <Mail className="w-5 h-5" />,
            text: "ngapakcivil@gmail.com",
            link: "mailto:ngapakcivil@gmail.com"
        },
        {
            icon: <MapPin className="w-5 h-5" />,
            text: "Kampung Bulak Kendar RT 10/RW 003. Desa Mekarsari, Tambun Selatan, Bekasi, Jawa Barat, 17510. (Veroh/Bpk. Hafiz)",
            link: "#"
        }
    ];

    const services = [
        "Bangun Rumah Baru",
        "Renovasi Rumah",
        "Perbaikan Atap",
        "Pemasangan Keramik",
        "Pengecatan",
        "Konsultasi Gratis"
    ];

    const socialMedia = [
        {
            icon: <img src="tik-tok.png" alt="Tiktok Link" className="w-6 h-6 rounded-full" />,
            name: "Tiktok",
            link: "https://www.tiktok.com/@hafiz.hafiz2340"
        },
        {
            icon: <MessageCircleMore className="w-6 h-6" color="green" />,
            name: "Whatsapp",
            link: "https://wa.me/6285813530803",
        }
    ];

    const handleLinkClick = (href: string) => {
        if (href.startsWith('#')) {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <footer className="bg-white text-black">
            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <h3 className="text-xl font-bold uppercase tracking-wide mb-4 text-[#FFB823]">
                            Tukang Ngapak
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            Penyedia jasa tukang bangunan profesional dengan komitmen
                            "Ngapak Ora Ngapusi". Kami mengutamakan kualitas,
                            transparansi, dan kepuasan pelanggan.
                        </p>
                        <div className="flex space-x-3">
                            {socialMedia.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.link}
                                    className="bg-gray-200 hover:bg-[#E9A319] p-2 rounded-lg transition-colors duration-300"
                                    aria-label={`Follow us on ${social.name}`}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">
                            Layanan Kami
                        </h4>
                        <ul className="space-y-2">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <span className="text-gray-400 text-sm hover:text-gray-800 transition-colors cursor-default">
                                        {service}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">
                            Menu Cepat
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <button
                                    onClick={() => handleLinkClick('#homePage')}
                                    className="text-gray-400 text-sm hover:text-gray-800 transition-colors"
                                >
                                    Beranda
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleLinkClick('#aboutPage')}
                                    className="text-gray-400 text-sm hover:text-gray-800 transition-colors"
                                >
                                    Tentang Kami
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleLinkClick('#projectPage')}
                                    className="text-gray-400 text-sm hover:text-gray-800 transition-colors"
                                >
                                    Proyek Kami
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleLinkClick('#contactPage')}
                                    className="text-gray-400 text-sm hover:text-gray-800 transition-colors"
                                >
                                    Kontak
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">
                            Hubungi Kami
                        </h4>
                        <ul className="space-y-3">
                            {contactInfo.map((info, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="text-[#FFB823] mt-0.5 flex-shrink-0">
                                        {info.icon}
                                    </div>
                                    {info.link !== "#" ? (
                                        <a
                                            href={info.link}
                                            className="text-gray-400 text-sm hover:text-gray-800 transition-colors leading-relaxed"
                                        >
                                            {info.text}
                                        </a>
                                    ) : (
                                        <span className="text-gray-400 text-sm leading-relaxed">
                                            {info.text}
                                        </span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-center items-center">

                        {/* Copyright */}
                        <div className="text-gray-400 text-sm text-center">
                            <p>
                                © {currentYear} <span className="font-semibold">CodersProject</span>.
                                All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="bg-[#E9A319] rounded-lg p-6 mt-8 text-center">
                    <h5 className="text-white font-bold text-lg mb-2">
                        Siap Memulai Proyek Anda?
                    </h5>
                    <p className="text-white/90 text-sm mb-4">
                        Hubungi kami sekarang untuk konsultasi gratis!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                            href="tel:+6285813530803"
                            className="bg-white text-[#E9A319] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm"
                        >
                            Telepon Sekarang
                        </a>
                        <a
                            href="https://wa.me/6285813530803"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-[#E9A319] transition-colors text-sm"
                        >
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}