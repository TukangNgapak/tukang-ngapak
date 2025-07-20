import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
    const contactInfo = [
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Telepon",
            content: "+62 858-1353-0803",
            link: "tel:+6281234567890"
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
            content: "Jl. Contoh Alamat No. 123, Kota, Provinsi",
            link: "#"
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Jam Kerja",
            content: "Senin - Sabtu: 07.00 - 17.00 WIB",
            link: "#"
        }
    ];

    interface ContactFormElements extends HTMLFormControlsCollection {
        name: HTMLInputElement;
        phone: HTMLInputElement;
        email: HTMLInputElement;
        service: HTMLSelectElement;
        message: HTMLTextAreaElement;
    }

    interface ContactForm extends HTMLFormElement {
        elements: ContactFormElements;
    }

    interface SendEmailResponse {
        success: boolean;
        [key: string]: any;
    }

    async function handleSubmit(e: React.FormEvent<ContactForm>) {
        e.preventDefault(); // hindari reload halaman

        const form = e.target as ContactForm;
        const formData = new FormData(form);

        const res = await fetch('/Api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                to: formData.get('email'),
                subject: `Pesan dari ${formData.get('name')}`,
                message: `
                <strong>Nama:</strong> ${formData.get('name')}<br/>
                <strong>Telepon:</strong> ${formData.get('phone')}<br/>
                <strong>Email:</strong> ${formData.get('email')}<br/>
                <strong>Layanan:</strong> ${formData.get('service')}<br/>
                <strong>Pesan:</strong> ${formData.get('message')}
    `,
            }),
        });


        const data: SendEmailResponse = await res.json();
        if (data.success) {
            alert('Email berhasil dikirim!');
            form.reset();
        } else {
            alert('Gagal mengirim email.');
        }
    }


    return (
        <section id="contactPage" className="py-16 px-4 bg-gray-50">
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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 fade-in-section">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                                Informasi Kontak
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {contactInfo.map((info, index) => (
                                    <div
                                        key={index}
                                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
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
                        <div className="bg-[#E9A319] text-white p-8 rounded-lg">
                            <h3 className="text-2xl font-bold mb-4">
                                Konsultasi Gratis!
                            </h3>
                            <p className="mb-6 opacity-90">
                                Dapatkan konsultasi gratis untuk proyek Anda. Tim ahli kami siap membantu
                                merencanakan dan merealisasikan impian bangunan Anda.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="tel:+6285813530803"
                                    className="bg-white text-[#E9A319] px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors duration-300"
                                >
                                    Telepon Sekarang
                                </a>
                                <a
                                    href="https://wa.me/6285813530803"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border border-white text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-white hover:text-[#E9A319] transition-colors duration-300"
                                >
                                    WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-lg shadow-lg relative">
                        <div className="bg-black/80 absolute inset-0 flex items-center justify-center rounded-lg">
                            <h1 className="text-gray-400 text-2xl uppercase font-medium font-sans">Can't be used yet</h1>
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                            Kirim Pesan
                        </h2>
                        <form className="space-y-6" method="POST" autoComplete="off" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Nama Lengkap
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E9A319] focus:border-transparent outline-none transition-all duration-300"
                                        placeholder="Masukkan nama lengkap"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                        Nomor Telepon
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E9A319] focus:border-transparent outline-none transition-all duration-300"
                                        placeholder="Masukkan nomor telepon"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E9A319] focus:border-transparent outline-none transition-all duration-300"
                                    placeholder="Masukkan email"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                                    Jenis Layanan
                                </label>
                                <select
                                    id="service"
                                    name="service"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E9A319] focus:border-transparent outline-none transition-all duration-300"
                                    required
                                >
                                    <option value="">Pilih jenis layanan</option>
                                    <option value="bangun-rumah">Bangun Rumah</option>
                                    <option value="renovasi">Renovasi Rumah</option>
                                    <option value="perbaikan">Perbaikan</option>
                                    <option value="lainnya">Lainnya</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Pesan
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={2}
                                    className="resize-none w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E9A319] focus:border-transparent outline-none transition-all duration-300 resize-vertical"
                                    placeholder="Deskripsikan proyek atau kebutuhan Anda..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#E9A319] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#d4921a] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#E9A319] focus:ring-offset-2"
                            >
                                Kirim Pesan
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}