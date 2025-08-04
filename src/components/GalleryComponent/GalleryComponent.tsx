import { imageComponent } from "../../variable/gallery";
import { ArrowLeftCircle } from "lucide-react";

export default function GalleryComponent() {
    return (
        <section className="">
            <nav className="fixed bg-white z-50 top-0 left-0 right-0 py-4 px-8 shadow shadow-gray-400">
                <ul className="flex items-center justify-between px-6">
                    <li>
                        <h1 className="text-[#E9A319] font-bold tracking-wider uppercase text-sm md:text-xl">Tukang Ngapak</h1>
                    </li>
                    <li>
                        <button
                            className="w-full text-left text-sm md:text-lg text-gray-800 hover:text-[#E9A319] hover:bg-[#E9A319]/10 transition-all duration-300 py-2 px-4 font-medium rounded-lg flex items-center gap-1"
                            onClick={() => window.location.href = "/"}>
                            <ArrowLeftCircle />
                            Back to Home
                        </button>
                    </li>
                </ul>
            </nav>
            <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
                {imageComponent.map((item, index) => (
                    <div key={item.id || index} className="break-inside-avoid overflow-hidden shadow-md shadow-gray-400">
                        <img
                            src={item.url}
                            alt={item.alt}
                            className="w-auto h-auto object-cover transition-transform duration-300 hover:scale-105"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
