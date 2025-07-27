import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
    const contactInfo = [
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Telepon",
            content: "+62 858-1353-0803 (Veroh/Bpk. Hafiz)",
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
            content: "Kampung Bulak Kendar RT 10/RW 003. Desa Mekarsari, Tambun Selatan, Bekasi, Jawa Barat, 17510. (Veroh/Bpk. Hafiz)",
            link: "#"
        },
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

                <div className="w-full fade-in-section">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                                Informasi Kontak
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-4 justify-center w-full gap-6">
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
                </div>
            </div>
        </section>
    );
}