import { motion } from "framer-motion";
import { reviews } from "../../variable/review";
import { UserRound } from "lucide-react"

export default function ReviewComponent() {
    return (
        <div className="overflow-hidden py-8 bg-white flex flex-shrink-0 gap-2">
            <motion.div
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{
                    duration: 60,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="flex gap-6 w-max"
            >
                {[...reviews, ...reviews].map((review, index) => (
                    <div
                        key={index}
                        className="min-w-[22rem] max-w-[22rem] h-full bg-white shadow-md border border-gray-200 rounded-xl p-4 flex flex-col justify-center"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <UserRound className="w-8 h-8 ring-2 ring-gray-400 rounded-full text-gray-400" />
                            <div>
                                <h2 className="font-semibold text-lg text-gray-800">
                                    {review.name}
                                </h2>
                                <p className="text-yellow-500 text-md">
                                    {"⭐".repeat(review.stars)}
                                </p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            "{review.review}"
                        </p>
                    </div>
                ))}
            </motion.div>
            <motion.div
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{
                    duration: 60,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="flex gap-6 w-max"
            >
                {[...reviews, ...reviews].map((review, index) => (
                    <div
                        key={index}
                        className="min-w-[22rem] max-w-[22rem] h-full bg-white shadow-md border border-gray-200 rounded-xl p-4 flex flex-col justify-center"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <UserRound className="w-8 h-8 ring-2 ring-gray-400 rounded-full text-gray-400" />
                            <div>
                                <h2 className="font-semibold text-lg text-gray-800">
                                    {review.name}
                                </h2>
                                <p className="text-yellow-500 text-md">
                                    {"⭐".repeat(review.stars)}
                                </p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            "{review.review}"
                        </p>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
