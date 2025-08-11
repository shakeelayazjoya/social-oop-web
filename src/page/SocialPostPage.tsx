"use client";

import Image from "next/image";

const images = [
    "https://predis.ai/assets/img/testimonial/testimonialv2/inf_15.png",
    "https://predis.ai/assets/img/testimonial/testimonialv2/inf_21.png",
    "https://predis.ai/assets/img/testimonial/testimonialv2/inf_14.png",
    "https://predis.ai/assets/img/testimonial/testimonialv2/inf_2.png",
    "https://predis.ai/assets/img/testimonial/testimonialv2/inf_3.png",
    "https://predis.ai/assets/img/testimonial/testimonialv2/inf_4.png",
    "https://predis.ai/assets/img/testimonial/testimonialv2/inf_20.png",
];

export default function SocialPostPage() {
    return (
        <section className="bg-white py-12 px-4 overflow-hidden">
            {/* Heading */}
            <div className="text-center max-w-3xl mx-auto mb-10">
                <h2 className="text-3xl md:text-4xl font-bold leading-snug">
                    Loved ❤️ by more than a Million Entrepreneurs,
                    Marketers and Content Creators.
                </h2>
            </div>

            {/* Scrollable Row */}
            <div className="overflow-x-auto overflow-y-hidden scrollbar-hide">
                <div className="flex gap-4 pb-2">
                    {images.map((src, idx) => (
                        <div
                            key={idx}
                            className="flex-shrink-0 w-1/4 rounded-xl overflow-hidden shadow hover:scale-105 transition-transform duration-300 bg-gray-100"
                        >
                            <Image
                                src={src}
                                alt={`Post ${idx + 1}`}
                                width={300}
                                height={350}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
