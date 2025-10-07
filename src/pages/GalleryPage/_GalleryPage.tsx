import { useState } from "react";
import { imageComponent } from "../../variable/gallery";

export default function GalleryPage() {
    const [visibleCount, setVisibleCount] = useState(9); // jumlah awal foto

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 9); // tambah 9 setiap klik
    };

    return (
        <section id="galleryPage" className="py-16 px-4">
            <div className="fade-in-section max-w-6xl mx-auto space-y-12">
                {/* Header Section */}
                <div className="text-center">
                    <h1 className="text-3xl md:text-4xl font-bold uppercase text-gray-800 mb-2">
                        Gallery
                    </h1>
                    <p className="text-lg text-gray-500">- Galeri Kami -</p>
                </div>

                {/* Gallery Grid */}
                <div className="MyGradient grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                    {imageComponent.slice(0, visibleCount).map((item) => (
                        <div
                            key={item.id}
                            className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            <img
                                src={item.url}
                                alt={item.alt}
                                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>

                {imageComponent.length > 0 && (
                    <div className="w-full -translate-y-[2rem] flex justify-center items-center">
                        <button
                            onClick={handleLoadMore}
                            className={`cursor-pointer w-fit text-center text-[#E9A319] hover:text-[#E9A319] hover:bg-[#E9A319]/10 ${imageComponent.length > visibleCount ? "block" : "hidden"} transition-all duration-300 py-2 px-4 text-lg font-medium`}
                        >
                            Lihat Selengkapnya
                        </button>
                    </div>
                )}


                {/* Call to Action */}
                <div className="text-center bg-gray-50 rounded-xl p-8">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                        Tertarik dengan Hasil Kerja Kami?
                    </h3>
                    <p className="text-gray-600 mb-6">
                        Hubungi kami untuk konsultasi gratis dan dapatkan penawaran terbaik untuk proyek Anda.
                    </p>
                    <a
                        href="#contactPage"
                        className="inline-block bg-[#E9A319] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#d4921a] transition-colors duration-300"
                    >
                        Hubungi Kami
                    </a>
                </div>
            </div>
        </section>
    );
}
