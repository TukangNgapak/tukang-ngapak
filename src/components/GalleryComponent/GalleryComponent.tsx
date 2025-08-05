import { imageComponent } from "../../variable/gallery";
import { ArrowLeftCircle } from "lucide-react";

export default function GalleryComponent() {
    return (
        <>
            <nav className="absolute bg-white z-50 top-0 left-0 right-0 py-2 shadow shadow-gray-400">
                <ul className="flex items-center justify-end">
                    <button
                        className="flex flex-row items-center gap-2 w-fit text-left text-xs md:text-lg  font-medium rounded-lg py-2 px-4 text-gray-800 hover:text-[#E9A319] hover:bg-[#E9A319]/10 transition-all duration-300"
                        onClick={() => window.location.href = "/"}>
                        <ArrowLeftCircle size={20} />
                        Back to Home
                    </button>
                </ul>
            </nav>
            <div className="bg-[#E9A319] border-[14px] border-[#E9A319] rounded-xl h-[85vh] translate-y-10 overflow-auto">
                <div className="columns-1 sm:columns-4 md:columns-5 gap-2 space-y-2">
                    {imageComponent.map((item, index) => (
                        <div key={item.id || index} className="break-inside-avoid overflow-hidden">
                            <img
                                src={item.url}
                                alt={item.alt}
                                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
