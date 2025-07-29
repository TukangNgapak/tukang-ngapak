export default function AboutPage() {
    const features = [
        {
            title: "Layanan Kami",
            content: "Renovasi Rumah, Bangun Rumah Baru, Perbaikan Atap, Dinding, dan Lantai, Pemasangan Keramik, Plafon, & Pengecatan"
        },
        {
            title: "Sistem Kerja Flexible",
            content: (
                <>
                    <strong>Borongan:</strong> Cocok untuk Anda yang ingin hasil tuntas tanpa repot.
                    <br />
                    <strong>Harian:</strong> Ideal untuk perbaikan kecil atau proyek bertahap.
                </>
            )
        },
        {
            title: "Keunggulan Kami",
            content: "Tukang Berpengalaman dan Terampil, Harga Terjangkau & Transparan, Tepat Waktu & Bertanggung Jawab, Bisa Survei dan Konsultasi Gratis*"
        }
    ];

    return (
        <section id="aboutPage" className="py-16 px-4">
            <div className="fade-in-section flex flex-col justify-center gap-8 w-full max-w-6xl mx-auto">
                {/* Main About Section */}
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                    <div className="w-full lg:w-1/4">
                        <img
                            src="/TNtitle.png"
                            className="w-full h-auto rounded-2xl shadow-lg object-cover"
                            alt="Tukang Ngapak Title Logo"
                        />
                    </div>
                    <div className="w-full lg:w-2/3">
                        <h1 className="text-xl md:text-2xl font-semibold uppercase mb-4 text-gray-800">
                            Tentang Kami
                        </h1>
                        <div className="text-justify text-base leading-relaxed text-gray-600">
                            <p>
                                <strong className="text-[#E9A319]">Tukang Ngapak</strong> adalah penyedia jasa tukang bangunan profesional
                                yang siap membantu Anda dalam membangun, merenovasi, dan memperbaiki rumah atau bangunan lainnya.
                                Kami hadir dengan tim tukang berpengalaman yang tidak hanya terampil, tetapi juga jujur,
                                ramah, dan mengedepankan kualitas hasil kerja.
                            </p>
                            <br />
                            <p>
                                Dengan semangat <strong>"Ngapak Ora Ngapusi"</strong>, kami berkomitmen memberikan pelayanan terbaik
                                dan transparansi harga agar Anda merasa aman dan nyaman selama proses pembangunan berlangsung.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-[#E9A319] text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <h2 className="font-semibold text-xl md:text-2xl text-center mb-4">
                                {feature.title}
                            </h2>
                            <div className="text-justify text-sm md:text-base leading-relaxed">
                                {typeof feature.content === 'string' ? (
                                    <p>{feature.content}</p>
                                ) : (
                                    <p>{feature.content}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}