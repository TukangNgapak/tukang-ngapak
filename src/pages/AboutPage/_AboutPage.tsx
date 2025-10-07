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
                    <span className="block mb-2">
                        <strong>Borongan:</strong> Cocok untuk Anda yang ingin hasil tuntas tanpa repot.
                    </span>
                    <span className="block">
                        <strong>Harian:</strong> Ideal untuk perbaikan kecil atau proyek bertahap.
                    </span>
                </>
            )
        },
        {
            title: "Keunggulan Kami",
            content: "Tukang Berpengalaman dan Terampil, Harga Terjangkau & Transparan, Tepat Waktu & Bertanggung Jawab, Bisa Survei dan Konsultasi Gratis*"
        }
    ];

    const serviceAreas = [
        "Cikarang Pusat", "Cikarang Utara", "Cikarang Barat", "Cikarang Timur",
        "Cikarang Selatan", "Kecamatan Tambun Selatan", "Kecamatan Tambun Utara",
        "Pondok Gede", "Jati Sampurna", "Jati Asih", "Bantar Gebang",
        "Kota Bekasi", "Kabupaten Bekasi", "Bekasi Timur", "Bekasi Selatan",
        "Bekasi Barat", "Bekasi Utara", "Medan Satria", "Mustika Jaya", "Pondok Melati"
    ];

    return (
        <section id="aboutPage">
            <div className="w-full max-w-7xl mx-auto space-y-12">
                {/* Main About Section */}
                <div className="p-6 md:p-10">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        <div className="w-full lg:w-1/4 flex-shrink-0">
                            <img
                                src="/TNtitle.png"
                                className="w-full h-auto rounded-xl shadow-md object-cover"
                                alt="Tukang Ngapak Title Logo"
                            />
                        </div>
                        <div className="w-full lg:w-2/3">
                            <h1 className="text-2xl md:text-3xl font-bold uppercase mb-6 text-gray-800 border-b-4 border-[#E9A319] inline-block pb-2">
                                Tentang Kami
                            </h1>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p className="text-justify">
                                    <strong className="text-[#E9A319] text-lg">Tukang Ngapak</strong> adalah penyedia jasa tukang bangunan profesional
                                    yang siap membantu Anda dalam membangun, merenovasi, dan memperbaiki rumah atau bangunan lainnya.
                                    Kami hadir dengan tim tukang berpengalaman yang tidak hanya terampil, tetapi juga jujur,
                                    ramah, dan mengedepankan kualitas hasil kerja.
                                </p>
                                <p className="text-justify">
                                    Dengan semangat <strong className="text-[#E9A319]">"Ngapak Ora Ngapusi"</strong>, kami berkomitmen memberikan pelayanan terbaik
                                    dan transparansi harga agar Anda merasa aman dan nyaman selama proses pembangunan berlangsung.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Service Areas */}
                    <div className="mt-10 pt-8 border-t border-gray-200">
                        <h2 className="font-bold text-xl md:text-2xl mb-6 text-gray-800 flex items-center gap-2">
                            <span className="w-1 h-8 bg-[#E9A319] rounded"></span>
                            Jangkauan Kerja Kami
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {serviceAreas.sort((a, b) => a.localeCompare(b)).map((area, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 bg-gray-50 rounded-lg p-3 hover:bg-[#FFF8E7] transition-colors duration-200"
                                >
                                    <span className="flex-shrink-0 w-6 h-6 bg-[#E9A319] text-white rounded-full flex items-center justify-center text-xs font-semibold">
                                        {index + 1}
                                    </span>
                                    <span className="text-sm md:text-base text-gray-700">{area}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-[#E9A319] to-[#D89410] text-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                        >
                            <h2 className="font-bold text-xl md:text-2xl text-center mb-5 pb-3 border-b-2 border-white/30">
                                {feature.title}
                            </h2>
                            <div className="text-sm md:text-base leading-relaxed">
                                {typeof feature.content === 'string' ? (
                                    <p className="text-center">{feature.content}</p>
                                ) : (
                                    <div>{feature.content}</div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}