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
        <section className="bg-gradient-to-br from-slate-50 to-white py-16 px-4 overflow-hidden">
            {/* Heading */}
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug text-slate-900">
                    Loved ❤️ by more than a Million Entrepreneurs,
                    Marketers and Content Creators.
                </h2>
            </div>

            {/* Scrollable Row */}
            <div className="overflow-x-auto overflow-y-hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <div className="flex gap-6 pb-4">
                    {images.map((src, idx) => (
                        <div
                            key={idx}
                            className="flex-shrink-0 w-1/4 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 bg-white border border-slate-200/60"
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
