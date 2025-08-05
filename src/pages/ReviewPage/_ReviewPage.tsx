import ReviewComponent from "../../components/ReviewComponent/ReviewComponent";

export default function ReviewPage() {
    return (
        <>
            <section className="fade-in-section w-full h-[80dvh] flex flex-col justify-center items-center overflow-hidden">
                <div className="text-center">
                    <h1 className="text-3xl md:text-4xl font-bold uppercase text-gray-800 mb-2">
                        Review
                    </h1>
                    <p className="text-lg text-gray-500">
                        Review Para Pelanggan
                    </p>
                </div>
                <ReviewComponent />
            </section>
        </>
    )
}